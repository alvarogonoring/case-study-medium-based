import { Box, Flex, Text, Strong, Avatar, Tooltip } from "@radix-ui/themes";
import SparklesSharpIcon from '../../assets/icons/sparkles-sharp.svg';
import BookOutlineIcon from '../../assets/icons/book-outline.svg';
import { Trend as ITrend } from "../../interfaces/trend.interface";
import { formatFollowers, getFullMonthText } from "../../utils/format.utils";
import AuthorTooltip from "../AuthorTooltip";
import { mockUsers } from "../../mocks/mock-users";

export default function Trend(
    { rank,
        authorPic,
        authorName,
        title,
        createdAt,
        suggestedReadingTime,
        isPublisherVerifiedAuthor,
        memberOnlyStory,
        registeredCategory
    }: ITrend) {

    const getMonthDay = (date: Date) => `${getFullMonthText(date.getMonth()).slice(0, 3)} ${date.getDate()}`

    const RegisteredCategory = () => {
        return (
            <Flex>
                &nbsp;
                <Text className="text-xs text-slate-500 cursor-auto">in</Text>
                &nbsp;
                <Text className="text-black text-xs font-medium">{registeredCategory}</Text>
            </Flex>
        )
    }

    const fetchUserByAuthorName = (name: string) => {

        return formatFollowers(mockUsers).find(user => user.name === name)
    }

    return (
        <>
            <Box className="text-3xl text-slate-200 font-bold tracking-tighter font-sans">{`0${rank}`}</Box>
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
                        {registeredCategory && <RegisteredCategory />}
                    </Text>
                </Flex>
                <Strong className="mt-2 mb-2 cursor-pointer">{title}</Strong>
                <Text className="flex text-xs text-slate-500">{`${getMonthDay(createdAt)} . ${suggestedReadingTime} min read`} {memberOnlyStory && <Tooltip delayDuration={500} content='Member-only story'><img className="h-4 w-4 ml-2 cursor-pointer" src={SparklesSharpIcon} alt="Sparkles Sharp Icon" /></Tooltip>}</Text>
            </Flex>
        </>
    )
}