import { SITE } from "@/consts";
import { type CollectionEntry, getCollection, getEntry } from "astro:content";

export function formatDate(
  date: Date,
  options: {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
  } = {},
  locale: string = SITE.locale,
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name (e.g., October)
    day: "2-digit", // Day in two digits (e.g., 02)
  };

  const formatOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export async function parseAuthors(authors: string[]) {
  if (!authors || authors.length === 0) return [];

  const parseAuthor = async (slug: string) => {
    try {
      const author = await getEntry("authors", slug);
      return {
        slug,
        name: author?.data?.name || slug,
        avatar: author?.data?.avatar || "/static/logo.png",
        isRegistered: !!author,
      };
    } catch (error) {
      console.error(`Error fetching author with slug ${slug}:`, error);
      return {
        slug,
        name: slug,
        avatar: "/static/logo.png",
        isRegistered: false,
      };
    }
  };

  return await Promise.all(authors.map(parseAuthor));
}
