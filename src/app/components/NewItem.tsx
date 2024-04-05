import React from 'react';
import SmallPicture from './SmallPicture';

type NewItemProps = {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
};

const NewItem: React.FC<NewItemProps> = ({ author, title, description, urlToImage, publishedAt}) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
        <SmallPicture imageUrl={urlToImage} />
        <h2 className="text-lg text-black font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
        <p className="leading-relaxed text-base"><br />Author: {author}</p>
        <p className="leading-relaxed text-base">Published At: {publishedAt}</p>
    </div>
</div>
  );
};

export default NewItem;