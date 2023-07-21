import { UserType } from "./09.test";

let user : UserType = {
    name: 'Dimych',
    age: 32,
    address: {
        title: 'Minsk'
    }
}

function increaseAge (user: UserType) {
   user.age++;
}