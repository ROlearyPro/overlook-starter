import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, bookingData, roomData, customerList, currentCustomer } from "./apiCaller";
Promise.all([bookingsPromise]).then((values) => { handleBookings(values) });
Promise.all([customerPromise]).then((values) => { handleCustomers(values) });
Promise.all([roomsPromise]).then((values) => { handleRooms(values) });
let recievedBookings;
let receivedCustomers;
let receivedRooms;
let currentFilter;
let currentDateSelection;

const filterShowButton = document.querySelector('.dropbtn');

async function listData() {
    // console.log((await bookingsPromise).bookings);
    // console.log((await customerPromise).customers);
    // console.log((await roomsPromise).rooms);
}
async function setDataVals() {
    recievedBookings = (await bookingsPromise).bookings;
    receivedCustomers = (await customerPromise).customers;
    receivedRooms = (await roomsPromise).rooms;
    // console.log(recievedBookings)
    // console.log(receivedCustomers)
    // console.log(receivedRooms)
    return recievedBookings;

}
async function currentBookings() {
    var currentlyBooked = (await bookingsPromise).bookings
    await currentCustomer;
    await receivedRooms;
    setDataVals();
    var userBookings = currentlyBooked.filter((values) => (values.userID === currentCustomer.id));
    return userBookings
    // todo: Clean up, show in a table?
}

async function hasSpent(userID) {
    // await currentCustomer;
    await setDataVals();

    var totalSpent = 0;
    var userBookedRooms = recievedBookings.filter((values) => (values.userID === userID));
    var timesPaidFor = {};
    var roomsPaidFor = userBookedRooms.map((room) => room.roomNumber);
    for (const roomNum of roomsPaidFor) {
        timesPaidFor[roomNum] = timesPaidFor[roomNum] ? timesPaidFor[roomNum] + 1 : 1;
    }
    for (const roomNum of roomsPaidFor) {
        var roomCost = receivedRooms.find((room) => room.number === roomNum).costPerNight;
        totalSpent += roomCost;
    }
    return totalSpent;
}

async function findFreeRooms(date, currentFilter = null) {
    await setDataVals();
    var bookedAlready = recievedBookings.filter((values) => (values.date === date)).map((room) => room.roomNumber);
    var unbookedRooms = receivedRooms.filter((room) => !bookedAlready.includes(room.number))

    //Todo: add text filtering to ensure date is entered correctly?//
    if (currentFilter !== null) {
        var tempForFilter = unbookedRooms.filter((room) => room.roomType === currentFilter);
        unbookedRooms = tempForFilter;
    }
    return unbookedRooms;
}

async function showFilterRoomType() {
    document.getElementById("myDropdown").classList.toggle("show");

}

function setFilter(){
    //TODO: add function to set currentFilter based on button clicked, add event listeners for each kind of room type
}

filterShowButton.addEventListener('click', showFilterRoomType)



export {
    receivedCustomers,
    receivedRooms,
    recievedBookings,
    setDataVals,
    // totalSpent,
    currentBookings,
    hasSpent,
    findFreeRooms,
    showFilterRoomType,
    currentFilter,
    currentDateSelection,



}