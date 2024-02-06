import MickeyMouseImage from '../assets/images/Disney-SteamboatWillie-MickeyMouseCartoon.jpg';
import ManImage from '../assets/images/istockphoto-man.jpg';
import SecondManImage from '../assets/images/people-i-do-not-know.jpg';
import EgyptImage from '../assets/images/public-domain-egypt.jpg';
import MonaLisaImage from '../assets/images/the-mona-lisa-painting.jpg';
import { User } from '../interfaces/user.interface';

export const mockUsers: User[] = [
    {
        pic: '',
        name: 'NewsApp Staff',
        verified: false,
        description: 'News and updates from the staff at NewsApp.',
        followers: 750000
    },
    {
        pic: '',
        name: 'The Bold Italic',
        verified: false,
        description: 'We’re the The Bold Italic, an online magazine celebrating the spirit of San Francisco. Brought to you by GrowSF.',
        followers: 37000
    },
    {
        pic: ManImage,
        name: "Wes O'Donnel",
        verified: true,
        description: 'Army & Air Force Veteran | Global Security Wonk for War is Boring, GEN, OneZero, Soldier of Fortune | Law Student | TEDx Speaker | Founder of Warrior Lodge',
        followers: 7600
    },
    {
        pic: SecondManImage,
        name: 'Kevin Chisholm',
        verified: false,
        description: 'Kevin Chisholm is a Technical Program Manager for Dart and Flutter at Google.',
        followers: 3700
    },
    {
        pic: EgyptImage,
        name: 'Markham Heid',
        verified: false,
        description: 'I’m a long-time contributor at TIME and other media orgs. I write mostly about health. I grew up in Michigan, but these days I live in southwest Germany.',
        followers: 343000
    },
    {
        pic: MickeyMouseImage,
        name: 'The PyCoach',
        verified: false,
        description: "Support me on Substack: https://artificialcorner.substack.com/ Medium doesn't support tech writing since August 1st",
        followers: 104000
    },
    {
        pic: MonaLisaImage,
        name: 'Jude Ellison S. Doyle',
        verified: true,
        description: 'Author of “Trainwreck” (Melville House, ‘16) and “Dead Blondes and Bad Mothers” (Melville House, ‘19). Columns published far and wide across the Internet.',
        followers: 19800
    },
]