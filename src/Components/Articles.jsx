import { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setArticles(data);
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="articles">
            <h2>All Articles</h2>

            {articles &&
                articles.map((article) => (
                    <div className="article" key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))}
            {loading &&
                [1, 2, 3, 4, 5].map((n) => (
                    <SkeletonArticle key={n} theme="light" />
                ))}
        </div>
    );
};

export default Articles;
