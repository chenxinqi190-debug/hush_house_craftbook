export interface Skill {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  image: string;
  principles: string[];
}

export const skills: Record<string, Skill> = {
  anbary_n_lapidary: {
    id: "anbary_n_lapidary",
    displayName: {
      en: "Anbary & Lapidary",
      zh: "雕珀与琢石",
    },
    image: "/skills/anbary_n_lapidary.png",
    principles: ["sky", "forge"],
  },
  applebright_euphonies: {
    id: "applebright_euphonies",
    displayName: {
      en: "Applebright Euphonies",
      zh: "光明果悦音",
    },
    image: "/skills/applebright_euphonies.png",
    principles: ["sky", "grail"],
  },
  auroral_contemplations: {
    id: "auroral_contemplations",
    displayName: {
      en: "Auroral Contemplations",
      zh: "曙光的静观",
    },
    image: "/skills/auroral_contemplations.png",
    principles: ["lantern", "edge"],
  },
  desires_n_dissolutions: {
    id: "desires_n_dissolutions",
    displayName: {
      en: "Desires & Dissolutions",
      zh: "诱惑与消殒",
    },
    image: "/skills/desires_n_dissolutions.png",
    principles: ["grail", "moon"],
  },
  glassblowing_n_vesselcrafting: {
    id: "glassblowing_n_vesselcrafting",
    displayName: {
      en: "Glassblowing & Vesselcrafting",
      zh: "玻璃吹制与容器制造",
    },
    image: "/skills/glassblowing_n_vesselcrafting.png",
    principles: ["knock", "sky"],
  },
  glaziery_n_lightsmithing: {
    id: "glaziery_n_lightsmithing",
    displayName: {
      en: "Glaziery & Lightsmithing",
      zh: "玻璃与锻光",
    },
    image: "/skills/glaziery_n_lightsmithing.png",
    principles: ["lantern", "sky"],
  },
  insects_n_nectars: {
    id: "insects_n_nectars",
    displayName: {
      en: "Insects & Nectars",
      zh: "昆虫与花蜜",
    },
    image: "/skills/insects_n_nectars.png",
    principles: ["nectar", "moon"],
  },
  leaves_n_thorns: {
    id: "leaves_n_thorns",
    displayName: {
      en: "Leaves & Thorns",
      zh: "叶片与棘刺",
    },
    image: "/skills/leaves_n_thorns.png",
    principles: ["nectar", "grail"],
  },
  lockworks_n_clockworks: {
    id: "lockworks_n_clockworks",
    displayName: {
      en: "Lockworks & Clockworks",
      zh: "锁簧与发条",
    },
    image: "/skills/lockworks_n_clockworks.png",
    principles: ["knock", "sky"],
  },
  orchids_n_narcotics: {
    id: "orchids_n_narcotics",
    displayName: {
      en: "Orchids & Narcotics",
      zh: "兰花与迷药",
    },
    image: "/skills/orchids_n_narcotics.png",
    principles: ["grail", "nectar"],
  },
  purifications_n_exaltations: {
    id: "purifications_n_exaltations",
    displayName: {
      en: "Purifications & Exaltations",
      zh: "精炼与擢升",
    },
    image: "/skills/purifications_n_exaltations.png",
    principles: ["sky", "lantern"],
  },
  pyroglyphics: {
    id: "pyroglyphics",
    displayName: {
      en: "Pyroglyphics",
      zh: "焰篆体",
    },
    image: "/skills/pyroglyphics.png",
    principles: ["forge", "lantern"],
  },
  solutions_n_separations: {
    id: "solutions_n_separations",
    displayName: {
      en: "Solutions & Separations",
      zh: "溶解与离析",
    },
    image: "/skills/solutions_n_separations.png",
    principles: ["moth", "knock"],
  },
  surgeries_n_exsanguinations: {
    id: "surgeries_n_exsanguinations",
    displayName: {
      en: "Surgeries & Exsanguinations",
      zh: "手术与放血",
    },
    image: "/skills/surgeries_n_exsanguinations.png",
    principles: ["heart", "knock"],
  },
  the_great_signs_n_the_great_scars: {
    id: "the_great_signs_n_the_great_scars",
    displayName: {
      en: "The Great Signs and the Great Scars",
      zh: "伟大符印与伟大伤疤",
    },
    image: "/skills/the_great_signs_n_the_great_scars.png",
    principles: ["grail", "knock"],
  },
  transformations_n_liberations: {
    id: "transformations_n_liberations",
    displayName: {
      en: "Transformations & Liberations",
      zh: "嬗变与解放",
    },
    image: "/skills/transformations_n_liberations.png",
    principles: ["forge", "moth"],
  },
  watchmans_paradoxes: {
    id: "watchmans_paradoxes",
    displayName: {
      en: "Watchman's Paradoxes",
      zh: "守夜人的悖论",
    },
    image: "/skills/watchmans_paradoxes.png",
    principles: ["lantern", "sky"],
  },
   
};