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
  lens: {
    id: "lens",
    displayName: {
      en: "Lens",
      zh: "透镜",
    },
    icon: "/icons/lens.png",
  },
  liquid: {
    id: "liquid",
    displayName: {
      en: "Liquid", 
      zh: "液体",
    },
    icon: "/icons/liquid.png",
  },
  knife:{
    id: "knife",
    displayName: {
      en: "Knife",
      zh: "刀",
  },
    icon: "knife.png",
  },
  isle_water: {
    id: "isle_water",
    displayName: {
      en: "Isle Water",
      zh: "岛上井水",
    },
    icon: "isle_water.png",
  },
  mist_kissed_water: {
    id: "mist_kissed_water",
    displayName: {
      en: "Mist-Kissed Water",
      zh: "雾吻之水",
    },
    icon: "mist_kissed_water.png",
  },
  pyrus_auricalcinus: {
    id: "pyrus_auricalcinus",
    displayName: {
      en: "Pyrus Auricalcinus",
      zh: "铜梨",
    },
    icon: "/icons/pyrus_auricalcinus.png",
    },
}