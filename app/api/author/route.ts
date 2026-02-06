import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Author from '@/models/Author';

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.name) {
            return NextResponse.json(
                { success: false, error: 'Name is required' },
                { status: 400 }
            );
        }

        const author = await Author.create(body);
        return NextResponse.json({ success: true, data: author }, { status: 201 });
    } catch (error: any) {
        console.error('Create author error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create author: ' + (error.message || error) },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const authors = await Author.find({}).sort({ name: 1 });
        return NextResponse.json({ success: true, data: authors });
    } catch (error) {
        console.error('Fetch authors error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch authors' },
            { status: 500 }
        );
    }
}
