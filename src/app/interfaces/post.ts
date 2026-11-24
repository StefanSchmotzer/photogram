export interface PostComment {
    name: string;
    text: string;
}

export interface Post {
    name: string;
    img: string;
    likes: number;
    isLiked: boolean;
    comments: { name: string; text: string }[];
}