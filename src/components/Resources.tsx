export function Resources() {
  const resources = [
    {
      title: "Meditation Guide",
      description: "Learn the basics of mindfulness meditation",
      icon: "🧘‍♂️",
    },
    {
      title: "Breathing Exercises",
      description: "Simple techniques for stress relief",
      icon: "🌬️",
    },
    {
      title: "Sleep Hygiene",
      description: "Tips for better sleep quality",
      icon: "😴",
    },
  ];

  return (
    <div className="h-full w-full p-4 sm:p-6 bg-[var(--app-bg)]">
      <div className="page-container">
        <div className="content-container">
          <div className="mb-4">
            <h1 className="title">Resources</h1>
            <p className="subtitle mt-1">Curated content to support your journey.</p>
          </div>
          <div className="grid gap-3 flex-1">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="card p-4 hover:border-[var(--accent-primary)] transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{resource.icon}</span>
                  <div>
                    <h3 className="text-sm font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
