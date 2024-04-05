import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/DashBoard';

interface Article {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
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
            <Dashboard title="NEWS BLOG" description="Find the newest news all the time!" articles={articles} />
        </div>
    );
};

export default NewsProvider;


