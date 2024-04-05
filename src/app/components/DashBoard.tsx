import React, { useEffect, useState } from 'react';
import NewItem from './NewItem';
import Advertising from './Advertising';

interface Article {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

type DashboardProps = {
    title: string;
    description: string;
    articles: Article[];
};

const Dashboard: React.FC<DashboardProps> = ({ title, description, articles }) => {
    const [showAdvertising, setShowAdvertising] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setShowAdvertising(true);
        }, 5000);

        const hideTimeout = setTimeout(() => {
            setShowAdvertising(false);
        }, 25000);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">{title}</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-slate-900">{description}</p>
                </div>
                {showAdvertising && <Advertising message='Enter the link to learn the latest in programming' url='https://github.com/Jumaikel'/>}
                <div className="flex flex-wrap -m-4">
                    {articles.map((article, index) => (
                        <NewItem
                            key={index}
                            author={article.author}
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            publishedAt={article.publishedAt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

