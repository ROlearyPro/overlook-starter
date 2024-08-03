import { customerPromise, currentCustomer, randomCustomer } from './apiCaller.js';
import { setDataVals, currentBookings, hasSpent, findFreeRooms, currentFilter, bookRoom, setFilter } from './functionCalls.js';
const reservationArea = document.querySelector('.prev-reservation-area');
const userNameArea = document.querySelector('.username-display');
const priceArea = document.querySelector('.price-zone');
const searchRoomsButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.search-results');
const filterShowButton = document.querySelector('.dropbtn');
const filterButtonSingle = document.querySelector('.filter-type-single');
const filterButtonJunior = document.querySelector('.filter-type-junior');
const filterButtonSuite = document.querySelector('.filter-type-suite');
const filterButtonResidential = document.querySelector('.filter-type-residential');
const filterButtonNone = document.querySelector('.filter-type-none');
filterButtonSingle.filterVal = 'single room';
filterButtonJunior.filterVal = 'junior suite';
filterButtonSuite.filterVal = 'suite';
filterButtonResidential.filterVal = 'residential suite';
filterButtonNone.filterVal = null;

let testArray = [];
let currentDateSelection;



Promise.all([customerPromise]).then((values) => { randomCustomer(values) })

async function showBookedRooms() {

    await setDataVals();

    var bookingDisplayData = await currentBookings();
    // console.log(bookingDisplayData)
    reservationArea.innerHTML = null;
    bookingDisplayData.forEach(element => {
        reservationArea.innerHTML += (`<div class = "reservation-class reservation-for-customer-${element.userID}"> Reservation for room number ${element.roomNumber}, on ${element.date} </div>`);
    });
}
async function setUserName() {
    await setDataVals();
    userNameArea.innerHTML = `<h1>${currentCustomer.name}</h1>`;
}

async function tester() {
    await setDataVals();
    priceArea.innerHTML = `<h4>${(await hasSpent(currentCustomer.id)).toFixed(2)} spent on rooms so far.</h4>`;
}

async function userInput() {
    const input = document.getElementById('searchInput').value;
    var freeRooms;
    freeRooms = await findFreeRooms(input, currentFilter);
    currentDateSelection = input;
    var buttonArray = []
    searchResults.innerHTML = null;
    if (freeRooms === null) {
        alert('We\'re so sorry! We currently do not have rooms available for that date. You might have better luck trying for a different day?');
    } else {
        for (var i = 0; i < freeRooms.length; i++) {
            searchResults.innerHTML += `<div class = "result-class container-for-results-${freeRooms[i].number}"> The ${freeRooms[i].roomType} with room number ${freeRooms[i].number} is free on ${input}. 
            <button class="book-button book-button-${freeRooms[i].number}" id="book-${freeRooms[i].number}">Book</button>
            </div> `;

        }
        for(var i = 0; i < freeRooms.length; i++){
            buttonArray[i] = document.querySelector(`.book-button-${freeRooms[i].number}`);
            buttonArray[i].roomNum = freeRooms[i].number;
            buttonArray[i].currDate = currentDateSelection;
            
            buttonArray[i].addEventListener('click', bookRoom);
            buttonArray[i].addEventListener('click', userInput);
            buttonArray[i].addEventListener('click', showBookedRooms);
            buttonArray[i].addEventListener('click', tester);
            
        }
    };       
};

const showFilterRoomType=()=> {
    document.getElementById("filterDropDown").classList.toggle("show");
    document.getElementById("filterDropDown").classList.toggle("aria-expanded");

}
filterShowButton.addEventListener('click', showFilterRoomType)



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


showBookedRooms();
setUserName();
currentBookings();
tester();