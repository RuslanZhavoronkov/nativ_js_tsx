// this

//1. Global Scope
//2. Function (simple fn | arrow fn)
//3. call, apply, bind
//4. function Constructor

//1.
// "use strict";

// console.log(this);

//2.

// const foo = () => {
//   console.log(this);
// };

// foo();

// function bar() {
//   //this
//   const foo = () => {
//     console.log(this);
//   };
//   foo();
// }

// window.bar();

// let car = {
//   speed: 200,
//   showSpeed() {
//     console.log(this.speed);
//   },
// };

// // car.showSpeed();

// const car2 = car;

// car = null;

// // car2.showSpeed();

// console.log(car2);

// const car1 = {
//   speed: 200,
//   showSpeed() {
// 		//this
//     const foo = () => {
//       console.log(this.speed);
//     };
//     foo();
//   },
// };

// car1.showSpeed();

// const car1 = {
//   speed: 200,
//   showSpeed:() => {
//     console.log(this.speed);
//   },
// };

// const car2 = {
//   speed: 200,
//   showSpeed() {
//     console.log(this.speed);
//   },
// };

// car2.showSpeed();

// const car1 = {
//   speed: 200,
//   showSpeed(a, b) {
//     console.log(this.speed + a + b);
//   },
// };

// const car2 = {
//   speed: 220,
// };

// // car1.showSpeed();
// // car1.showSpeed.call(car2, 10, 20);
// // car1.showSpeed.apply(car2, [10, 20]);
// const foo = car1.showSpeed.bind(car2, 10, 20);
// foo();

// function bar() {
//   console.log(this);
// }

// const foo = bar.bind({ a: 1 });
// console.log(foo.name);

// bar.call({ a: 1 }).bind({ a: 2 });

// console.log(new Car.call({ a: 10 }));

// function Car(color) {
//   //{}
//   this.color = color;
//   //return this
// }

// const car1 = new Car("red");
// console.log(car1);

// const car1 = {
//   speed: 200,
//   showSpeed() {
//     console.log(this.speed);
//   },
// };

// setTimeout(car1.showSpeed, 1000);

// const newSetTimeout = (cb, time) {
// 	//time
// 	cb(){
// car1.showSpeed()
// }
// }

// class SomeComponent extends React.Component {
// 	showModal() {
// 		alert(this + 'Hell0')
// 	},
// 	render (
// 		return (<Button showModal={() => {this.showModal}} />)
// 	)
// }

// let x = 10;

// function someFn() {
//   // someFnLE {} -> windowLE
//   console.log(x);
// }

// someFn();

// (function () {
//   let x = 20;
//   someFn();
// })();

// (function (innerFunc) {
//   let x = 30;
//   innerFunc();
// })(someFn);

function Car(make) {
    //{}
    this.make = make;
    return { make: "Maserati" };
    // return 1;
  }
  
  const myCar = new Car("Lamborghini");
  const myCar2 = new Car("bmw");
  console.log(myCar);
  console.log(myCar2);
  