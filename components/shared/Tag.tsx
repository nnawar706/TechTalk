import { TagProp } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'

const Tag = ({ id, name, totalCount, showCount }: TagProp) => (
    <div className="flex justify-between items-center">
        <Link href={`/tags/${id}`}>
            <Badge className="rounded-md bg-gray-200 hover:bg-gray-200 text-gray-400 
            uppercase hover:text-orange-400 border-none px-4 py-2 
            dark:bg-gray-800">{name}</Badge>
        </Link>

        {showCount && (
            <p className="text-xs text-gray-600 dark:text-gray-400">{totalCount}</p>
        )}
    </div>
)

export default Tag