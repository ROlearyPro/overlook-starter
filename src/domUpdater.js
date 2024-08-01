import { customerPromise, currentCustomer, customerList, randomCustomer, postBooking } from './apiCaller.js';
import { setDataVals, receivedRooms, recievedCustomers, recievedBookings, receivedCustomers, currentBookings, hasSpent } from './functionCalls.js';
const testArea = document.querySelector('.test-zone');
const userNameArea = document.querySelector('.username-display');
const priceArea = document.querySelector('.price-zone');
let testArray = [];


Promise.all([customerPromise]).then((values) => { randomCustomer(values) })
// .then((values)=> console.log(values)).then();


async function testFunction1() {
    await setDataVals();
    
    var bookingDisplayData = await currentBookings();
    console.log(bookingDisplayData)
    bookingDisplayData.forEach(element => {
        testArea.innerHTML += (`<div class = "customer-class container-for-customer-${element.userID}"> Reservation for room number ${element.roomNumber}, on ${element.date} </div>`);
    });

    // receivedCustomers.forEach(element => {
    //     testArea.innerHTML += (`<div class = "customer-class container-for-customer-${element.userID}"> ${element.name} </div>`);
    // });
    // postBooking();

}
async function setUserName() {
    await setDataVals();
    userNameArea.innerHTML= `${currentCustomer.name}`;
    console.log(recievedBookings);
}

async function tester (){
    await setDataVals();
    priceArea.innerHTML+=`${await hasSpent(currentCustomer.id)} spent on rooms so far.`;
    console.log(currentCustomer)
}

// Todo: implement total amount spent on rooms

testFunction1();
setUserName();
currentBookings();
tester();