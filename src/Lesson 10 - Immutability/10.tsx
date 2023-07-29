export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}


export function makeHairstyle(u: UserType, power: number) {

    const copy = { ...u, hair: u.hair / power, address: { ...u.address } };
    //copy.hair = u.hair/power

    return copy;
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}


export function moveUser(u: UserWithLaptopType, city: string) {

    return { ...u, address: { ...u.address, city: city } }



}


export function upgradeUserLaptop(u: UserWithLaptopType, notebook: string) {
    return { ...u, laptop: { ...u.laptop, title: notebook } }
}


export type UserWithBooksType = UserType & {
    books: string[];
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return { ...u, address: { ...u.address, house: house } }
}



export function addBooksToUser(u: UserWithLaptopType & UserWithBooksType, newArray: string[]) {

    return { ...u, books: [...u.books, ...newArray] }
}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, book: string, newBook: string) {

    return { ...u, books: u.books.map(el => el === book ? newBook : el) }
}


export const removeBook = (u: UserWithLaptopType & UserWithBooksType, deleteBook: string) => {
    return { ...u, books: u.books.filter(el => el !== deleteBook) }
}


export type WithCompaniesType = {
    companies: Company[]
}

type Company = {
    id: number,
    title: string
}



export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: Company) => {
    return { ...u, companies: [...u.companies, newCompany] }
}




export const updateCompany = (u: UserWithLaptopType & WithCompaniesType, idCompany: number, company: string) => {
    return {...u, companies: u.companies.map(el => el.id === idCompany ? {...el, title: company}: el)}
}



type companiesType = {
    [key:string]: Company[]
}




export const updateCompanyTitle = (companies: companiesType, userName: string, companyId: number, newTitle: string) => {
return {...companies, [userName]: companies[userName].map (el => el.id === companyId ? {...el, title: newTitle}: el)}
}