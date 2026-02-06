import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    slug: string;
    content: any; // Editor.js JSON data
    author?: any; // Can be ObjectId or populated Author object
    tldr: any;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title for this blog post.'],
            maxlength: [100, 'Title cannot be more than 100 characters'],
        },
        slug: {
            type: String,
            required: [true, 'Please provide a slug for this blog post.'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        content: {
            type: Schema.Types.Mixed,
            required: [true, 'Please provide content for this blog post.'],
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
        },
        tldr: {
            type: Schema.Types.Mixed,
            required: [true, 'Please provide a TLDR summary.'],
        },
    },
    {
        timestamps: true,
    }
);

const Blog: Model<IBlog> =
    mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
