export interface Skill {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  image: string;
}

export const skills: Record<string, Skill> = {
  anbary_n_lapidary: {
    id: "anbary_n_lapidary",
    displayName: {
      en: "Anbary & Lapidary",
      zh: "雕珀与琢石",
    },
    image: "/skills/anbary_n_lapidary.png",
  },
  applebright_euphonies: {
    id: "applebright_euphonies",
    displayName: {
      en: "Applebright Euphonies",
      zh: "光明果悦音",
    },
    image: "/skills/applebright_euphonies.png",
  },
  auroral_contemplations: {
    id: "auroral_contemplations",
    displayName: {
      en: "Auroral Contemplations",
      zh: "曙光的静观",
    },
    image: "/skills/auroral_contemplations.png",
  },
  desires_n_dissolutions: {
    id: "desires_n_dissolutions",
    displayName: {
      en: "Desires & Dissolutions",
      zh: "诱惑与消殒",
    },
    image: "/skills/desires_n_dissolutions.png",
  },
  leaves_n_thorns: {
    id: "leaves_n_thorns",
    displayName: {
      en: "Leaves & Thorns",
      zh: "叶片与棘刺",
    },
    image: "/skills/leaves_n_thorns.png",
  },
  orchids_n_narcotics: {
    id: "orchids_n_narcotics",
    displayName: {
      en: "Orchids & Narcotics",
      zh: "兰花与迷药",
    },
    image: "/skills/orchids_n_narcotics.png",
  },
  purifications_n_exaltations: {
    id: "purifications_n_exaltations",
    displayName: {
      en: "Purifications & Exaltations",
      zh: "精炼与擢升",
    },
    image: "/skills/purifications_n_exaltations.png",
  },
  pyroglyphics: {
    id: "pyroglyphics",
    displayName: {
      en: "Pyroglyphics",
      zh: "焰篆体",
    },
    image: "/skills/pyroglyphics.png",
  },
  transformations_n_liberations: {
    id: "transformations_n_liberations",
    displayName: {
      en: "Transformations & Liberations",
      zh: "嬗变与解放",
    },
    image: "/skills/transformations_n_liberations.png",
  },
   
};