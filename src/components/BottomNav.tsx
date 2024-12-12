import { BookOpenIcon, ChatBubbleLeftRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  currentPage: number;
  onNavigate: (index: number) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const buttons = [
    { icon: DocumentTextIcon, index: 0 },
    { icon: ChatBubbleLeftRightIcon, index: 1 },
    { icon: BookOpenIcon, index: 2 },
  ];

  return (
    <nav className="floating-nav">
      {buttons.map(({ icon: Icon, index }) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={cn(
            'nav-button group',
            currentPage === index && 'active'
          )}
          aria-label={`Navigate to ${['Journal', 'Chat', 'Resources'][index]}`}
        >
          <Icon 
            className={cn(
              'w-5 h-5 transition-all duration-300',
              currentPage === index 
                ? 'text-[var(--accent-primary)] icon-pop' 
                : 'text-[var(--text-secondary)] group-hover:text-[var(--accent-secondary)]'
            )} 
          />
        </button>
      ))}
    </nav>
  );
}
