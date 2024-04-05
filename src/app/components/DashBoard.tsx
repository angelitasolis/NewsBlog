// Dashboard.tsx

import React from 'react';
import NewItem from './NewItem';

const Dashboard: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Aquí irían llamadas al componente NewItem, una por cada item que quieras mostrar */}
          <NewItem title="Shooting Stars" description="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm." svgPath="M22 12h-4l-3 9L9 3l-3 9H2" />
          {/* Repite para los demás items... */}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>
  );
};

export default Dashboard;
