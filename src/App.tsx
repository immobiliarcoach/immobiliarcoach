import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomBar, { type TabName } from "@/components/BottomBar";
import Footer from "@/components/Footer";
import HomeTab from "@/tabs/HomeTab";
import BonusTab from "@/tabs/BonusTab";
import ConsulenzeTab from "@/tabs/ConsulenzeTab";
import PrenotaTab from "@/tabs/PrenotaTab";

const App = () => {
  const [activeTab, setActiveTab] = useState<TabName>("home");

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-[#111]">
        {activeTab === "home" && <HomeTab onNavigate={handleTabChange} />}
        {activeTab === "bonus" && <BonusTab />}
        {activeTab === "consulenze" && <ConsulenzeTab onNavigate={handleTabChange} />}
        {activeTab === "prenota" && <PrenotaTab />}
        <Footer />
        <BottomBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </TooltipProvider>
  );
};

export default App;
