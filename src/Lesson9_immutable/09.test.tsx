
function increaseAge (u: UserType) {
    u.age++;
 }

export type UserType = {
    name: string,
    age: number,
    address: {
        title: string
    }
} 


test ('object reference type test', ()=> {
    
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);
  
    expect(user.age).toBe(33)


    let superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)

})





test ('array test', ()=> {
    
    let users: UserType[]= [
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        }
    ];

let admins = users;
admins.push({
            name:'Bandyugan',
            age: 10,
            address: {
                title:'Moscow'
            }
        })


    expect(users[2]).toEqual({
        name:'Bandyugan',
        age: 10,
        address: {
            title:'Moscow'
        }
    })

})



test ('value type test', ()=> {
    
    let usersCount = 100

    let adminsCount = usersCount
     adminsCount = adminsCount + 1


    expect(usersCount).toBe(100)

})




test ('object reference type test', ()=> {
    
    const address = {
        title: 'Minsk'
    }


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = user.address
    let user2: UserType = {
        name: 'Natash',
        age: 30,
        address: address
    }

   address.title = 'Minsk City';
  
    expect(user.address.title).toBe('Minsk City')


})



test ('object reference type test', ()=> {
    
    const address = {
        title: 'Minsk'
    }


    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }


    let user2: UserType = {
        name: 'Natash',
        age: 30,
        address: address
    }

    const users = [user, user2, { name: 'Misha', age: 4, address: address}]

    const admins = [user, user2];
    admins[0].name = 'Dmitry'
  
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')



})

test('sort array test', () => {
    const letters = ['c', 'd', 'a','z','e']
    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

