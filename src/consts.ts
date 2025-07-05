export type CollectionName = "blog" | "projects" | "talks";

// Global metadata
// --------------------------------
export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "ewd",
  description: "Experimental and more",
  author: "ewd",
  authorPhotoSrc: "/ewd_black.jpg",
  // logo: {
  //   darkThemeSrc: "/logo/logo_dark.png",
  //   lightThemeSrc: "/logo/logo_light.png",
  // }
};

type CollectionSite = {
  pageSize: number;
};

type HomeSite = {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
};

// Home site entries
// --------------------------------
export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 3,
  talkEntries: 3,
};

// Collections site
// --------------------------------
type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  };
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

// Contact details
// --------------------------------
type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
};

type ContactSite = ContactInfo[];

// type 跟隨 icon 名稱
export const CONTACT: ContactSite = [
  {
    type: "soundcloud",
    href: "#",
    displayAs: "sc",
  },
  {
    type: "instagram",
    href: "",
    displayAs: "ig",
  },
  {
    type: "x-twitter",
    href: "https://x.com/BillGates",
    displayAs: "x",
  },
];
