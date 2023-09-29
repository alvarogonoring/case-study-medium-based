import { Category } from "../../../enums/category.enum";
import { Article } from "../../../interfaces/article.interface";
import NewsAppPic from '../../../assets/images/news-app.jpg';
import CodingLaptop from '../../../assets/images/code-coding-programming-css-preview.jpg';

export const mockHomeFeedItems: Article[] = [
    {
        pic: CodingLaptop,
        authorPic: NewsAppPic,
        authorName: 'NewsApp Staff',
        category: Category.WhatWereReading,
        blogName: 'The NewsApp Blog',
        title: "What We're Reading: When you talk about AI, context matters",
        subtitle: 'When you say ‘AI,’ what are you talking about?',
        createdAt: new Date('2023-09-08'),
        suggestedReadingTime: 5,
        memberOnlyStory: false,
        isPublisherVerifiedAuthor: false
    }
]