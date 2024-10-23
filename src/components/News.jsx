import { useEffect, useReducer, useState } from "react";
export default function News() {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(3);

    useEffect(() => {
        fetch(
            "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return setNews(data.articles);
            })
            .catch((err) => console.log(err));

        console.log(news);
    }, []);

    return (
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 mt-5">
            <h4 className="font-bold text-xl px-4">Whats happening</h4>
            {news.slice(0, articleNum).map((article) => (
                <div key={article.url}>
                    <a href={article.url} target="_blank">
                        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-300 transition duration-200">
                            <div className="space-y-0.5">
                                <h6 className="text-sm font-bold">
                                    {article.title}
                                </h6>
                                <p className="text-xs font-medium text-gray-500">
                                    {article.source.name}
                                </p>
                            </div>
                            <img className="rounded-xl"
                                src={article.urlToImage}
                                width={70}
                                height={100}
                                alt="news"
                                />
                        </div>
                    </a>
                </div>
            ))}
            <button
                onClick={() => setArticleNum(articleNum + 3)}
                className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm"
            >
                Load more
            </button>
        </div>
    );
}
