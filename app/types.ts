type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}

type Pagination = {
    count: Number;
    limit: Number;
    offset: Number;
    total: Number;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[]
}

type Category =
    | "general"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology"

