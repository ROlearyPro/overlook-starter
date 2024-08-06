import { customerPromise, bookingsPromise, roomsPromise, handleBookings, handleRooms, currentCustomer, setCustomer, loggedIn, handleCustomers, bookingData } from './apiCaller.js';
import { setDataVals, currentBookings, hasSpent, findFreeRooms, currentFilter, bookRoom, setFilter, } from './functionCalls.js';
const reservationArea = document.querySelector('.prev-reservation-area');
const userNameArea = document.querySelector('.username-display');
const priceZone = document.querySelector('.price-zone');
const searchRoomsButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.search-results');
const filterShowButton = document.querySelector('.dropbtn');
const filterButtonSingle = document.querySelector('.filter-type-single');
const filterButtonJunior = document.querySelector('.filter-type-junior');
const filterButtonSuite = document.querySelector('.filter-type-suite');
const filterButtonResidential = document.querySelector('.filter-type-residential');
const filterButtonNone = document.querySelector('.filter-type-none');
const loginButton = document.querySelector('.login-button')
const feedback = document.querySelector('.feedback');

const pageTop = document.querySelector('.page-top');
const reservations = document.querySelector('.reservations');
const prices = document.querySelector('.price-area');
const inputContainer = document.querySelector('.input-container');
const dropDown = document.querySelector('.dropdown')
const loginArea = document.querySelector('.login-area');

filterButtonSingle.filterVal = 'single room';
filterButtonJunior.filterVal = 'junior suite';
filterButtonSuite.filterVal = 'suite';
filterButtonResidential.filterVal = 'residential suite';
filterButtonNone.filterVal = null;
let receivedBookings;
let receivedCustomers;
let receivedRooms;
let received;

let testArray = [];
let currentDateSelection;

async function getLoginInfo() {
    await updater();

    var username = document.querySelector('.username-bar').value;
    var password = document.querySelector('.password-bar').value;
    if (username.indexOf("customer") === -1) {
        feedback.innerHTML = "Your Username does not appear to be in the correct format. Try again?";
        return false;

    }
    Promise.all([customerPromise]).then((values) => { setCustomer(values, username, password) })
    await (currentCustomer);
    console.log(currentCustomer)

    await new Promise(r => setTimeout(r, 10));

    if (loggedIn === true) {

        pageTop.classList.toggle('hidden')
        reservations.classList.toggle('hidden')
        prices.classList.toggle('hidden')
        inputContainer.classList.toggle('hidden')
        dropDown.classList.toggle('hidden')
        searchResults.classList.toggle('hidden')
        loginArea.classList.toggle('hidden')

        console.log(currentCustomer)
        console.log(currentCustomer.id)
        addEventListeners();
        setUserName();
        showBookedRooms();
        currentBookings( currentCustomer.id, bookingData);
        tester();
    }
    console.log(loggedIn)
 
}
loginButton.addEventListener('click', getLoginInfo);

async function updater() {
    received = await setDataVals();
    receivedBookings = received[0];
    receivedCustomers = received[1];
    receivedRooms = received[2];
    // await currentCustomer;
    
}

async function showBookedRooms() {
    await updater()
    var bookingDisplayData = currentBookings((await currentCustomer).id, receivedBookings);
    reservationArea.innerHTML = null;
    bookingDisplayData.forEach(element => {
        reservationArea.innerHTML += (`<div class = "reservation-class reservation-for-customer-${element.userID}"> Reservation for room number ${element.roomNumber}, on ${element.date} </div>`);
    });

}
async function setUserName() {

    await updater()
    userNameArea.innerHTML = `<h1>${(await currentCustomer).name}</h1>`;
}


async function tester() {
    await updater();
    var tempCust = (await currentCustomer)
    var spentVal = (hasSpent(tempCust.id, receivedBookings, receivedRooms));
    console.log( spentVal)
    priceZone.innerHTML = `<h4>${spentVal.toFixed(2)} spent on rooms so far.</h4>`;
}


async function userInput() {
    const input = document.getElementById('searchInput').value;

    var freeRooms;
    await updater();
    var bookedAlready = receivedBookings.filter((values) => (values.date === input)).map((room) => room.roomNumber);
    var unbookedRooms = receivedRooms.filter((room) => !bookedAlready.includes(room.number))
    freeRooms = await findFreeRooms(input, currentFilter, unbookedRooms);
    await currentCustomer;
    await new Promise(r => setTimeout(r, 10));

    currentDateSelection = input;

    var buttonArray = []
    searchResults.innerHTML = null;
    var emptyArr = []
    if (isNaN(new Date(currentDateSelection))||currentDateSelection.length!==10) {
        alert("Sorry, that doesn't seem to be a valid date, or you might have formatted it incorrectly. Please try again.")
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }

    if (freeRooms.length === 0) {
        alert('We\'re so sorry! We currently do not have rooms available for that date. You might have better luck trying for a different day?');
    } else if (freeRooms === "ERROR") {
        alert("Sorry, that seems to be an invalid date!")
        return;
    }
    else {
        for (var i = 0; i < freeRooms.length; i++) {
            searchResults.innerHTML += `<div class = "result-class container-for-results-${freeRooms[i].number}"> The ${freeRooms[i].roomType} with room number ${freeRooms[i].number} is free on ${input}. 
            <button class="book-button book-button-${freeRooms[i].number}" id="book-${freeRooms[i].number}">Book</button>
            </div> `;

        }
        for (var i = 0; i < freeRooms.length; i++) {
            buttonArray[i] = document.querySelector(`.book-button-${freeRooms[i].number}`);
            buttonArray[i].roomNum = freeRooms[i].number;
            buttonArray[i].currDate = currentDateSelection;
            buttonArray[i].bookings = receivedBookings;

            buttonArray[i].addEventListener('click', bookRoom);
            buttonArray[i].addEventListener('click', showBookedRooms);
            buttonArray[i].addEventListener('click', tester);
            buttonArray[i].addEventListener('click', userInput);


        }
    };
};

const showFilterRoomType = () => {
    document.getElementById("filterDropDown").classList.toggle("show");
    document.getElementById("filterDropDown").classList.toggle("aria-expanded");

}


const addEventListeners = () => {
    filterShowButton.addEventListener('click', showFilterRoomType);

    searchRoomsButton.addEventListener('click', userInput);
    filterButtonSingle.addEventListener('click', setFilter);
    filterButtonSingle.addEventListener('click', userInput);

    filterButtonJunior.addEventListener('click', setFilter);
    filterButtonJunior.addEventListener('click', userInput);

    filterButtonSuite.addEventListener('click', setFilter);
    filterButtonSuite.addEventListener('click', userInput);

    filterButtonResidential.addEventListener('click', setFilter);
    filterButtonResidential.addEventListener('click', userInput);

    filterButtonNone.addEventListener('click', setFilter);
    filterButtonNone.addEventListener('click', userInput);

}
