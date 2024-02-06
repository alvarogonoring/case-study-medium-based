import { Avatar, Box, Flex, Heading, Text, Tooltip } from "@radix-ui/themes";
import AuthorTooltip from "../AuthorTooltip";
import BookOutlineIcon from '../../assets/icons/book-outline.svg';
import SparklesSharpIcon from '../../assets/icons/sparkles-sharp.svg';
import BookmarkOutlineIcon from '../..//assets/icons/bookmark-outline.svg';
import { formatFollowers, getFullMonthText } from "../../utils/format.utils";
import { Article } from "../../interfaces/article.interface";
import { mockUsers } from "../../mocks/mock-users";
import { Link } from "react-router-dom";

export default function HomeFeedItem({
    pic,
    authorName,
    createdAt,
    isPublisherVerifiedAuthor,
    memberOnlyStory,
    suggestedReadingTime,
    title,
    authorPic,
    blogName,
    category,
    subtitle
}: Article) {

    const getMonthDay = (date: Date) => `${getFullMonthText(date.getMonth()).slice(0, 3)} ${date.getDate()}`

    const BlogName = () => {
        return (
            <Flex>
                &nbsp;
                <Text className="text-xs text-slate-500 cursor-auto">in</Text>
                &nbsp;
                <Text className="text-black text-xs font-medium">{blogName}</Text>
            </Flex>
        )
    }

    const Category = () => {
        return (
            <Link to="tag" className='h-category bg-slate-100 rounded-full relative cursor-pointer pl-3 pr-3 ml-1'>
                <Text className='text-slate-600 text-sm hover:text-slate-600'>{category}</Text>
            </Link>
        )
    }

    const fetchUserByAuthorName = (name: string) => {

        return formatFollowers(mockUsers).find(user => user.name === name)
    }


    return (
        <Flex>
            <Flex direction='column' className="p-2 ml-1">
                <Flex>
                    <Avatar src={authorPic} fallback='' className="h-5 w-5 rounded-full cursor-pointer"></Avatar>
                    <Text className="flex text-black ml-2 text-xs font-medium p-1 cursor-pointer">
                        <AuthorTooltip user={fetchUserByAuthorName(authorName)}>
                            <Flex>
                                {authorName}
                                {isPublisherVerifiedAuthor && <img className="h-3 w-3 ml-2" src={BookOutlineIcon} alt="Sparkles Sharp Icon" />}
                            </Flex>
                        </AuthorTooltip>
                        {blogName && <BlogName />}
                    </Text>
                </Flex>
                <Link to=':article' className="flex flex-col">
                    <Heading as="h1" className="mt-2 mb-1 cursor-pointer text-xl font-bold">{title}</Heading>
                    <Heading as="h2" className="text-base text-slate-500 mb-2 font-normal">{subtitle}</Heading>
                </Link>
                <Text as='div' className="flex text-xs text-slate-500">
                    {`${getMonthDay(createdAt)} . ${suggestedReadingTime} min read - `}
                    {category && <Category />}
                    {
                        memberOnlyStory &&
                        <Tooltip delayDuration={500} content='Member-only story'>
                            <img className="h-4 w-4 ml-2 cursor-pointer" src={SparklesSharpIcon} alt="Sparkles Sharp Icon" />
                        </Tooltip>
                    }
                    <Link to='signin' className="ml-auto">
                        <img src={BookmarkOutlineIcon} alt="Bookmark Outline Icon" className="h-5 w-5 cursor-pointer" />
                    </Link>
                </Text>
            </Flex>
            <Box className="ml-auto">
                <Link to=':article'>
                    <img src={pic} className="h-32 w-48" />
                </Link>
            </Box>
        </Flex>
    )
}