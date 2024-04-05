"use client"
import NewsProvider from './utils/NewsProvider';

export default function Home() {
  return (
    <main className="bg-slate-400">
      <NewsProvider />
    </main>
  );
}