import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import BlogPostLayout from './BlogPostLayout';
import '@/models/Author';

type Props = {
    params: Promise<{ slug: string }>
}

async function getBlog(slug: string) {
    try {
        await connectDB();
        const blog = await Blog.findOne({ slug }).populate('author').lean();
        if (!blog) return null;

        return JSON.parse(JSON.stringify(blog));
    } catch (error) {
        console.error('Failed to fetch blog:', error);
        return null;
    }
}

async function getFeaturedBlogs(excludeSlug: string) {
    try {
        await connectDB();
        const blogs = await Blog.find({ slug: { $ne: excludeSlug } })
            .populate('author')
            .sort({ createdAt: -1 })
            .limit(4)
            .lean();

        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error('Failed to fetch featured blogs:', error);
        return [];
    }
}

export default async function IndividualBlogPage({ params }: Props) {
    const resolvedParams = await params;
    const blog = await getBlog(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    const otherBlogs = await getFeaturedBlogs(resolvedParams.slug);
    const latestPost = otherBlogs.length > 0 ? otherBlogs[0] : null;
    const featuredPosts = otherBlogs.length > 1 ? otherBlogs.slice(1, 4) : [];

    return <BlogPostLayout
        blog={blog}
        latestPost={latestPost}
        featuredPosts={featuredPosts}
    />;
}
