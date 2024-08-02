
var customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json());

var roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json());

var bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json());

var firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json());
let currentCustomer;
let customerList = ["a", "b", "c"];
let bookingData;
let roomData;


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

async function randomCustomer(response) {
    customerList = response[0].customers;
    currentCustomer = customerList[getRandomIndex(customerList)];
};
function postBooking(date, customerID, roomNumber) {
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
const updateInfo = () =>{
    customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json());
    roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json());
    bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json());
    firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json());
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
}