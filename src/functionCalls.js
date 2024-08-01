import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, bookingData, roomData, customerList, currentCustomer } from "./apiCaller";
Promise.all([bookingsPromise]).then((values)=> {handleBookings(values)});
Promise.all([customerPromise]).then((values)=> {handleCustomers(values)});
Promise.all([roomsPromise]).then((values)=> {handleRooms(values)});
let recievedBookings;
let receivedCustomers;
let receivedRooms;
// var currentlyActiveCustomer = currentCustomer;
async function listData (){
    // console.log((await bookingsPromise).bookings);
    // console.log((await customerPromise).customers);
    // console.log((await roomsPromise).rooms);

}
async function setDataVals (){
    recievedBookings = (await bookingsPromise).bookings;
    receivedCustomers = (await customerPromise).customers;
    receivedRooms = (await roomsPromise).rooms;
    // console.log(recievedBookings)
    // console.log(receivedCustomers)
    // console.log(receivedRooms)
    return recievedBookings;
    
}
async function currentBookings(){
    var currentlyBooked =  (await bookingsPromise).bookings
    // console.log(currentlyBooked);
    await currentCustomer.id;
    await receivedRooms;
    setDataVals();
    var userBookings = currentlyBooked.filter((values)=>(values.userID === currentCustomer.id));
    // console.log("for "+ currentCustomer.name + " with ID of "+currentCustomer.id);
    return userBookings
    // todo: Clean up, show in a table?
    // console.log(await(recievedBookings.filter((booking) => {booking.userID === currentCustomer.id})));
}

async function hasSpent(userID){
    // await currentCustomer;
    await setDataVals();

    var totalSpent = 0;
    var userBookedRooms = recievedBookings.filter((values)=>(values.userID === userID));
    var timesPaidFor={};
    var roomsPaidFor = userBookedRooms.map((room) => room.roomNumber);
    // console.log(roomsPaidFor)
    for (const roomNum of roomsPaidFor){
        timesPaidFor[roomNum] = timesPaidFor[roomNum] ? timesPaidFor[roomNum]+1 : 1;
    }
    for(const roomNum of roomsPaidFor)
    {
        var roomCost = receivedRooms.find((room) => room.number ===roomNum).costPerNight;
        totalSpent+= roomCost;
    }
    // console.log(timesPaidFor)
    console.log(totalSpent)
    return totalSpent;
}


export{
    receivedCustomers,
    receivedRooms,
    recievedBookings,
    setDataVals,
    // totalSpent,
    currentBookings,
    hasSpent,

}