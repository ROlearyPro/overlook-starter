import { bookingsPromise, customerPromise, roomsPromise, handleBookings, handleRooms, handleCustomers, bookingData, roomData, customerList, currentCustomer } from "./apiCaller";
Promise.all([bookingsPromise]).then((values)=> {handleBookings(values)});
Promise.all([customerPromise]).then((values)=> {handleCustomers(values)});
Promise.all([roomsPromise]).then((values)=> {handleRooms(values)});
let recievedBookings;
let receivedCustomers;
let receivedRooms;

// var currentlyActiveCustomer = currentCustomer;
async function listData (){
    console.log((await bookingsPromise).bookings);
    console.log((await customerPromise).customers);
    console.log((await roomsPromise).rooms);

}
async function setDataVals (){
    recievedBookings = (await bookingsPromise).bookings;
    receivedCustomers = (await customerPromise).customers;
    receivedRooms = (await roomsPromise).rooms;
    console.log(recievedBookings)
    console.log(receivedCustomers)
    console.log(receivedRooms)
    return recievedBookings;
    
}
async function currentBookings(){
    var currentlyBooked =  (await bookingsPromise).bookings
    console.log(currentlyBooked);
    await currentCustomer;
    console.log(currentlyBooked.filter((values)=>(values.userID ===currentCustomer.id)));
    console.log("for "+ currentCustomer.name + " with ID of "+currentCustomer.id);
    
    // todo: Clean up, show in a table?
    // console.log(await(recievedBookings.filter((booking) => {booking.userID === currentCustomer.id})));
}



export{
    receivedCustomers,
    receivedRooms,
    recievedBookings,
    setDataVals,
    // totalSpent,
    currentBookings,
}