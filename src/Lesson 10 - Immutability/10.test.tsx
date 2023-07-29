import { UserType, UserWithBooksType, UserWithLaptopType, WithCompaniesType, addBooksToUser, addCompany, makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle, upgradeUserLaptop } from "./10"



test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }


    const awesomeUser = makeHairstyle(user, 2) //возвращает измененный объект copy


    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

//----------------------------------------------------------------------------------------------------------------------

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }


    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})


//--------------------------------------------------------------------------------------------------


test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }


    const userCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})


//-------------------Immutability Array-----------------------------------------------------------------

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'react']


    }


    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
    expect(user.address.house).toBe(12)

})



//-------------------------------------------------------------------------------------


test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']


    }


    const userCopy = addBooksToUser(user, ['ts', 'rest api'])


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')

})


//--------------------------------------------------------------------------------------------------------------------


test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']


    }


    const userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(userCopy.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')

})




//--------------------------------------------------------------------------------------------------

test('remove js', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']


    }


    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(userCopy.books[2]).toBe('react')
    expect(user.books[2]).toBe('js')

})

//--------------------------------------------------------------------------------------------------------------



test('add company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },

        companies: [{id:1, title:'Epam'}, {id:2, title:'IT-INCUBATOR'}]


    }


    const userCopy = addCompany(user, {id:3, title:'GOOGLE'})


    expect(user).not.toBe(userCopy)
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2].title).toBe('GOOGLE')

})


//-----------------------------------------------------------------------------------------------

test('update company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },

        companies: [{id:1, title:'Epam'}, {id:2, title:'IT-INCUBATOR'}]


    }


    const userCopy = updateCompany(user, 1, 'OZON')


    expect(user).not.toBe(userCopy)
    expect(userCopy.companies[0].title).toBe('OZON')
    expect(userCopy.companies).not.toBe(user.companies)

})


//-------------------------------------------------------------------------------------------------------------------------

test('update company', () => {

    let user: UserWithLaptopType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }

    let companies = {
        'Dimych':[{id:1, title:'Epam'}, {id:2, title:'IT-INCUBATOR'}],
        'Artem': [{id:1, title:'IT-INCUBATOR'}]
    }


    const copy = updateCompanyTitle (companies, 'Dimych', 1, 'Yandex');

    expect(copy['Dimych'][0].title).toBe('Yandex')
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])

})