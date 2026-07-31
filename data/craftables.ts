import { Craftable } from "@/types/crafting";

export const craftables: Craftable[] = [
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

    type: ["beverage_intoxicating"],

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