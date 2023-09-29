import * as Tooltip from '@radix-ui/react-tooltip';
import { Avatar, Button, Flex, Separator, Strong, Text } from '@radix-ui/themes';
import BookOutlineIcon from '../../assets/icons/book-outline.svg';

const AuthorTooltip = ({ children, user }) => {

    return (
        <Tooltip.Provider delayDuration={500}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="w-72 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        sideOffset={5}
                        side='right'
                    >
                        <Flex>
                            <Avatar src={user?.pic} fallback='...' className="h-8 w-8 rounded-full cursor-pointer"></Avatar>
                            <Strong className="text-black ml-2 text-lg font-medium p-1 cursor-pointer">{user?.name}</Strong>
                        </Flex>
                        {
                            user?.verified &&
                            <Flex className='mt-4'>
                                <img className='h-3 w-3 mr-2' src={BookOutlineIcon} alt="Book Outline Icon" />
                                <Text className='font-medium'>Book Author</Text>
                            </Flex>
                        }
                        <Text as='p' className='mt-4 font-light text-black' style={{ fontSize: 13 }}>{user?.description}</Text>
                        <Separator className='mt-4 mb-4 bg-slate-200' orientation='horizontal' />
                        <Flex>
                            <Text className='text-slate-600'>{`${user?.followers.toLocaleString()} Followers`}</Text>
                            <Button className='ml-auto text-sm font-light bg-green-600 text-white rounded-full hover:bg-green-800'>Follow</Button>
                        </Flex>
                        <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default AuthorTooltip;