export interface Trend {
    rank: number;
    authorPic: any;
    authorName: string;
    isPublisherVerifiedAuthor: boolean;
    title: string;
    createdAt: Date;
    suggestedReadingTime: number;
    memberOnlyStory: boolean;
    registeredCategory: string;
}