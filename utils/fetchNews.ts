import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean) => {
    //GraphQL query
    const query = gql`
        query myQuery($access_key: String! $categories: String! $keywords: String) {
        myQuery(access_key: $access_key categories: $categories countries: "ru" sort:"published_desc" keywords: $keywords) {
        data {
                author 
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
        pagination {
                count
                limit
                offset
                total
            }
        }
    }
    `

    const res = await fetch('https://victor.stepzen.net/api/enervated-jaguar/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `APIKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIA_STACK_API,
                categories: category,
                keywords: keywords
            }
        })
    })



    const newsResponse = await res.json()
    const news = sortNewsByImage(newsResponse.data.myQuery)

    return news

}

export default fetchNews
