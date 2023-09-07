import { mockUsers } from "../mocks/mock-users";
import { formatFollowers } from "./format.utils";

describe('Format Followers', () => {
    test('Should return followers quantity with a K after a point or a zero after a point', () => {
        const formattedFollowers = formatFollowers(mockUsers);

        formattedFollowers.forEach(user => expect(/^\d+(?:\.\d+)?[Kk]$/.test(user.followers as string)).toBe(true))
    })
})