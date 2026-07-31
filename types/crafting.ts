export interface CraftableAspect {
  id: string;
  amount?: number;
}
export interface CraftableMethod {
  id: string; // method_1, method_2...
  principle?: {
    id: string;
    amount: number;
  };
  skills?: string[];
  requires?: string[];
}
export type CraftableType =
  | "beverage_intoxicating"
  | "beverage_nonintoxicating"
  | "encaustum_terminale"
  | "ink"
  | "pigment"
  | "tool"
  | "material"
  | "beast"
  | "candle"
  | "fuel"
  | "contamination"
  | "other";
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
  type: CraftableType[]; // sidebar/category use
  icon: string;
  note?: {
    en: string[];
    zh: string[];
  };
}

export const CATEGORY_ORDER: CraftableType[] = [
  "beverage_intoxicating",
  "beverage_nonintoxicating",
  "encaustum_terminale",
  "ink",
  "pigment",
  "tool",
  "material",
  "beast",
  "candle",
  "fuel",
  "contamination",
  "other",
];

export interface Method {
  principle?: {
    id: string;
    amount: number;
  };

  skills?: string[];
  requires?: string[];
}
