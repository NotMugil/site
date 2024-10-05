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
  const textOnly = html.replace(/<[^>]+>/g, '')
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export async function parseAuthors(authors: string[]) {
  if (!authors || authors.length === 0) return []

  const parseAuthor = async (slug: string) => {
    try {
      const author = await getEntry('authors', slug)
      return {
        slug,
        name: author?.data?.name || slug,
        avatar: author?.data?.avatar || '/static/logo.png',
        isRegistered: !!author,
      }
    } catch (error) {
      console.error(`Error fetching author with slug ${slug}:`, error)
      return {
        slug,
        name: slug,
        avatar: '/static/logo.png',
        isRegistered: false,
      }
    }
  }

  return await Promise.all(authors.map(parseAuthor))
}

export function getReadingChallenge(books: CollectionEntry<'books'>[]) {
  const currentYear = new Date().getFullYear();

  const currentBooks = books.filter(book => {
    const dateStarted = new Date(book.data.dateStarted);
    const isRead = book.data.status === 'read';
    const isStartedThisYear = dateStarted.getFullYear() === currentYear;

    return isRead && isStartedThisYear;
  });

  return {
    goal: 24,
    current: currentBooks.length,
    year: currentYear
  };
}

function getMostReadGenre(books: CollectionEntry<'books'>[]) {
  const genreCounts = books.reduce((acc, book) => {
    acc[book.data.genre] = (acc[book.data.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0][0];
}

export function getReadingStats(books: CollectionEntry<'books'>[]) {
  return {
    totalBooks: books.length,
    favoriteGenre: getMostReadGenre(books),
    averagePerMonth: (books.filter(book => book.data.status === 'read').length / 12).toFixed(1)
  };
}

export function getRandomQuote(books: CollectionEntry<'books'>[]) {
  const quotesBooks = books.filter(book => book.data.favoriteQuote);
  const randomBook = quotesBooks[Math.floor(Math.random() * quotesBooks.length)];
  return {
    quote: randomBook.data.favoriteQuote,
    book: randomBook.data.title
  };
}