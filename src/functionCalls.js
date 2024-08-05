import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, currentCustomer, postBooking, updateInfo, setCustomer } from "./apiCaller";
Promise.all([bookingsPromise]).then((values) => { handleBookings(values) });
Promise.all([customerPromise]).then((values) => { handleCustomers(values) });
Promise.all([roomsPromise]).then((values) => { handleRooms(values) });
let recievedBookings;
let receivedCustomers;
let receivedRooms;
let currentFilter;


async function listData() {
    // console.log((await bookingsPromise).bookings);
    // console.log((await customerPromise).customers);
    // console.log((await roomsPromise).rooms);
}
async function setDataVals() {
    // console.log(await bookingsPromise);
    recievedBookings = (await bookingsPromise).bookings;
    receivedCustomers = (await customerPromise).customers;
    receivedRooms = (await roomsPromise).rooms;
 
    return [recievedBookings, receivedCustomers, receivedRooms];

}
async function currentBookings() {
    await Promise.all([bookingsPromise, customerPromise, roomsPromise])
    await currentCustomer;
    var userBookings = recievedBookings.filter((values) => (values.userID === currentCustomer.id));
    return userBookings
    // todo: Clean up, show in a table?
}

async function hasSpent(userID) {
    await setCustomer;
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

function findFreeRooms(date, currentFilter = null, unbookedRooms ) {
    if(isNaN(new Date(date)))
        {
            return "ERROR";
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
    postBooking(currentDateSelection, currentCustomer.id, numHolder);
    alert('Booking Info Submitted!');

    updateInfo();
    return "booked";
}


function setFilter() {
    currentFilter = this.filterVal;
}




export {
    receivedCustomers,
    receivedRooms,
    recievedBookings,
    setDataVals,
    currentBookings,
    hasSpent,
    findFreeRooms,
    currentFilter,
    bookRoom,
    setFilter,
    listData,

}