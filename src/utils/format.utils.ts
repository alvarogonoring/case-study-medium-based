import { User } from "../interfaces/user.interface";

export function getFullMonthText(value: number) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return months[value]
}

export function formatFollowers(value: User[]): User[] {
    const regex = /\.0*([1-9])?0*$/
    const afterPointIsPositive = /\.([1-9])/

    const formattedFollowers: User[] = [];

    value.map(user => {
        let resultWithK = user.followers.toLocaleString().replace(regex, '.$1K')

        if (!afterPointIsPositive.test(resultWithK)) {
            resultWithK = resultWithK.replace(/\./g, '')
        }

        formattedFollowers.push({ ...user, followers: resultWithK });
    })

    return formattedFollowers
}