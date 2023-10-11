import NewsList from '@/app/components/NewsList'
import { categories } from '@/app/constants'
import fetchNews from '@/utils/fetchNews'
import React from 'react'

type Props = {
    params: { category: Category }
}

const NewsCategory = async ({ params: { category } }: Props) => {

    const news: NewsResponse = await fetchNews(category)
    console.log(news)
    return (
        <div>
            <h1 className='headerTitle'>{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory

export async function generateStaticParams() {
    return categories.map((category) => {
        category: category
    })
}