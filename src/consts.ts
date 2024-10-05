import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "notmugil",
  description:
    "personal site.",
  url: "https://notmugil.me",
  author: "NotMugil",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "blog",
  },
  projects: {
    path: "/projects",
    label: "projects",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:notmugil01@gmail.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/NotMugil",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/NotMugil",
  },
};
