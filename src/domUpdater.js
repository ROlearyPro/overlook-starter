import { customerPromise, currentCustomer, customerList, randomCustomer, postBooking } from './apiCaller.js';
import { setDataVals, receivedRooms, recievedCustomers, recievedBookings, receivedCustomers, currentBookings, hasSpent, findFreeRooms, currentFilter, currentDateSelection } from './functionCalls.js';
const testArea = document.querySelector('.test-zone');
const userNameArea = document.querySelector('.username-display');
const priceArea = document.querySelector('.price-zone');
const searchRoomsButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.search-results');
let testArray = [];

Promise.all([customerPromise]).then((values) => { randomCustomer(values) })

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
    userNameArea.innerHTML = `${currentCustomer.name}`;
    console.log(recievedBookings);
}

async function tester() {
    await setDataVals();
    priceArea.innerHTML += `${await hasSpent(currentCustomer.id)} spent on rooms so far.`;
    console.log(currentCustomer)
}

async function userInput() {
    const input = document.getElementById('searchInput').value;
    var freeRooms;
    freeRooms = await findFreeRooms(input, currentFilter);
    currentDateSelection = input;
    var buttonArray = []
    if (freeRooms === null) {
        alert('We\'re so sorry! We currently do not have rooms available for that date. You might have better luck trying for a different day?');
    } else {
        for (var i = 0; i < freeRooms.length; i++) {
            searchResults.innerHTML += `<div class = "result-class container-for-results-${freeRooms[i].number}"> The ${freeRooms[i].roomType} with room number ${freeRooms[i].number} is free on ${input}. 
            <button class="book-button-${freeRooms[i].number}" id="book-${freeRooms[i].number}">Book</button>
            </div> `;

        }
        for(var i = 0; i < freeRooms.length; i++){
            buttonArray[i] = document.querySelector(`.book-button-${freeRooms[i].number}`);
            buttonArray[i].roomNum = freeRooms[i].number;
            buttonArray[i].addEventListener('click', bookRoom);
            
        }
        console.log(buttonArray)
    };       

    console.log(buttonArray);
};


function bookRoom () {
    console.log(this);
    var numHolder = this.roomNum;
    console.log("booked!");
    console.log(currentDateSelection);
    console.log(currentCustomer.name);
    console.log(currentCustomer.id);
    console.log(numHolder)
    // TODO: actually post the booking, we can already access all the needed data.
}


searchRoomsButton.addEventListener('click', userInput);

testFunction1();
setUserName();
currentBookings();
tester();