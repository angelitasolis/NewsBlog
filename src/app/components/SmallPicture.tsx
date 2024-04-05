import React from 'react';

type SmallPictureProps = {
  imageUrl: string;
};

const SmallPicture: React.FC<SmallPictureProps> = ({ imageUrl }) => {
  return (
    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full overflow-hidden bg-indigo-100 text-indigo-500 mb-4">
      <img src={imageUrl} alt="News" className="w-full h-full object-cover" />
    </div>
  );
};

export default SmallPicture;