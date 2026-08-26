'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import ArticleCard from '@/components/ArticleCard';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [tag, setTag] = useState('react');
  const [loading, setLoading] = useState(true);

  const fetchArticles = async (searchTag) => {
    setLoading(true);
    try {
      const res = await fetch(`https://dev.to/api/articles?tag=${searchTag}`);
      const data = await res.json();
      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to load news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles('react');
  }, []);

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 mb-2">The Tech Stack Pulse</h2>
        <p className="text-slate-600 mb-6">
          Real-time developer articles and tech news proxied through local Route Handlers.
        </p>
        <SearchBar tag={tag} setTag={setTag} onSearch={() => fetchArticles(tag)} />
      </section>

      {loading ? (
        <div className="text-center py-16 text-slate-500 font-medium">Loading articles...</div>
      ) : articles.length === 0 ? (
        <div className="text-center py-16 text-slate-500">No articles found for #{tag}. Try another keyword!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}