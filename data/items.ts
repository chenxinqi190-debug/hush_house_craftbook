import { Happy_Monkey } from "next/font/google";

export interface Item {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  icon: string;
}

export const items: Record<string, Item> = {
  agave_aeterna: {
    id: "agave_aeterna",
    displayName: {
      en: "Agave Aeterna", 
      zh: "永恒龙舌兰",
    },
    icon: "/icons/agave_aeterna.png",
  },
  aglaophotis: {
    id: "aglaophotis",
    displayName: {
      en: "Aglaophotis", 
      zh: "阿格劳福提斯花",
    },
    icon: "/icons/aglaophotis.png",
  },
  asimel: {
    id: "asimel",
    displayName: {
      en: "Asimel", 
      zh: "阿苏麦",
    },
    icon: "/icons/asimel.png",
  },
  beeswax: {
    id: "beeswax",
    displayName: {
      en: "Beeswax", 
      zh: "蜂蜜",
    },
    icon: "/icons/beeswax.png",
  },
  bitterblack_salts: {
    id: "bitterblack_salts",
    displayName: {
      en: "Bitterblack Salts", 
      zh: "苦黑盐",
    },
    icon: "/icons/bitterblack_salts.png",
  },
    blue_crown: {
    id: "blue_crown",
    displayName: {
      en: "Blue Crown",
      zh: "蓝冠花",
    },
    icon: "/icons/blue_crown.png",
  },
    bowl_of_sea_blest_pears: {
    id: "bowl_of_sea_blest_pears",
    displayName: {
      en: "Bowl of Sea-Blest Pears",
      zh: "一碗海佑梨",
    },
    icon: "/icons/bowl_of_sea_blest_pears.png",
  },
  cuckoo_honey: {
    id: "cuckoo_honey",
    displayName: {
      en: "Cuckoo Honey",
      zh: "杜鹃蜜",
    },
    icon:"/icons/cuckoo_honey.png"
  },
  egg: {
    id: "egg",
    displayName: {
      en: "Egg",
      zh: "卵",
    },
    icon:"/icons/egg.png"
  },
    fabric: {
    id: "fabric",
    displayName: {
      en: "Fabric",
      zh: "织物与丝缕",
    },
    icon: "/icons/fabric.png",
  },
  flower: {
    id: "flower",
    displayName: {
      en: "Flower", 
      zh: "花",
    },
    icon: "/icons/flower.png",
  },
  fragrant_chalice: {
    id: "fragrant_chalice",
    displayName: {
      en: "Fragrant Chalice",
      zh: "香盏花",
    },
    icon: "/icons/fragrant_chalice.png",
  },
  glass: {
    id: "glass",
    displayName: {
      en: "Glass",
      zh: "玻璃",
    },
    icon: "/icons/glass.png",
  },
  gervinite: {
    id: "gervinite",
    displayName: {
      en: "Gervinite",
      zh: "格维合金",
    },
    icon: "/icons/gervinite.png",
  },
  honey: {
    id: "honey",
    displayName: {
      en: "Honey",
      zh: "蜂蜜",
    },
    icon: "/icons/honey.png",
  },
  honeyscar_jasmine: {
    id: "honeyscar_jasmine",
    displayName: {
      en: "Honeyscar Jasmine",  
    zh: "蜜痂茉莉",
    },
    icon: "/icons/honeyscar_jasmine.png",
  },
  ichor_vitreous: {
    id: "ichor_vitreous",
    displayName: {
      en: "Ichor Vitreous",
      zh: "玻璃灵液",
    },
    icon: "/icons/ichor_vitreous.png",
  },
  intoxicating: {
    id: "intoxicating",
    displayName: {
      en: "Intoxicating",
      zh: "烈酒",
    },
    icon: "/icons/intoxicating.png",
  },
  iotic_essence: {
    id: "iotic_essence",
    displayName: {
      en: "Iotic Essence",
      zh: "赤化精华",
    },
    icon: "/icons/iotic_essence.png",
  },
  leathy: {
    id: "leathy",
    displayName: {
      en: "Leathy",
      zh: "遗忘之水",
    },
    icon: "/icons/leathy.png",
  },
  lens: {
    id: "lens",
    displayName: {
      en: "Lens",
      zh: "透镜",
    },
    icon: "/icons/lens.png",
  },
  light: {
    id: "light",
    displayName: {
      en: "Light",
      zh: "光源",
    },
    icon: "/icons/light.png",
  },
  liquid: {
    id: "liquid",
    displayName: {
      en: "Liquid", 
      zh: "液体",
    },
    icon: "/icons/liquid.png",
  },
  metal: {
    id: "metal",
    displayName: {
      en: "Metal", 
      zh: "金属",
    },
    icon: "/icons/metal.png",
  },
  pale_mommet: {
    id: "pale_mommet",
    displayName: {
      en: "Pale Mommet",
      zh: "苍白人偶",
    },
    icon: "/icons/pale_mommet.png",
    },
  pyrus_auricalcinus: {
    id: "pyrus_auricalcinus",
    displayName: {
      en: "Pyrus Auricalcinus",
      zh: "铜梨",
    },
    icon: "/icons/pyrus_auricalcinus.png",
    },
  wire_orichalcum: {
    id: "wire_orichalcum",
    displayName: {
      en: "Wire (Orichalcum)",
      zh: "金属丝（山铜）",
    },
    icon: "/icons/wire_orichalcum.png",
    },
  wire_silver: {
    id: "wire_silver",
    displayName: {
      en: "Wire (Silver)",
      zh: "金属丝（银）",
    },
    icon: "/icons/wire_silver.png",
    },
    xanthotic_essence: {
    id: "xanthotic_essence",
    displayName: {
      en: "Xanthotic Essence",
      zh: "黄化精华",
    },
    icon: "/icons/xanthotic_essence.png"},
}