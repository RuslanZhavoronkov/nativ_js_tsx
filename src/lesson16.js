// //this

// //1.Global Scope
// //2.Function(simple fn| aroow fn)
// //3. call, aplly, bind
// //4.function Constructor


// //1. 
// 'use strict'

// console.log(this) //window

// //2

// const foo = ()=> {
//     console.log(this)
// }

// foo() // window


// const car = {
//     foo : ()=> {
//         console.log(this)
//     }
// }


// car.foo() //window



// const car = {  // this-bar
//     bar() {
//         foo : ()=> {
//         console.log(this)
//     };
//     foo()
//     }
// }

// car.bar()// this-bar


//    // this-bar
//  const bar() {
//         foo : ()=> {
//         console.log(this)
//     };
//     foo()
//     }


// bar()// undefined


// const car = {
// speed: 200,
// showspeed(){
//     console.log(this.speed)
// }
// }
// car.showspeed() //200


// const foo = car.showspeed
// foo() //200

// const car2 = car

// car = null

// car2.showspeed() //200

// const car1 = {
//     speed: 220
// }

// const car2 = {
//     speed:200

// }


// function showspeed() {
//     console.log(this.speed)
// }

// car1.f = showspeed
// car2.f = showspeed

// car1.f() //220
// car2.f()//200


// //3

// const car1 = {
//     speed:200
//     showspeed(a,b){
//         console.log(this.speed +a +b)
//     }
// }

// const car1 = {
//     speed:220
   
// }

// car1.showspeed.call(car2, 10, 20)//220

// car1.showspeed.apply(car2, [10,20]) //220

// const foo = car1.showspeed.bind(car2, 10, 20) //220
// foo()

// const foo = bind({a:1}).call().bind({a:2}) //{a:1}


// //4 Constructor

// function Car(color) {

//     this.color = color

// }
// const car1 = new Car('red')
// console.log(car1) //{color: 'red'}


// //Потеря контекста

// onst car1 = {
//     speed:200
//     showspeed(){
//         console.log(this.speed)
//     }
// }

// setTimeout(car1.showspeed, 1000) //undefined поэтому нужно bind

// class SomeComponent extends React.Component {
//     showModal(){
//         alert('Hello')
//     },
//     render
//     return(  <Button showModal = {showModal}/>)
  
// }