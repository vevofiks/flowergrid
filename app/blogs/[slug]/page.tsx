import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import BlogPostLayout from './BlogPostLayout';

type Props = {
    params: Promise<{ slug: string }>
}

async function getBlog(slug: string) {
    try {
        await connectDB();
        const blog = await Blog.findOne({ slug }).populate('author').lean();
        console.log('Fetched blog:', blog);

        if (!blog) return null;

        return {
            ...blog,
            _id: blog._id.toString(),
            author: blog.author && typeof blog.author === 'object' && blog.author._id ? {
                _id: blog.author._id.toString(),
                name: blog.author.name,
                bio: blog.author.bio || '',
                avatar: blog.author.avatar || '',
                title: blog.author.title || 'Contributor'
            } : null,
            createdAt: blog.createdAt.toISOString(),
            updatedAt: blog.updatedAt.toISOString(),
        };
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

        return blogs.map(blog => ({
            ...blog,
            _id: blog._id.toString(),
            author: blog.author && typeof blog.author === 'object' && blog.author._id ? {
                _id: blog.author._id.toString(),
                name: blog.author.name,
                bio: blog.author.bio || '',
                avatar: blog.author.avatar || '',
                title: blog.author.title || 'Contributor'
            } : null,
            createdAt: blog.createdAt.toISOString(),
            updatedAt: blog.updatedAt.toISOString(),
        }));
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
