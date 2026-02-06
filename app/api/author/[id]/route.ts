import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Author from '@/models/Author';

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
        const author = await Author.findById(id);

        if (!author) {
            return NextResponse.json(
                { success: false, error: 'Author not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: author });
    } catch (error) {
        console.error('Fetch author error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch author' },
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

        const author = await Author.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!author) {
            return NextResponse.json(
                { success: false, error: 'Author not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: author });
    } catch (error) {
        console.error('Update author error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update author' },
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

        const author = await Author.findByIdAndDelete(id);

        if (!author) {
            return NextResponse.json(
                { success: false, error: 'Author not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: author });
    } catch (error) {
        console.error('Delete author error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete author' },
            { status: 500 }
        );
    }
}
