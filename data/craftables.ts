import { Craftable } from "@/types/crafting";
export const craftables: Craftable[] = [
  {
    id: "rubywise_ruin",
    displayName: {
      en: "Rubywise Ruin",
      zh: "赤慧沉沦",
    },
    description: {
      en: "A ruddy liquor wrung from flowers - even when the flowers aren't red.",
      zh: "xxx",
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
          "desires_and_dissolutions",
          "leaves_and_thorns",
          "orchids_and_narcotics",
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
      zh: "",
    },

    description: {
      en: "The rich gold of a summer afternoon. 'If sunlight precedes moonlight,' St Anselm observed, 'the Meniscate must precede the Madrugad; and the light that was lost will remain.'",
      zh: "",
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
          "purifications_and_exaltations",
          "pyroglyphics",
          "transformations_and_liberations",
        ],
        requires: ["liquid"],
      },

      {
        id: "method_2",
        principle: {
          id: "sky",
          amount: 10,
        },
        skills: ["anbary_and_lapidary"],
        requires: ["liquid"],
      },

      {
        id: "method_3",
        principle: {
          id: "lantern",
          amount: 15,
        },
        skills: ["purifications_and_exaltations"],
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