'use client';

import { useState } from 'react';

export default function BookmarkButton({ article }) {
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: article.id,
          title: article.title,
          url: article.url,
          note: 'Saved from DevStack News dashboard',
        }),
      });

      if (res.ok) {
        setIsSaved(true);
      }
    } catch (err) {
      console.error('Failed to bookmark article:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBookmark}
      disabled={isSaved || loading}
      className={`px-3 py-1 text-xs font-semibold rounded transition ${
        isSaved
          ? 'bg-emerald-100 text-emerald-700 cursor-default'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }`}
    >
      {loading ? 'Saving...' : isSaved ? '✓ Bookmarked' : '+ Bookmark'}
    </button>
  );
}