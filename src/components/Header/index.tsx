import { Box, Flex, Text, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

export default function Header() {
    const links = [
        { name: 'Our story', route: '/about' },
        { name: 'Membership', route: '/membership' },
        { name: 'Write', route: '/creators' },
        { name: 'Sign In', route: '/signin' },
    ]

    return (
        <Box className='h-header w-full bg-amber-400 border-b border-y-zinc-950 flex items-center justify-center pt-4 fixed'>
            <Flex className='cursor-pointer'>
                <Link to='/' className='flex'>
                    <Box className='h-5 w-5 bg-black rounded-full' />
                    <Box className='h-4 w-4 bg-black rounded-full mt-4' />
                    <Box className='h-3 w-3 bg-black rounded-full mt-3' />
                    <Box className='h-2 w-2 bg-black rounded-full mt-2' />
                    <Box className='h-1 w-1 bg-black rounded-full mt-1' />
                    <Heading as='h1' className='ml-5 mb-5 font-serif'>NewsApp</Heading>
                </Link>
            </Flex>
            <Flex className='w-28' />
            <Flex className='w-96' />
            <Flex gap="5">
                {
                    links.map((link, index) => (
                        <Link to={link.route} className='text-black font-normal outline-none' key={index}>{link.name}</Link>
                    ))
                }
                <Link to="signin" className='h-button w-header-button bg-black rounded-full bottom-2 p-2 pl-4 relative cursor-pointer'>
                    <Text className='text-white hover:text-white'>Get started</Text>
                </Link>
            </Flex>
        </Box>
    )
}