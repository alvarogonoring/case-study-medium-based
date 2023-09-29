import { Category } from "../enums/category.enum";

export interface Article {
    pic?: any;
    authorPic?: any;
    authorName: string;
    category?: Category;
    blogName?: string;
    title: string;
    subtitle?: string;
    createdAt: Date;
    suggestedReadingTime: number;
    memberOnlyStory: boolean;
    isPublisherVerifiedAuthor: boolean;
}