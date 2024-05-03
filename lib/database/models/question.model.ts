import { Schema, models, model, Document } from 'mongoose';

export interface IQuestion extends Document {
    author: Schema.Types.ObjectId;
    title: string;
    content: string;
    tags: Schema.Types.ObjectId[];
    views: number;
    likes: Schema.Types.ObjectId[];
    dislikes: Schema.Types.ObjectId[];
    answers: Schema.Types.ObjectId[];
    createdAt: Date;
}

const QuestionSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    views: { type: Number, default: 0 },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    createdAt: { type: Date, default: Date.now }
})

const Question = models.Question || model('Question', QuestionSchema);

export default Question;