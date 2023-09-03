import { Container, Box, Section, Flex, Heading, Text, Button } from "@radix-ui/themes"

export default function Home() {
    return (
        <Container className="h-home-section bg-amber-400 border-b border-y-zinc-950">
            <Section size='3'>
                <Flex>
                    <Box>
                        <Heading as="h1" className="text-8xl font-serif text-black font-light">Stay curious.</Heading>
                        <Heading as="h2" className="font-serif text-black font-light mt-7">Discover stories, thinking, and expertise from writers on any topic.</Heading>
                        <Button className='h-button w-home-section-button bg-slate-900 rounded-full bottom-2 p-2 pl-4 relative cursor-pointer mt-20'>
                            <Text as='span' className='text-white hover:text-white text-lg'>Start reading</Text>
                        </Button>
                    </Box>
                </Flex>
            </Section>
        </Container>
    )
}