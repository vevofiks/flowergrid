import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import '@/models/Author';
import mongoose from "mongoose";


export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const blog = await Blog.create({
      title: body.title,
      slug: body.slug,
      content: body.content,
      tldr: body.tldr,
      author: body.author
        ? new mongoose.Types.ObjectId(body.author)
        : undefined,
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });

  } catch (error: any) {
    console.error("Create blog error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
    try {
        await connectDB();
        const blogs = await Blog.find({}).populate('author').sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: blogs });
    } catch (error) {
        console.error('Fetch blogs error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}
