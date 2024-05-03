import { Schema, models, model, Document } from 'mongoose'

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    photo: string;
    location?: string;
    website?: string;
    level: number;
    saved: Schema.Types.ObjectId[];
    createdAt: Date;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    bio: { type: String },
    photo: { type: String, required: true },
    location: { type: String },
    website: { type: String },
    level: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    createdAt: { type: Date, default: Date.now }
})

const User = models.User || model('User', UserSchema)

export default User