import Image from 'next/image'
import { categories } from './constants'
import fetchNews from '@/utils/fetchNews'
import NewsList from './components/NewsList'
import response from "../response.json"
import sortNewsByImage from '@/utils/sortNewsByImage'
async function Home() {
  //fetch news data
  const news: NewsResponse = (await fetchNews(categories.join(',')))

  // console.log(news)
  return (
    <main>
      {/* NewsList */}
      <NewsList news={news} />
    </main>
  )
}

export default Home