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
  flower: {
    id: "flower",
    displayName: {
      en: "Flower", 
      zh: "花",
    },
    icon: "/icons/flower.png",
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
  iotic_essence: {
    id: "iotic_essence",
    displayName: {
      en: "Iotic Essence",
      zh: "赤化精华",
    },
    icon: "/icons/iotic_essence.png",
  },
  butter: {
    id: "butter",
    displayName: {
      en: "Butter",
      zh: "黄油",
    },
    icon: "butter.png",
  },
  cake_batter: {
    id: "cake_batter",
    displayName: {
      en: "Cake Batter",
      zh: "蛋糕面糊",
    },
    icon:"cake_batter.png"
  },
  cuckoo_honey: {
    id: "cuckoo_honey",
    displayName: {
      en: "Cuckoo Honey",
      zh: "杜鹃蜜",
    },
    icon:"cuckoo_honey.png"
  },
  canned_ham: {
    id: "canned_ham",
    displayName: {
      en: "Canned Ham",
      zh: "火腿罐头",
    },
    icon:"canned_ham.png"
  },
  creamed_sugar: {
    id: "creamed_sugar",
    displayName: {
      en: "Creamed Sugar",
      zh: "打发黄油",
    },
    icon: "creamed_sugar.png",
  },
  crusty_bread: {
    id: "crusty_bread",
    displayName: {
      en: "Crusty Bread",
      zh: "硬皮面包",
    },
    icon: "crusty_bread.png",
  },
  ch_second_flush_assam_pot: {
    id: "ch_second_flush_assam_pot",
    displayName: {
      en: "Second Flush Assam (Pot)",
      zh: "C＆H公司夏摘阿萨姆茶（一壶）",
    },
    icon: "ch_second_flush_assam_pot.png",
  },
  dark_marrow: {
    id: "dark_marrow",
    displayName: {
      en: "Dark Marrow", 
      zh: "深色西葫芦",
    },
    icon: "dark_marrow.png",
  },
  dough: {
    id: "dough",
    displayName: {
      en: "Dough",
      zh: "生面团",
    },
    icon: "dough.png",
  },
  flour: {
    id: "flour",
    displayName: {
      en: "Flour",
      zh: "面粉",
    },
    icon: "flour.png",
  },
  dripping: {
    id: "dripping",
    displayName: {
      en: "Dripping",
      zh: "烤肉滴油",
    },
    icon: "dripping.png",
  },
  fragrant_chalice: {
    id: "fragrant_chalice",
    displayName: {
      en: "Fragrant Chalice",
      zh: "香盏花",
    },
    icon: "fragrant_chalice.png",
  },
  golden_marrow: {
    id: "golden_marrow",
    displayName: {
      en: "Golden Marrow", 
      zh: "金西葫芦",
    },
    icon: "golden_marrow.png",
  },
  hens_egg: {
    id: "hens_egg",
    displayName: {
      en: "Hen's Egg",
      zh: "鸡蛋",
    },
    icon: "hens_egg.png",
  },
  honey: {
    id: "honey",
    displayName: {
      en: "Honey",
      zh: "蜂蜜",
    },
    icon: "honey.png",
  },
  honeyscar_jasmine: {
    id: "honeyscar_jasmine",
    displayName: {
      en: "Honeyscar Jasmine",  
    zh: "蜜痂茉莉",
    },
    icon: "honeyscar_jasmine.png",
  },
  isle_water: {
    id: "isle_water",
    displayName: {
      en: "Isle Water",
      zh: "岛上井水",
    },
    icon: "isle_water.png",
  },
  intoxicating: {
    id: "intoxicating",
    displayName: {
      en: "Intoxicating",
      zh: "烈酒",
    },
    icon: "intoxicating.png",
  },
  kitchen_bowls: {
    id: "kitchen_bowls",
    displayName: {
      en: "Kitchen Bowls",
      zh: "厨房用碗",
    },
    icon: "kitchen_bowls.png",
  },
  mackerel: {
    id: "mackerel",
    displayName: {
      en: "Mackerel",
      zh: "鲭鱼",
    },
    icon: "mackerel.png",
  },
  marinated_beef_uncooked: {
    id: "marinated_beef_uncooked",
    displayName: {
      en: "Marinated Beef (Uncooked)",
      zh: "腌牛肉（未烹饪的）",
    },
    icon: "marinated_beef_uncooked.png",
  },
  marinated_onions: {
    id: "marinated_onions",
    displayName: {
      en: "Marinated Onions",
      zh: "腌洋葱",
    },
    icon: "marinated_onions.png",
  },
  meringue: {
    id: "meringue",
    displayName: {
      en: "Meringue",
      zh: "蛋白酥",
    },
    icon: "meringue.png",
  },
  mist_kissed_water: {
    id: "mist_kissed_water",
    displayName: {
      en: "Mist-Kissed Water",
      zh: "雾吻之水",
    },
    icon: "mist_kissed_water.png",
  },
  moly: {
    id: "moly",
    displayName: {
      en: "Moly",
      zh: "摩吕",
    },
    icon: "moly.png",
  },
  mushrooms: {
    id: "mushrooms",
    displayName: {
      en: "Mushrooms",
      zh: "蘑菇",
    },
    icon: "mushrooms.png",
  },
  pale_marrow: {
    id: "pale_marrow",
    displayName: {
      en: "Pale Marrow", 
      zh: "苍白西葫芦",
    },
    icon: "pale_marrow.png",
  },
  pear_pie: {
    id: "pear_pie",
    displayName: {
      en: "Pear Pie", 
      zh: "梨子派",
    },
    icon: "pear_pie.png",
  },
  pheasant: {
    id: "pheasant",
    displayName: {
      en: "Pheasant",
      zh: "野鸡",
    },
    icon: "pheasant.png",
  },
  pickled_mushrooms: {
    id: "pickled_mushrooms",
    displayName: {
      en: "Pickled Mushrooms",
      zh: "腌蘑菇",
    },
    icon: "pickled_mushrooms.png",
  },
  pickled_pilchards: {
    id: "pickled_pilchards",
    displayName: {
      en: "Pickled Pilchards",
      zh: "腌沙丁鱼",
    },
    icon: "pickled_pilchards.png",
  },
  pilchards: {
    id: "pilchards",
    displayName: {
      en: "Pilchards",
      zh: "沙丁鱼",
    },
    icon: "pilchards.png",
  },
  pillas_oat_bread: {
    id: "pillas_oat_bread",
    displayName: {
      en: "Pillas Oat Bread",
      zh: "小莜麦面包",
    },
    icon: "pillas_oat_bread.png",
  },
  plums: {
    id: "plums",
    displayName: {
      en: "Plums",
      zh: "西梅",
    },
    icon: "plums.png",
    },
    potatoes: {
    id: "potatoes",
    displayName: {
      en: "Potatoes",
      zh: "土豆",
    },
    icon: "potatoes.png",
    },
  pumpkin: {
    id: "pumpkin",
    displayName: {
      en: "Pumpkin",
      zh: "南瓜",
    },
    icon: "pumpkin.png",
    },
  pyrus_auricalcinus: {
    id: "pyrus_auricalcinus",
    displayName: {
      en: "Pyrus Auricalcinus",
      zh: "铜梨",
    },
    icon: "pyrus_auricalcinus.png",
    },
    roast_beef: {
    id: "roast_beef",
    displayName: {
      en: "Roast Beef",
      zh: "烤牛肉",
    },
    icon: "roast_beef.png",
    },
  rosehips: {
    id: "rosehips",
    displayName: {
      en: "Rosehips",
      zh: "玫瑰果",
    },
    icon: "rosehips.png",
    },
    rosehip_jam: {
    id: "rosehip_jam",
    displayName: {
      en: "Rosehip Jam",
      zh: "玫瑰果酱",
    },
    icon: "rosehip_jam.png",
    },
  sack_vegetables: {
  id: "sack_vegetables",
  displayName: {
    en: "Sack of Vegetables",
    zh: "一袋蔬菜"
  },
  icon: "sack_vegetables.png",
},
  sea_pie: {
  id: "sea_pie",
  displayName: {
    en: "Sea Pie",
    zh: "海味派"
  },
  icon: "sea_pie.png",
},
  spicing: {
  id: "spicing",
  displayName: {
    en: "Spicing",
    zh: "香料"
  },
  icon: "spicing.png",
},
  soft_amber_pumpkin: {
  id: "soft_amber_pumpkin",
  displayName: {
    en: "Soft Amber Pumpkin",
    zh: "柔嫩珀色南瓜"
  },
  icon: "soft_amber_pumpkin.png",
},
sugar: {
  id: "sugar",
  displayName: {
    en: "Sugar",
    zh: "糖"
  },
  icon: "sugar.png",
},
veiled_goddess_lapsang_souchong_pot: {
    id: "veiled_goddess_lapsang_souchong_pot",
    displayName: {
      en: "Veiled Goddess Lapsang Souchong (Pot)",
      zh: "面纱女神正山小种（一壶）",
    },
    icon: "veiled_goddess_lapsang_souchong_pot.png",
  },
}