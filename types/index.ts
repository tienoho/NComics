export type ComicDetail = {
  average: number;
  chapters: {
    id: number;
    name: string;
  }[];
  description: string;
  followers: number;
  genres: {
    id: string;
    name: string;
  }[];
  other_names: string[];
  rating_count: number;
  id: string;
  title: string;
  thumbnail: string;
  status: string;
  total_views: number | string;
  authors: string | string[];
};

export type Comic = {
  title: string;
  thumbnail: string;
  followers: number;
  genres: {
    id: string;
    name: string;
  }[];
  id: string;
  is_trending: boolean;
  last_chapter: {
    id: string;
    name: string;
  };
  other_names: string[];
  short_description: string;
  status: string;
  total_views: number;
  updated_at: string;
};

export type Genre = {
  name: string;
  id: string;
  description?: string;
};
