import { createPortal } from "react-dom";
import { Home, BookOpen, ClipboardList, Calendar, HelpCircle } from "lucide-react";

export type TabName = "home" | "bonus" | "consulenze" | "prenota";

interface BottomBarProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

interface TabItem {
  id: TabName | "quiz";
  icon: typeof Home;
  label: string;
  href?: string;
  external?: boolean;
}

const tabs: TabItem[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "bonus", icon: BookOpen, label: "Libro", href: "https://libro.immobiliarcoach.com", external: true },
  { id: "consulenze", icon: ClipboardList, label: "Consulenze" },
  { id: "prenota", icon: Calendar, label: "Prenota" },
  { id: "quiz", icon: HelpCircle, label: "Quiz", href: "https://quiz.immobiliarcoach.com", external: true },
];

const BottomBar = ({ activeTab, onTabChange }: BottomBarProps) => {
  const handleClick = (tab: TabItem) => {
    if (tab.external && tab.href) {
      window.open(tab.href, "_blank", "noopener,noreferrer");
      return;
    }
    onTabChange(tab.id as TabName);
  };

  return createPortal(
    <nav
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-border"
      style={{
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        WebkitTransform: 'translateZ(0)',
        touchAction: 'none',
      }}
    >
      <div
        className="flex items-center justify-around max-w-lg mx-auto"
        style={{ height: 88, padding: "12px 0" }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id && !tab.external;
          return (
            <button
              key={tab.id}
              onClick={() => handleClick(tab)}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            >
              <tab.icon
                className="w-7 h-7"
                style={{ color: isActive ? "hsl(43 74% 42%)" : "#666" }}
                fill={isActive ? "hsl(43 74% 42%)" : "none"}
              />
              <span
                className="text-[13px] font-medium mt-2"
                style={{ color: isActive ? "hsl(43 74% 42%)" : "#666", fontFamily: "var(--font-body)" }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>,
    document.body
  );
};

export default BottomBar;
