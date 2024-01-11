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

    //Home Page Setup
    if(category == "home") {
        return (
        <div>
            <h2 className="text-center"><span className="">Home Page</span></h2>
        </div>
        )
    }
    //Weather App Page Setup
    else if(category == "weather") {
        return (
        <div>
            <h2 className="text-center"><span className="">Integrated Weather App</span></h2>
        </div>
        )
    }
    //To-Do List Page Setup
    else if(category == "todo") {
        return (
        <div>
            <h2 className="text-center"><span className="">Integrated To-Do List</span></h2>
        </div>
        )
    }
    //News App Cases
    else {
        return (
        <div>
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
}
  
export default NewsBoard;