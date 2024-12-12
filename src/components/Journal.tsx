export function Journal() {
  return (
    <div className="h-full w-full p-4 sm:p-6 bg-[var(--app-bg)]">
      <div className="page-container">
        <div className="content-container">
          <div className="mb-4">
            <h1 className="title">Journal</h1>
            <p className="subtitle mt-1">Your personal space for reflection and growth.</p>
          </div>
          <div className="grid gap-3 flex-1">
            {/* Sample journal entries - will be dynamic later */}
            <div className="card p-4 hover:border-[var(--accent-primary)] transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                  Today's Reflection
                </h3>
                <span className="text-xs text-[var(--text-secondary)]">Just now</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Start writing your thoughts...
              </p>
            </div>
            <button className="card p-4 text-left hover:border-[var(--accent-primary)] transition-colors group">
              <span className="text-sm text-[var(--accent-primary)] group-hover:opacity-80 transition-opacity">
                + New Entry
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
