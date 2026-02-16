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
      window.open("https://immobiliarcoachquiz5.lovable.app/", "_blank", "noopener,noreferrer");
      return;
    }
    onTabChange(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border"
         style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.1)", height: 120, paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="flex items-center justify-around h-full max-w-lg mx-auto" style={{ padding: "16px 0" }}>
        {tabs.map((tab) => {
          const isActive = tab.id !== "quiz" && activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
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
    </nav>
  );
};

export default BottomBar;
