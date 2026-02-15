import { Home, Gift, ClipboardList, Calendar, HelpCircle } from "lucide-react";

export type TabName = "home" | "bonus" | "consulenze" | "prenota";

interface BottomBarProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

const tabs: { id: TabName | "quiz"; icon: typeof Home; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "bonus", icon: Gift, label: "Bonus" },
  { id: "consulenze", icon: ClipboardList, label: "Consulenze" },
  { id: "prenota", icon: Calendar, label: "Prenota" },
  { id: "quiz", icon: HelpCircle, label: "Quiz" },
];

const BottomBar = ({ activeTab, onTabChange }: BottomBarProps) => {
  const handleClick = (id: TabName | "quiz") => {
    if (id === "quiz") {
      window.open("https://immobiliarcoach.com/quiz", "_blank", "noopener,noreferrer");
      return;
    }
    onTabChange(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border"
         style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.1)", height: 60 }}>
      <div className="flex items-center justify-around h-full max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = tab.id !== "quiz" && activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors"
            >
              <tab.icon
                className="w-5 h-5"
                style={{ color: isActive ? "hsl(43 74% 42%)" : "#666" }}
                fill={isActive ? "hsl(43 74% 42%)" : "none"}
              />
              <span
                className="text-[11px] font-medium"
                style={{ color: isActive ? "hsl(43 74% 42%)" : "#666", fontFamily: "var(--font-body)" }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomBar;
