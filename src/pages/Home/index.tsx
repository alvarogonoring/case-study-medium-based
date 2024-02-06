import { Container, Box, Section, Flex, Heading, Text, Button, Grid } from "@radix-ui/themes"
import TrendingUpSharpIcon from '../../assets/icons/trending-up-sharp.svg';
import Trend from "../../components/Trend";
import { mockTrends } from "./mocks/mock-trends";
import { mockHomeFeedItems } from "./mocks/mock-home-feed-items";
import HomeFeedItem from "../../components/HomeFeedItem";

export default function Home() {

    return (
        <>
            <Container className="h-home-section bg-amber-400 border-b border-y-zinc-950">
                <Section>
                    <Flex>
                        <Box>
                            <Heading as="h1" className="text-8xl font-serif text-black font-light">Stay curious.</Heading>
                            <Heading as="h2" className="font-serif text-black font-light mt-7">Discover stories, thinking, and expertise from writers on any topic.</Heading>
                            <Button className='h-button w-home-section-button bg-slate-900 rounded-full bottom-2 p-2 pl-4 relative cursor-pointer mt-20 hover:bg-black'>
                                <Text as='span' className='text-white hover:text-white text-lg'>Start reading</Text>
                            </Button>
                        </Box>
                    </Flex>
                </Section>
            </Container>
            <Container className="h-trending border-b border-y-slate-100">
                <Section size='2'>
                    <Text as='div'>
                        <Flex>
                            <img src={TrendingUpSharpIcon} alt="Trending Up Icon" className="h-5 w-5" />
                            <Text className="font-bold ml-3">Trending on NewsApp</Text>
                        </Flex>
                    </Text>
                    <Grid columns='3'>
                        {
                            mockTrends.map(trend => (
                                <Flex className="mt-3" key={trend.rank}>
                                    <Trend
                                        authorName={trend.authorName}
                                        authorPic={trend.authorPic}
                                        createdAt={trend.createdAt}
                                        rank={trend.rank}
                                        suggestedReadingTime={trend.suggestedReadingTime}
                                        title={trend.title}
                                        isPublisherVerifiedAuthor={trend.isPublisherVerifiedAuthor}
                                        memberOnlyStory={trend.memberOnlyStory}
                                        blogName={trend.blogName}
                                    />
                                </Flex>
                            ))
                        }
                    </Grid>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Flex>
                        <Box className="w-full">
                            {
                                mockHomeFeedItems.map((item, index) => (
                                    <HomeFeedItem
                                        key={index}
                                        pic={item.pic}
                                        authorName={item.authorName}
                                        authorPic={item.authorPic}
                                        createdAt={item.createdAt}
                                        suggestedReadingTime={item.suggestedReadingTime}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        isPublisherVerifiedAuthor={item.isPublisherVerifiedAuthor}
                                        memberOnlyStory={item.memberOnlyStory}
                                        blogName={item.blogName}
                                        category={item.category}
                                    />
                                ))
                            }
                        </Box>
                    </Flex>
                </Section>
            </Container>
        </>
    )
}