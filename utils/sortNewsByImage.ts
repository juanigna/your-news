export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImg = news.data.filter((item) => item.image !== null)
    const newsNoImg = news.data.filter((item) => item.image === null)

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImg, ...newsNoImg]
    }

    return sortedNewsResponse
}