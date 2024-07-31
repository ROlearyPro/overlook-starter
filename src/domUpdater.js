import { customerPromise, currentCustomer, customerList, randomCustomer, postBooking } from './apiCaller.js';
import { setDataVals, receivedRooms, recievedCustomers, recievedBookings, receivedCustomers, currentBookings } from './functionCalls.js';
const testArea = document.querySelector('.test-zone');
let testArray = [];


Promise.all([customerPromise]).then((values) => { randomCustomer(values) })
// .then((values)=> console.log(values)).then();


async function testFunction1() {
    await setDataVals();
    receivedCustomers.forEach(element => {
        testArea.innerHTML += (element.name + '\n<br>');
    });
    // postBooking();

}
async function testFunction2() {
    await setDataVals();
    // receivedRooms.forEach(element => {
    //     testArea.innerHTML += (Object.entries(element) + ' \n<br>');

    // });
    // postBooking();
    console.log(recievedBookings);
}

// Todo: implement total amount spent on rooms

testFunction1();
testFunction2();
currentBookings();