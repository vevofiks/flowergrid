import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

type Props = {
    params: Promise<{ id: string }>
}

export async function GET(
    req: Request,
    { params }: Props
) {
    try {
        await connectDB();
        const resolvedParams = await params;
        const { id } = resolvedParams;
        const blog = await Blog.findById(id).populate('author');
        if (!blog) {
            return NextResponse.json(
                { success: false, error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: blog });
    } catch (error) {
        console.error('Fetch blog error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blog' },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    { params }: Props
) {
    try {
        await connectDB();
        const resolvedParams = await params;
        const { id } = resolvedParams;
        const body = await req.json();
        console.log('Update blog data:', body);

        const existingBlog = await Blog.findById(id);
        if (!existingBlog) {
            return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
        }

        const { del } = await import('@vercel/blob');
        const { extractImageUrls } = await import('@/lib/utils');

        const oldContentImages = extractImageUrls(existingBlog.content);
        const oldTldrImages = typeof existingBlog.tldr === 'object' ? extractImageUrls(existingBlog.tldr) : [];
        const allOldImages = [...oldContentImages, ...oldTldrImages];

        const newContentImages = extractImageUrls(body.content);
        const newTldrImages = typeof body.tldr === 'object' ? extractImageUrls(body.tldr) : [];
        const allNewImages = new Set([...newContentImages, ...newTldrImages]);

        const removedImages = allOldImages.filter(imgUrl => !allNewImages.has(imgUrl));

        for (const imgUrl of removedImages) {
            try {
                if (imgUrl.includes('blob.vercel-storage.com')) {
                    await del(imgUrl);
                    console.log('Deleted unused blob image:', imgUrl);
                }
            } catch (err) {
                console.error('Failed to delete blob image:', imgUrl, err);
            }
        }

        const blog = await Blog.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        }).populate('author');

        return NextResponse.json({ success: true, data: blog });
    } catch (error) {
        console.error('Update blog error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update blog' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: Props
) {
    try {
        await connectDB();
        const resolvedParams = await params;
        const { id } = resolvedParams;

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json(
                { success: false, error: 'Blog not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: blog });
    } catch (error) {
        console.error('Delete blog error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete blog' },
            { status: 500 }
        );
    }
}
