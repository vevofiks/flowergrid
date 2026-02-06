import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('image') as File;

        if (!file) {
            return NextResponse.json(
                { success: 0, error: 'No file uploaded' },
                { status: 400 }
            );
        }

        const url_obj = new URL(req.url);
        const folder = url_obj.searchParams.get('folder') || 'blog';
        const filename = `${folder}/${Date.now()}_${file.name.replace(/\s/g, '_')}`;

        const blob = await put(filename, file, {
            access: 'public',
        });

        return NextResponse.json({
            success: 1,
            file: {
                url: blob.url,
            },
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { success: 0, error: 'Upload failed: ' + (error as Error).message },
            { status: 500 }
        );
    }
}
