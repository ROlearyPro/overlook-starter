import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, currentCustomer, postBooking, updateInfo, testPostBooking, setCustomer } from "./apiCaller";
Promise.all([bookingsPromise]).then((values) => { handleBookings(values) });
Promise.all([customerPromise]).then((values) => { handleCustomers(values) });
Promise.all([roomsPromise]).then((values) => { handleRooms(values) });
let receivedBookings;
let receivedCustomers;
let receivedRooms;
let currentFilter;


async function listData() {

}
async function setDataVals() {
    receivedBookings = (await bookingsPromise).bookings;
    receivedCustomers = (await customerPromise).customers;
    receivedRooms = (await roomsPromise).rooms;

    return [receivedBookings, receivedCustomers, receivedRooms];

}
const currentBookings = (customerID, receivedBookingsData) => {
    var userBookings = receivedBookingsData.filter((values) => (values.userID === customerID));
    return userBookings
}

const hasSpent = (userID, receivedBookingsData, receivedRoomsData) => {
    if (typeof userID !== 'number' ||typeof receivedBookingsData !=='object'|| typeof receivedRoomsData !== 'object') {
        return ("ERROR: One or more of the input parameters were not of the correct type.")
    }
    var totalSpent = 0;
    var userBookedRooms = receivedBookingsData.filter((values) => (values.userID === userID));
    var timesPaidFor = {};
    var roomsPaidFor = userBookedRooms.map((room) => room.roomNumber);
    for (const roomNum of roomsPaidFor) {
        timesPaidFor[roomNum] = timesPaidFor[roomNum] ? timesPaidFor[roomNum] + 1 : 1;
    }
    for (const roomNum of roomsPaidFor) {
        var roomCost = receivedRoomsData.find((room) => room.number === roomNum).costPerNight;
        totalSpent += roomCost;
    }
    return totalSpent;
}

const findFreeRooms = (date, currentFilter = null, unbookedRooms) => {
    if (isNaN(new Date(date))) {
        return ("ERROR: " + date + " is an invalid date.");
    }
    var tempForFilter;
    tempForFilter = unbookedRooms;

    if (currentFilter !== null) {
        tempForFilter = unbookedRooms.filter((room) => room.roomType === currentFilter);
    }
    return tempForFilter;
}
function bookRoom() {
    var numHolder = this.roomNum;
    var currentDateSelection = this.currDate;
    var bookings = this.bookings;
    if (isNaN(new Date(currentDateSelection))) {
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (typeof numHolder !== 'number' || typeof currentCustomer.id !== 'number') {
        return ("ERROR: One or both of the room number " + numHolder + " or the customer ID " + currentCustomer.id + " are not valid numbers.")
    }
    postBooking(currentDateSelection, currentCustomer.id, numHolder, bookings);
    alert('Booking Info Submitted!');

    updateInfo();
    return "booked";
}

function bookRoomTestSuite(roomNum, currDate, customerID, bookings) {
    var numHolder = roomNum;
    var currentDateSelection = currDate;
    var bookings = bookings;
    if (isNaN(new Date(currentDateSelection))) {
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (typeof numHolder !== 'number' || typeof customerID !== 'number') {
        return ("ERROR: One or both of the room number " + numHolder + " or the customer ID " + customerID + " are not valid numbers.")
    }
    return testPostBooking(currentDateSelection, customerID, numHolder, bookings);
    // return "booked";
}

function setFilter() {
    currentFilter = this.filterVal;
}




export {
    // receivedCustomers,
    // receivedRooms,
    // receivedBookings,
    setDataVals,
    currentBookings,
    hasSpent,
    findFreeRooms,
    currentFilter,
    bookRoom,
    setFilter,
    bookRoomTestSuite,


}