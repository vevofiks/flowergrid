import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';
import fs from 'fs';

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

        const buffer = Buffer.from(await file.arrayBuffer());
        // Clean filename and make unique
        const filename = Date.now() + '_' + file.name.replace(/\s/g, '_');

        // Create folder based on query param
        const url_obj = new URL(req.url);
        const folder = url_obj.searchParams.get('folder') || 'blog';
        const uploadDir = path.join(process.cwd(), `public/${folder}`);

        if (!fs.existsSync(uploadDir)) {
            await fs.promises.mkdir(uploadDir, { recursive: true });
        }

        const filepath = path.join(uploadDir, filename);
        await writeFile(filepath, buffer);

        // Return URL relative to public
        const url = `/${folder}/${filename}`;

        return NextResponse.json({
            success: 1,
            file: {
                url: url,
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
