import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3067fc8679c448f0aaa25e42d42a6c99`;
        fetch(url)
        .then(response => response.json())
        .then(data => 
            setArticles(data.articles));
    },[category]);

    return (
      <div>
        <h2 className="text-center"><span className ="">Home Page</span></h2>
        {articles.map((news, index) => {
                return <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            })}
      </div>
    )
}
  
export default NewsBoard;