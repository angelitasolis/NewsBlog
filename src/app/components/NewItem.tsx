// NewItem.tsx

import React from 'react';
import SmallPicture from './SmallPicture';

type NewItemProps = {
  title: string;
  description: string;
  svgPath: string;
};

const NewItem: React.FC<NewItemProps> = ({ title, description, svgPath }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <SmallPicture svgPath={svgPath} />
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};

export default NewItem;
