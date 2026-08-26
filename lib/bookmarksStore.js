// In-memory data layer (Can be swapped with a real database like Supabase or MongoDB later)
let bookmarks = [];

export const getBookmarks = () => bookmarks;

export const addBookmark = (article, note = '') => {
  const exists = bookmarks.find((b) => b.id === article.id);
  if (exists) return { success: false, message: 'Already bookmarked' };

  const newBookmark = {
    id: article.id,
    title: article.title,
    url: article.url,
    note,
    savedAt: new Date().toISOString(),
  };

  bookmarks.push(newBookmark);
  return { success: true, data: newBookmark };
};