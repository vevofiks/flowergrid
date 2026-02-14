import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import '@/models/Author';


export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const blog = await Blog.create({
      title: body.title,
      slug: body.slug,
      description: body.description,
      content: body.content,
      tldr: body.tldr,
      faq: body.faq,
      author: body.author
        ? new mongoose.Types.ObjectId(body.author)
        : undefined,
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}


export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");

    let query = Blog.find({})
      .populate('author')
      .sort({ createdAt: -1 });

    if (limit) {
      query = query.limit(Number(limit));
    }

    const blogs = await query;

    return NextResponse.json({ success: true, data: blogs });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}



