import { Craftable } from "@/types/crafting";

export const craftables: Craftable[] = [
  {
    id: "encaustum_terminale_uzult",
    displayName: {
      en: "Encaustum Terminale: Uzult",
      zh: "终刻墨：珀金",
    },
    description: {
      en: "The ink in which the First History was recorded by the Unwise Mortal. Uzult is the bright yellow-gold of Lantern. Light lingers on it for a little while even in the dark. Gold is not needed to mix Uzult, but amber is. Unobtrusive shrines to Uzult could sometimes be found in the churches of the Unconquered Sun.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "不智凡人用以记录第一史的墨水，珀金是灯之明亮金黄。即使在黑暗中，光也会在其上盘桓片刻。混合珀金不需黄金，但需琥珀。无敌太阳教会的教堂中偶能发现有不起眼的神龛将之供奉。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "lantern", amount: 7 },
      { id: "moth", amount: 7 },
      { id: "sky", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: [
          "anbary_n_lapidary",
          "glaziery_n_lightsmithing",
          "inks_of_revelation","sacra_solis_invicti","watchmans_paradoxes"],
        requires: ["xanthotic_essence"]}],
    type: ["ink"],
    icon: "encaustum_terminale_uzult.png",
  },
  {
    id: "encaustum_terminale_marakat",
    displayName: {
      en: "Encaustum Terminale: Marakat",
      zh: "终刻墨：石翠",
    },
    description: {
      en: "The encaustum terminale of the Fifth History. The colour of the Principle that once occupied the place that Heart does now. In the Fifth History itself, the cult of Marakat was everywhere suppressed, but it's sometimes been venerated otherwise.\n\n[Use an Encaustum ink with your Journal to make Determinations and record Histories. If the Hours listen, the world changes.]",
      zh: "第五史的终刻墨。与之同色的准则曾占据着如今的心的位置。在第五史中，有关石翠的崇拜受到普遍压制，但它有时还是会以其他方式被崇敬。\n\n[用一种终刻墨书写你的日记，以裁定与记录历史。若是司辰将之聆听，世界便会为之改写。]",
    },
    principles: [
      { id: "grail", amount: 7 },
      { id: "knock", amount: 7 },
      { id: "nectar", amount: 7 }],
      methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 15,
        },
        skills: [
          "insects_n_nectars",
          "inks_of_power",
          "tridesma_hiera"],
        requires: ["leathy"]}],
    type: ["ink"],
    icon: "encaustum_terminale_marakat.png",
  },
  {
    id: "aglaophotis_scented_candle",
    displayName: {
      en: "Aglaophotis-Scented Candle",
      zh: "阿格劳福提斯花薰烛",
    },
    description: {
      en: "A candle scented with aglaophotis.\n\n[Generates Memory: Revelation.]",
      zh: "一支带有阿格劳福提斯花香味的蜡烛。\n\n[使用获得回忆：启示。]",
    },
    principles: [
      { id: "heart", amount: 2 },
      { id: "knock", amount: 2 },
      { id: "lantern", amount: 2 },
      { id: "rose", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","aglaophotis"],
      },
    ],
    type: ["candle"],
    icon: "aglaophotis_scented_candle.png",
  },

  {
    id: "amethyst_ampoule",
    displayName: {
      en: "Amethyst Ampoule",
      zh: "紫晶安瓿瓶",
    },
    description: {
      en: "Were it released from the glass, it would be quite another colour.",
      zh: "若是将内容物倒出玻璃瓶，它将呈现出截然不同的颜色。",
    },
    principles: [
      { id: "heart", amount: 2 },
      { id: "knock", amount: 2 },
],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 5,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "lockworks_n_clockworks",
          "solutions_n_separations",
          "surgeries_n_exsanguinations",
          "the_great_signs_n_the_great_scars",
        ],
      },
    ],

    type: ["other"],

    icon: "amethyst_ampoule.png",
  },

  {
    id: "ashartine",
    displayName: {
      en: "Ashartine",
      zh: "阿夏廷",
    },
    description: {
      en: "Lies written in Ashartine tend to fade or be misspelt. It's legible in the dark. An Ink of Revelation.",
      zh: "用阿夏廷写下的谎言会褪色或错拼。它在黑暗中也清晰可辨。一种启示之墨。",
    },
    principles: [
      { id: "forge", amount: 1 },
      { id: "lantern", amount: 6 },
      { id: "sky", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing",
          "pyroglyphics",
          "watchmans_paradoxes",
        ],
        requires: ["ichor_vitreous"],
      },{
        id: "method_2",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: [
          "anbary_n_lapidary",
          "glassblowing_n_vesselcrafting",
        ],
        requires: ["ichor_vitreous"],
      },
    ],

    type: ["ink"],

    icon: "ashartine.png",
  },

  {
    id: "asimel",
    displayName: {
      en: "Asimel",
      zh: "阿苏麦",
    },
    description: {
      en: "A silver ink that can only be made and used in dreams. An Ink of Revelation.",
      zh: "一种仅可于梦中制作与使用的银色墨水。一种启示之墨。",
    },
    principles: [
      { id: "knock", amount: 3 },
      { id: "moon", amount: 5 },
      { id: "moth", amount: 1 },
      { id: "rose", amount: 1 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moth",
          amount: 10,
        },
        skills: ["inks_of_revelation"],
        requires: ["liquid"],
      },{
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "pearl_n_tide",
          "putrefactions_n_calcinations",
          "sea_stories",
        ],
        requires: ["liquid"],
      },
      {
        id: "method_3",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: ["ouranoscopy",],
        requires: ["lens"],
      },
    ],

    type: ["ink"],
    icon: "asimel.png",
  },

  {
    id: "awakened_feather",
    displayName: {
      en: "Awakened Feather",
      zh: "觉醒翎羽",
    },
    description: {
      en: "Alive to every draught and spark.",
      zh: "对每一丝气息与电火花都活力四射。",
    },
    principles: [
      { id: "scale", amount: 1 },
      { id: "sky", amount: 2 },
],
    methods: [
      {
        id: "method_1",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: [
          "anbary_n_lapidary",
          "furs_n_feathers",
          "lockworks_n_clockworks",
          "sacra_limiae",
          "sights_n_sensations",
          "stitching_n_binding",
        ],
      },
    ],

    type: ["material","beast_n_remains"],
    icon: "awakened_feather.png",
  },
  {
    id: "azoth",

    displayName: {
      en: "Azoth",
      zh: "阿佐特",
    },

    description: {
      en: "A solvent of frightening voracity.",
      zh: "一种有着骇人贪欲的溶剂。",
    },

    principles: [
      { id: "forge", amount: 2 },
      { id: "knock", amount: 6 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: [
          "bells_n_brazieries",
          "disciplines_of_the_hammer",
          "door_n_wall",
          "meniscate_reflections",
          "purifications_n_exaltations",
          "pyroglyphics",
        ],
        requires: ["wire_orichalcum"],
      },

      {
        id: "method_2",
        principle: {
          id: "forge",
          amount: 15,
        },
        skills: ["spices_n_savours"],
        requires: ["honeyscar_jasmine"],
      }],

    type: ["other"],

    icon: "azoth.png",
  },
  {
    id: "beeswax_candle",
    displayName: {
      en: "Beeswax Candle",
      zh: "蜂蜡蜡烛",
    },
    description: {
      en: "Simple and bright. \n\n[Generates Memory: Sight.]",
      zh: "朴素又明亮。\n\n[使用获得回忆：视觉。]",
    },
    principles: [{ id: "lantern", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax"],
      },
    ],

    type: ["candle"],

    icon: "beeswax_candle.png",
  },
  {
    id: "bisclavrets_knot",
    displayName: {
      en: "Bisclavret's Knot",
      zh: "狼骑结印",
    },
    description: {
      en: "The bisclavret is the half-human hill-child of these parts, and this is its sign.",
      zh: "bisclavret（狼人骑士）是活动于这附近一带的半人丘陵之子，此乃其符号。",
    },
    principles: [{ id: "moth", amount: 1 },{ id: "scale", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "scale",
          amount: 5,
        },
        skills: [
          "coil_n_chasm",
          "furs_n_feathers",
          "hill_n_hollow",
          "horns_n_ivories",
          "path_n_pilgrim",
          "pentiments_n_precursors",
          "serpents_n_venoms",
          "wolf_stories",
        ]},
    ],

    type: ["mark"],

    icon: "bisclavrets_knot.png",
  },
  {
    id: "bitterblack_salts",
    displayName: {
      en: "Bitterblack Salts",
      zh: "苦黑盐",
    },
    description: {
      en: "Bitter as chicory, dark as secrets, but the first rung of the traditional alchemical ascent.",
      zh: "苦如菊苣，黑如秘密，但这是传统炼金术的第一步。",
    },
    principles: [{ id: "forge", amount: 1 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "forge",
          amount: 5,
        },
        skills: [
          "anbary_n_lapidary",
          "bells_n_brazieries",
          "disciplines_of_the_hammer",
          "transformations_n_liberations",
          "door_n_wall",
        ]},
    ],

    type: ["pigment"],
    icon: "bitterblack_salts.png",
  },
  {
    id: "black_sapphire_wash",
    displayName: {
      en: "Black Sapphire Wash",
      zh: "黑刚玉涂料",
    },
    description: {
      en: "The colour, perhaps, of the doors of the House of the Moon.",
      zh: "这颜色许是月亮居屋之门的色彩。",
    },
    principles: [{ id: "moon", amount: 6 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 15,
        },
        skills: [
          "desires_n_dissolutions",
          "pearl_n_tide",
          "putrefactions_n_calcinations",
          "sea_stories",
          "tridesma_hiera",
        ],
        requires: ["asimel"],
      },
    ],

    type: ["pigment"],

    icon: "black_sapphire_wash.png",
  },
  {
    id: "catwink",
    displayName: {
      en: "Catwink",
      zh: "猫瞬墨",
    },
    description: {
      en: "The smell of catwink puts off vermin; but it is very difficult to read in sunlight. An Ink of Containment.",
      zh: "猫瞬墨的气味能驱赶害虫；但它在阳光下难以被阅读。一种收容之墨。",
    },
    principles: [{ id: "edge", amount: 1 },
      { id: "grail", amount: 1 },
      { id: "moon", amount: 2 },
      { id: "scale", amount: 2 }
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: [
          "edicts_inviolable",
          "inks_of_containment",
          "putrefactions_n_calcinations",
          "sand_stories",
          "sickle_n_eclipse",
        ]},
    ],

    type: ["ink"],

    icon: "catwink.png",
  },
  {
    id: "chalice_candle",
    displayName: {
      en: "Chalice Candle",
      zh: "盏花薰烛",
    },
    description: {
      en: "A candle scented with fragrant chalice.\n\n[Generates Memory: Satisfaction.]",
      zh: "一支带有香盏花香气的蜡烛。\n\n[使用获得回忆：满足。]",
    },
    principles: [
      { id: "grail", amount: 2 },
      { id: "lantern", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","fragrant_chalice"],
      },
    ],

    type: ["candle"],

    icon: "chalice_candle.png",
  },
  {
    id: "chimeric_larva",

    displayName: {
      en: "Chimeric Larva",
      zh: "混种幼虫",
    },

    description: {
      en: "Approaching the chrysalis crossroads.",
      zh: "接近化蛹的十字路口。",
    },

    principles: [
      { id: "knock", amount: 2 },
      { id: "moon", amount: 2 },
      { id: "moth", amount: 4 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "insects_n_nectars","hill_n_hollow",],
        requires: ["egg"],
      },

      {
        id: "method_2",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["horns_n_ivories"],
        requires: ["egg"],
      },
      {
        id: "method_3",
        principle: {
          id: "moth",
          amount: 10,
        },
        skills: ["resurgences_n_emergences","transformations_n_liberations"],
        requires: ["egg"],
      },
    ],

    type: ["beast_n_remains"],

    icon: "chimeric_larva.png",
  },
  {
    id: "chronsichord",

    displayName: {
      en: "Chronsichord",
      zh: "时键琴",
    },

    description: {
      en: "A music-box that only performs once; a typewriter that can only send one message; a clock that can only strike Now.",
      zh: "只能演奏一次的音乐盒；只能发送一条信息的打字机；只能在现在报时的钟。",
    },

    principles: [
      { id: "forge", amount: 3 },
      { id: "knock", amount: 6 },
      { id: "sky", amount: 3 },
    { id: "winter", amount: 3 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 15,
        },
        skills: [
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing",
          "lockworks_n_clockworks",
          "preliminal_meter",
          "the_great_signs_n_the_great_scars",
        ],
        requires: ["gervinite"],
      },

      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 15,
        },
        skills: ["lockworks_n_clockworks"],
        requires: ["wire_silver"],
      },
    ],

    type: ["ink","tool"],
    icon: "chronsichord.png",
  },
  {
    id: "dearday_lens",
    displayName: {
      en: "Dearday Lens",
      zh: "蒂尔黛透镜",
    },
    description: {
      en: "A fiendishly simple - and wretchedly fragile - optical device.",
      zh: "一种极度简单——以及极度脆弱的——光学装置。",
    },
    principles: [{ id: "edge", amount: 1 },{ id: "forge", amount: 1 },{ id: "lantern", amount: 2 },{ id: "sky", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: [
          "disciplines_of_the_scar",
          "pyroglyphics",
          "glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing"
        ]},
        {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 5,
        },
        skills: ["glassblowing_n_vesselcrafting",
          "glaziery_n_lightsmithing"]}],
    type: ["tool"],
    icon: "dearday_lens",
  },
  {
    id: "eigengrau",
    displayName: {
      en: "Eigengrau",
      zh: "本征灰酒",
    },
    description: {
      en: "'If Greydawn Oil were drinkable…'",
      zh: "“如果灰晓之油能喝的话……”",
    },
    principles: [{ id: "moon", amount: 1 },{ id: "winter", amount: 1 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "winter",
          amount: 5,
        },
        skills: [
          "inks_of_containment",
          "sights_n_sensations",
          "quenchings_n_quellings"]},
        {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 5,
        },
        skills: ["maggephene_mysteries","pearl_n_tide"]},
      {
        id: "method_3",
        principle: {
          id: "lantern",
          amount: 5,
        },
        skills: ["auroral_contemplations"]}],
    type: ["beverage_n_intoxication"],
    icon: "eigengrau.png",
  },
  {
    id: "essential_periost",
    displayName: {
      en: "Essential Periost",
      zh: "骨本精华",
    },
    description: {
      en: "What happens when you boil and scrape us down to our utter fundamentals.",
      zh: "这便是你将我等烹煮刮净，直至彻底唯余根本物质时所得到的。",
    },
    principles: [{ id: "moon", amount: 2 },{ id: "nectar", amount: 4 },{ id: "scale", amount: 4 },{ id: "winter", amount: 4 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "sharps",
          "sickle_n_eclipse",
          "wolf_stories"]},
        {
        id: "method_2",
        principle: {
          id: "winter",
          amount: 10,
        },
        skills: ["rhymes_n_rememberances","snow_stories"]},
      {
        id: "method_3",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: ["stone_stories"]}],
    type: ["beast_n_remains"],
    icon: "essential_periost.png",
  },
  {
    id: "frith_weft",
    displayName: {
      en: "Frith-Weft",
      zh: "狭湾纬编",
    },
    description: {
      en: "The 'peace-weaving' for which the Abbey was famous, long before it was named for St Brandan, when it was the Abbey of the Black Dove or the Abbey of the White Crow.",
      zh: "修道院早在被命名为圣布伦丹前便以其“和平织物”闻名，彼时它还被称为黑鸽修道院或白鸦修道院。",
    },
    principles: [{ id: "heart", amount: 3 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: [
          "stitching_n_binding",
          "weaving_n_knotworking"],
        requires: ["fabric"],
      },
    ],
    type: ["other"],
    icon: "frith_weft.png",
  },
  {
    id: "flushed_mommet",
    displayName: {
      en: "Flushed Mommet",
      zh: "靥红人偶",
    },
    description: {
      en: "A crimson-stained little cloth doll with merry button eyes and a frill of twitching ribbons.",
      zh: "一个沾满了深红污渍的小布娃娃，有着快活的纽扣眼睛和不断颤动的褶边。",
    },
    principles: [{ id: "grail", amount: 6 },{ id: "heart", amount: 3 },{ id: "moth", amount: 3 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 15,
        },
        skills: ["desires_n_dissolutions","furs_n_feathers","pentiments_n_precursors","resurgences_n_emergences","the_great_signs_n_the_great_scars"],
        requires: ["pale_mommet"],
      },
    ],
    type: ["tool"],
    icon: "flushed_mommet.png",
  },
  {
    id: "gervinite",

    displayName: {
      en: "Gervinite",
      zh: "格维合金",
    },

    description: {
      en: "An alloy equivalent in some respects to the clockmaker's invar - but instead of a constant weight, it retains the same origin in every history.",
      zh: "一种合金，在某些方面相当于钟表匠的因瓦合金——但它并非拥有恒定的重量，而是在每重历史中都有恒定的起源。",
    },

    principles: [
{ id: "knock", amount: 4 },{ id: "rose", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["lockworks_n_clockworks",],
        requires: ["glass"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["glaziery_n_lightsmithing"],
        requires: ["metal"],
      }],
      type: ["metal"],
      icon: "gervinite.png",
  },
  {
    id: "gideons_soaks",
    displayName: {
      en: "Gideon's Soaks",
      zh: "基甸的浸液",
    },
    description: {
      en: "A therapeutic collection of beneficial bottles.",
      zh: "由有益健康的瓶瓶罐罐组成的治疗学收藏品。",
    },
    principles: [
      { id: "forge", amount: 2 },
      { id: "heart", amount: 4 },
      { id: "nectar", amount: 3 },
      { id: "winter", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "heart",
          amount: 10,
        },
        skills: [
          "edicts_inviolable",
          "herbs_n_infusions",
          "maggephene_mysteries",
          "quenchings_n_quellings",
          "surgeries_n_exsanguinations"
        ],
        requires: ["liquid"],
      },
    ],

    type: ["other"],

    icon: "gideons_soaks.png",
  },
  {
    id: "glassfinger_toxin",

    displayName: {
      en: "Glassfinger Toxin",
      zh: "透指毒素",
    },

    description: {
      en: "'What is within, without; what is without, within.' A poison sacred to the votaries of the Meniscate.",
      zh: "“内外相易，表里互替。”一种对弧月信徒来说地位神圣的毒素。",
    },

    principles: [{ id: "forge", amount: 2 },{ id: "knock", amount: 4 },{ id: "lantern", amount: 2 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "knock",
          amount: 10,
        },
        skills: ["door_n_wall","edicts_liminal","solutions_n_separations","surgeries_n_exsanguinations"],
        requires: ["liquid"],
      },
      {
        id: "method_2",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: ["serpents_n_venoms"],
        requires: ["liquid"],
      }],
      type: ["other"],
      icon: "glassfinger_toxin.png",
  },
  {
    id: "historywax_candle",
    displayName: {
      en: "Historywax Candle",
      zh: "历史蜡烛",
    },
    description: {
      en: "A candle made with the oils of the 'history plant', agave aeterna.\n\n[Generates Wild Surmise.]",
      zh: "一种用“历史植物”，永恒龙舌兰的油制成的蜡烛。\n\n[使用获得狂热猜度。]",
    },
    principles: [{ id: "lantern", amount: 3 }],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","agave_aeterna"],
      },
    ],
    type: ["candle"],
    icon: "historywax_candle.png",
  },
  {
    id: "honeyscar_scented_candle",
    displayName: {
      en: "Honeyscar-Scented Candle",
      zh: "蜜痂薰烛",
    },
    description: {
      en: "A candle scented with honeyscar jasmine.\n\n[Generates Memory: Foresight.]",
      zh: "一支带有蜜痂茉莉香味的蜡烛。\n\n[使用获得回忆：先见之明。]",
    },
    principles: [{ id: "forge", amount: 2 },{ id: "rose", amount: 1 },],

    methods: [
      {
        id: "method_1",
        skills: [
          "glaziery_n_lightsmithing",
          "insects_n_nectars",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["beeswax","honeyscar_jasmine"],
      },
    ],
    type: ["candle"],
    icon: "honeyscar_scented_candle.png",
  },
  {
    id: "leathy",
    displayName: {
      en: "Leathy",
      zh: "遗忘之水",
    },
    description: {
      en: "A dark and syrupy liquor favoured in unnamed forest villages.'The tongue and the eye, and now we begin! Forget your name, forget your skin.'",
      zh: "一种粘稠的黑色液体，受到森林中无名村落的喜爱。“舌头与眼睛，现在我们开始！忘记你的名字，忘记你的表皮。”",
    },
    principles: [
      { id: "grail", amount: 2 },
      { id: "moth", amount: 4 },
      { id: "nectar", amount: 2 },
      { id: "scale", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "nectar",
          amount: 10,
        },
        skills: [
          "herbs_n_infusions",
          "insects_n_nectars",
          "orchids_n_narcotics",
          "rites_of_the_roots",
        ]},
        {
        id: "method_2",
        principle: {
          id: "moon",
          amount: 10,
        },
        skills: [
          "inks_of_containment",]}],
          type: ["beverage_n_intoxication"],
          icon: "leathy.png",
  },
  {
    id: "living_relic",
    displayName: {
      en: "Living Relic",
      zh: "活化石",
    },
    description: {
      en: "Few of these have been seen in the world under this sun.",
      zh: "在这个太阳照耀的世界里鲜能见到这种存在。",
    },
    principles: [{ id: "heart", amount: 1 },{ id: "scale", amount: 4 },{ id: "sky", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "scale",
          amount: 10,
        },
        skills: [
          "furs_n_feathers",
          "hill_n_hollow",
        "pentiments_n_precursors","stone_stories"],
        requires: ["egg"],
      },
      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: [
          "stitching_n_binding"],
        requires: ["egg"],
      },
    ],
    type: ["beast_n_remains"],
    icon: "living_relic.png",
    note: {
    en: ["Note: Can also be acquired by hatching an Outsized Egg."],
    zh: ["注：也可以通过孵化一枚巨蛋获得。"]}
},
  {
    id: "pale_mommet",
    displayName: {
      en: "Pale Mommet",
      zh: "苍白人偶",
    },
    description: {
      en: "A gently twitching little cloth doll with melancholy button eyes and a frill of coloured ribbons.",
      zh: "一个微微抽搐着的小布娃娃，有着忧郁的纽扣眼睛和彩色的缎带褶边。",
    },
    principles: [{ id: "grail", amount: 4 },{ id: "heart", amount: 2 },{ id: "moth", amount: 2 },],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 10,
        },
        skills: [
          "pentiments_n_precursors",
          "resurgences_n_emergences",
        "sea_stories","the_great_signs_n_the_great_scars"],
        requires: ["fabric"],
      },
    ],
    type: ["tool"],
    icon: "pale_mommet.png",
  },
  {
    id: "rubywise_ruin",
    displayName: {
      en: "Rubywise Ruin",
      zh: "沉沦赤慧",
    },
    description: {
      en: "A ruddy liquor wrung from flowers - even when the flowers aren't red.",
      zh: "一种从鲜花中榨取的红色烈酒——即使作为原料的花不是红的。",
    },
    principles: [
      { id: "grail", amount: 4 },
      { id: "heart", amount: 2 },
      { id: "moth", amount: 2 },
      { id: "nectar", amount: 2 },
      { id: "rose", amount: 2 },
    ],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "grail",
          amount: 10,
        },
        skills: [
          "applebright_euphonies",
          "desires_n_dissolutions",
          "leaves_n_thorns",
          "orchids_n_narcotics",
        ],
        requires: ["flower"],
      },
    ],

    type: ["beverage_n_intoxication"],

    icon: "rubywise_ruin.png",
  },
{
    id: "xanthotic_essence",

    displayName: {
      en: "Xanthotic Essence",
      zh: "黄化精华",
    },

    description: {
      en: "The rich gold of a summer afternoon. 'If sunlight precedes moonlight,' St Anselm observed, 'the Meniscate must precede the Madrugad; and the light that was lost will remain.'",
      zh: "夏日午后的浓金色。“如果日光先于月光，”圣安塞姆曾注意到，“则弧月必先于昕旦；而失落之光将留存。”",
    },

    principles: [
      { id: "forge", amount: 2 },
      { id: "knock", amount: 2 },
      { id: "lantern", amount: 5 }],

    methods: [
      {
        id: "method_1",
        principle: {
          id: "lantern",
          amount: 10,
        },
        skills: [
          "auroral_contemplations",
          "purifications_n_exaltations",
          "pyroglyphics",
          "transformations_n_liberations",
        ],
        requires: ["liquid"],
      },

      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["anbary_n_lapidary"],
        requires: ["liquid"],
      },

      {
        id: "method_3",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["purifications_n_exaltations"],
        requires: [
          "bitterblack_salts",
          "iotic_essence",
        ],
      },
    ],

    type: ["pigment"],

    icon: "xanthotic_essence.png",
  },
]