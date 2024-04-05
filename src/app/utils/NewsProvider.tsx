import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
    title: string;
    description: string;
}

const NewsProvider: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        apiKey: '8f9d79c843af4d359f45984016315fbd',
                        country: 'us',
                        pageSize: 12,
                    },
                });
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsProvider;