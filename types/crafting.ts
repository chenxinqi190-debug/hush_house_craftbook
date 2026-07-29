export interface CraftableAspect {
  id: string;
  amount?: number;
}
export interface CraftableMethod {
  id: string; // method_1, method_2...
  principle: CraftableAspect;
  skills: string[];
  requires: string[];
}
export interface Craftable {
  id: string; // internal id, never displayed
  displayName: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  principles: CraftableAspect[]; // the item's own aspects
  methods: CraftableMethod[]; // crafting routes
  type: string[]; // sidebar/category use
  icon: string;
  note?: {
    en: string[];
    zh: string[];
  };
}

export const TYPE_LABELS: Record<string, string> = {
  beverage_intoxicating: "Beverage - Intoxicating",
  beverage_nonintoxicating: "Beverage - Nonintoxicating",
  encaustum_terminale: "Ink - Encaustum Terminale",
  ink: "Ink",
  pigment: "Pigment",
  tool: "Tool",
  material: "Materials",
  beast: "Beast & Remains",
  candle: "Candle",
  fuel: "Fuel",
  other: "Others"
};
