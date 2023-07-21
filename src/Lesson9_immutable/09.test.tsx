
function increaseAge (u: UserType) {
    u.age++;
 }

export type UserType = {
    name: string,
    age: number
} 


test ('object reference type test', ()=> {
    
    let user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user);
  
    expect(user.age).toBe(33)


    let superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)

})