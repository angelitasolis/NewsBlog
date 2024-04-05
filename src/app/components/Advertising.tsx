import React, { useState } from 'react';
import Link from 'next/link';

interface AdvertisingProps {
    message: string;
    url: string;
}

const Advertising: React.FC<AdvertisingProps> = ({ message, url }) => {
    const [showAlert, setShowAlert] = useState(true);

    const handleCloseClick = () => {
        setShowAlert(false);
    };

    if (!showAlert) {
        return null;
    }
    
    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-2 mb-4 max-w-md w-full text-sm text-green-800 rounded-lg bg-green-50 dark:bg-green-800 dark:text-green-200 z-50" role="alert">
  <svg className="flex-shrink-0 inline w-6 h-6 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 00-4 4v3h20v-3a4 4 0 00-4-4H3zM16 3.13a4 4 0 010 7.75M6 7a4 4 0 110-7 4 4 0 010 7zm10 0a4 4 0 100-7 4 4 0 000 7zM6 7a4 4 0 100 7 4 4 0 000-7zm10 0a4 4 0 100 7 4 4 0 000-7z" />
  </svg>
  <div>
    <span className="font-medium">Exclusive Offer Just for You!</span>
    <p className="mt-1.5">{message}</p>
    <Link href={url} legacyBehavior>
      <a className="mt-4 inline-block text-white font-semibold hover:text-green-600">Learn More &rarr;</a>
    </Link>
  </div>
</div>

    );
};

export default Advertising;