import { Github, Mail, Rss } from "lucide-astro";
import BlueskyIcon from "@/components/icons/BlueskyIcon";

import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "notmugil",
  description: "personal site.",
  url: "https://notmugil.com",
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
  now: {
    path: "/now",
    label: "now",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:hi@notmugil.com",
    icon: Mail,
  },
  github: {
    label: "GitHub",
    url: "https://github.com/NotMugil",
    icon: Github,
  },
  bluesky: {
    label: "Bluesky",
    url: "https://bsky.app/profile/notmugil.com",
    icon: BlueskyIcon,
  },
  rss: {
    label: "Rss",
    url: "/rss.xml",
    icon: Rss,
  },
};
