
import React from 'react';

type SmallPictureProps = {
    svgPath: string;
  };
  
  const SmallPicture: React.FC<SmallPictureProps> = ({ svgPath }) => {
    return (
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: svgPath }} />
      </div>
    );
  };
  
  export default SmallPicture;