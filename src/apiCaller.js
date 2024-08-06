
var customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json());

var roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json());

var bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json());

var firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json());


let currentCustomer;
let customerList = ["a", "b", "c"];
let bookingData;
let roomData;
let loggedIn;

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};


const handleCustomers = (response) => {
    customerList = response[0].customers;
}

const handleRooms = (response) => {
    roomData = response[0].rooms;
}

const handleBookings = (response) => {
    bookingData = response;
}
const setLoggedIn = () => {
    loggedIn = true;
}
const setCurrentCustomer = (response) => {
    console.log(currentCustomer)

    currentCustomer = response;
    console.log(currentCustomer)

}
function setCustomer(response, username, password) {
    customerList = response[0].customers;
    var customerIDVal = username.replaceAll("customer", "");
    console.log(customerIDVal)
  
    console.log(customerList[customerIDVal-1])
    if (((customerList[customerIDVal-1])!==undefined) && (password === "overlook2021")) {
        console.log('Goes in')
        var customerData = fetch(`http://localhost:3001/api/v1/customers/${customerIDVal}`).then((response) => response.json());
        setCurrentCustomer(customerData);
        setLoggedIn();
        
    }
    else {
        alert("ERROR: your username or password has the correct format, but does not appear to be in our databases. Please try again.")
        return;
    }
}

async function randomCustomer(response) {
    customerList = response[0].customers;
    currentCustomer = customerList[getRandomIndex(customerList)];
};
function postBooking(date, customerID, roomNumber, receivedBookings) {
    if (!receivedBookings.includes(receivedBookings.filter((values) => (values.date === date) && (values.userID === customerID) && (values.roomNumber === roomNumber)))) {
        fetch('http://localhost:3001/api/v1/bookings', {
            method: 'POST',
            body: JSON.stringify({
                userID: customerID,
                date: date,
                roomNumber: roomNumber,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log('ERROR: ', err));
    }
    else {
        alert("ERROR, this booking doesn't actually seem to be available!")
    }
}

function testPostBooking(date, customerID, roomNumber, receivedBookings){
    // console.log(date)
    // console.log(customerID)
    // console.log(roomNumber)
    // console.log(receivedBookings.filter((values) => (values.date === date) && (values.roomNumber === roomNumber)));
    // console.log(receivedBookings.includes(receivedBookings.filter((values) => (values.date === date) && (values.roomNumber === roomNumber))))
    if (receivedBookings.filter((values) => (values.date === date) && (values.roomNumber === roomNumber)).length===0) {
        // console.log(`('http://localhost:3001/api/v1/bookings', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         userID: ${customerID},
        //         date: ${date},
        //         roomNumber: ${roomNumber},
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })`)
        // console.log(receivedBookings)
        // console.log("Wouldn't have overlapped, would have successfully posted")
        return (`Successfully (would've) posted a booking with a date of ${date}, a customer ID of ${customerID}, and a room number of ${roomNumber}. Additionally, this booking was not already in the received bookings.`)
    }
    else {
        // console.log(`ERROR, this booking doesn't actually seem to be available! Room number ${roomNumber} is already booked for ${date}.`)
        return `ERROR, this booking doesn't actually seem to be available! Room number ${roomNumber} is already booked for ${date}.`
    }

}

const updateInfo = () => {
    customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log('ERROR: ', err));

    roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log('ERROR: ', err));

    bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log('ERROR: ', err));

    firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log('ERROR: ', err));

}

export {
    customerPromise,
    roomsPromise,
    bookingsPromise,
    firstCustomerPromise,
    randomCustomer,
    currentCustomer,
    customerList,
    bookingData,
    roomData,
    handleBookings,
    handleRooms,
    handleCustomers,
    postBooking,
    updateInfo,
    loggedIn,
    setCustomer,
    setLoggedIn,
    testPostBooking,
}