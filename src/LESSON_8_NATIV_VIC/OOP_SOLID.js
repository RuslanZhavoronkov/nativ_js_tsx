//1. function Constructor
function DeleteUserAction(userId) {
    //this = {}
    this.type = 'DELETE USER'
    this.payload = {
        userId: userId
    }
}

const action1 = new DeleteUserAction(123)
console.log(action1)
console.log(action1.constructor.name)

const a = {}
console.log(a.constructor.name)

function f1() { }
console.log(f1.constructor.name)

//2. Class
class DeleteUserAction1 {
    constructor(userId) {
        this.type = "DELETE USER",
            this.payload = {
                userId: userId
            }
    }
}

const action2 = new DeleteUserAction1(523)
console.log(action2)

//smart object

function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello: commonHello
    }
    return user;
}

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

console.log(u1.hello())
console.log(u2.hello())
console.log(u1)
console.log(u2)

// add method in function constructor

function User(name, site, dob) {
    this.name = name
    this.site = site
    this.dob = dob
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u3 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u4 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

u3.hello()
u4.hello()

//add method in class

class User {
    constructor(name, site, dob) {
        this.name = name
        this.site = site
        this.dob = dob
    }

    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u5 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u6 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

u5.hello()
u6.hello()

//Private(function getter & setter)
class User1 {
    #name = ''
    constructor(name, site, dob) {
        this.#name = name
        this.site = site
        this.dob = dob
    }

    get name() {     //getter - get name
        return this.#name
    }

    set name(value) { //setter - function change name
        this.#name = value
    }

    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

//наследование
