import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAuthor extends Document {
    name: string;
    title?: string;
    bio?: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

const AuthorSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide an author name.'],
            maxlength: [100, 'Name cannot be more than 100 characters'],
        },
        title: {
            type: String,
            maxlength: [100, 'Title cannot be more than 100 characters'],
        },
        bio: {
            type: String,
            maxlength: [500, 'Bio cannot be more than 500 characters'],
        },
        avatar: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Author: Model<IAuthor> =
    mongoose.models.Author || mongoose.model<IAuthor>('Author', AuthorSchema);

export default Author;
