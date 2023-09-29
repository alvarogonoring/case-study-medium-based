import MickeyMouseImage from '../../../assets/images/Disney-SteamboatWillie-MickeyMouseCartoon.jpg';
import ManImage from '../../../assets/images/istockphoto-man.jpg';
import SecondManImage from '../../../assets/images/people-i-do-not-know.jpg';
import EgyptImage from '../../../assets/images/public-domain-egypt.jpg';
import MonaLisaImage from '../../../assets/images/the-mona-lisa-painting.jpg';
import { Trend as ITrend } from "../../../interfaces/trend.interface";

export const mockTrends: ITrend[] = [
    {
        rank: 1,
        authorPic: '',
        authorName: 'The Bold Italic',
        title: "Why I'm breaking up with Burning Man",
        createdAt: new Date('2023-08-23'),
        suggestedReadingTime: 7,
        isPublisherVerifiedAuthor: false,
        memberOnlyStory: false,
        blogName: ''
    },
    {
        rank: 2,
        authorPic: ManImage,
        authorName: "Wes O'Donnel",
        title: "Ukraine Now Using “Cardboard Drones” to Devastate Russian Airfields",
        createdAt: new Date('2023-08-30'),
        suggestedReadingTime: 3,
        isPublisherVerifiedAuthor: true,
        memberOnlyStory: true,
        blogName: ''
    },
    {
        rank: 3,
        authorPic: SecondManImage,
        authorName: 'Kevin Chisholm',
        title: "What's new in Flutter 3.13",
        createdAt: new Date('2023-08-16'),
        suggestedReadingTime: 12,
        isPublisherVerifiedAuthor: false,
        memberOnlyStory: false,
        blogName: 'Flutter'
    },
    {
        rank: 4,
        authorPic: EgyptImage,
        authorName: 'Markham Heid',
        title: "Experts May Have Figured Out Why We Yawn",
        createdAt: new Date('2023-08-31'),
        suggestedReadingTime: 4,
        isPublisherVerifiedAuthor: false,
        memberOnlyStory: true,
        blogName: ''
    },
    {
        rank: 5,
        authorPic: MickeyMouseImage,
        authorName: 'The PyCoach',
        title: "Python in Excel Will Reshape How Data Analysts Work",
        createdAt: new Date('2023-08-24'),
        suggestedReadingTime: 5,
        isPublisherVerifiedAuthor: false,
        memberOnlyStory: true,
        blogName: 'Artificial Corner'
    },
    {
        rank: 6,
        authorPic: MonaLisaImage,
        authorName: 'Jude Ellison S. Doyle',
        title: "The “Male Loneliness Epidemic” Does Not Exist",
        createdAt: new Date('2023-09-01'),
        suggestedReadingTime: 7,
        isPublisherVerifiedAuthor: true,
        memberOnlyStory: true,
        blogName: ''
    },
]