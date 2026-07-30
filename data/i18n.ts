import { craftables } from "./craftables";

export type Language = "en" | "zh";

export const translations = {
  en: {
    about: "About",
    backToArchive: "Back to Cookbook",
    archiveTitle: "Hush House Craftbook",
    search: "Search by name...",
    start: "There are 92 craftables recorded in this Cookbook.\nWhat will grace the table today? Consult the categories on the left.",
    principles: "Principles",
    requiredPrinciple: "Required Principle",
    skills: "Skills",
    filterTip: "Search by name or filter by Principle.",
    requires: "Requires",
    formula: "Formula",
    craftables: "Craftables",
    noRequires: "Ready to serve.",
    categories: {
      beverage_intoxicating: "Beverage (Intoxicating)",
      beverage_nonintoxicating: "Beverage (Non-intoxicating)",
      ink: "Ink",
    },
    openCraftable: "How to make this? ",
    closeCraftable: "↵ Fold",
    closeMenu: "Close",
    close: "Close"
  },
  zh: {
    about: "关于",
    backToArchive: "返回菜谱",
    archiveTitle: "噤声居屋菜谱",
    search: "搜索菜谱……",
    start: "噤声居屋中有近百道菜谱可供烹制。请查阅左栏目录。",
    principles: "准则",
    requiredPrinciple: "目标准则",
    skills: "技能",
    filterTip: "搜索菜名或按准则筛选。",
    requires: "材料",
    formula: "配方",
    craftables: "可制作物品",
    noRequires: "直接上桌即可",
    categories: {
      beverage_intoxicating: "烈酒",
      beverage_nonintoxicating: "无酒精饮料",
      ink: "墨水",
    },
    openCraftable: "展开做法",
    closeCraftable: "↵ 收起",
    closeMenu: "收起菜单",
    close: "收起"
  },
};