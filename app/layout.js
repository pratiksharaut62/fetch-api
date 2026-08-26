import './globals.css';

export const metadata = {
  title: 'DevStack News | Developer Insights & Tech Feed',
  description: 'Curated developer updates from across the tech stack.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen">
        <header className="bg-white border-b border-slate-200 py-4 px-6 mb-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white font-black px-2 py-1 rounded text-xs">DS</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">DEVSTACK NEWS</h1>
            </div>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-mono">
              App Router JS
            </span>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 pb-12">{children}</main>
      </body>
    </html>
  );
}
