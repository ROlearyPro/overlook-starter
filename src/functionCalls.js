import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, currentCustomer, postBooking, updateInfo, testPostBooking } from "./apiCaller";
Promise.all([bookingsPromise]).then((values) => { handleBookings(values) });
Promise.all([customerPromise]).then((values) => { handleCustomers(values) });
Promise.all([roomsPromise]).then((values) => { handleRooms(values) });
let receivedBookings;
let receivedCustomers;
let receivedRooms;
let currentFilter;


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
    if (typeof userID !== 'number' || typeof receivedBookingsData !== 'object' || typeof receivedRoomsData !== 'object') {
        console.log("UserID:" + userID + " ReceivedBookingsData:" + receivedBookingsData + " ReceivedRoomsData:" + receivedRoomsData)
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

async function bookRoom() {
    var numHolder = this.roomNum;
    var currentDateSelection = this.currDate;
    var bookings = this.bookings;
    if (isNaN(new Date(currentDateSelection))) {
        console.log("Error with date")
        return ("ERROR: " + currentDateSelection + " is an invalid date.");
    }
    if (typeof numHolder !== 'number' || typeof (await currentCustomer).id !== 'number') {
        console.log("Error with type of numHolder or currentCustomer.id")
        return ("ERROR: One or both of the room number " + numHolder + " or the customer ID " + currentCustomer.id + " are not valid numbers.")
    }
    await currentCustomer
    postBooking(currentDateSelection, (await currentCustomer).id, numHolder, bookings);
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
}

function setFilter() {
    currentFilter = this.filterVal;
}


export {
    setDataVals,
    currentBookings,
    hasSpent,
    findFreeRooms,
    currentFilter,
    bookRoom,
    setFilter,
    bookRoomTestSuite,
}