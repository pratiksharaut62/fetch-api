export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {article.cover_image && (
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex items-center gap-2 mb-2">
          {article.tag_list?.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
              #{t}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
          {article.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          {article.user?.name || 'Anonymous'}
        </span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
        >
          Read Article →
        </a>
      </div>
    </div>
  );
}