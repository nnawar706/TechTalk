"use server"

import { connectToDatabase } from "../database/connection"
import Tag from "../database/models/tag.model"

export const fetchPopularTags = async () => {
    try {
        connectToDatabase()

        const data = await Tag.aggregate([
            { $project: { name: 1, questionCount: { $size: '$questions' } } },
            { $sort: { questionCount: -1 } },
            { $limit: 5 }
        ])
    } catch (error) {
        console.log(error)
    }
}