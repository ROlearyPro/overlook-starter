
const customerPromise = fetch("http://localhost:3001/api/v1/customers").then((response) => response.json());

const roomsPromise = fetch("http://localhost:3001/api/v1/rooms").then((response) => response.json());

const bookingsPromise = fetch("http://localhost:3001/api/v1/bookings").then((response) => response.json());

const firstCustomerPromise = fetch("http://localhost:3001/api/v1/customers/1").then((response) => response.json());
let currentCustomer;
let customerList = ["a", "b", "c"];
let bookingData;
let roomData;

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};


console.log('This is the JavaScript entry file - your code begins here.');


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
    customerList = response[0];
    currentCustomer = customerList.customers[getRandomIndex(customerList.customers)];
    console.log(currentCustomer.name);
};
function postBooking() {
    fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify({
            userID: currentCustomer.id,
            date:"2027/7/08",
            roomNumber:5,       
            //TODO: Modify to receive roomNumber, Date, maybe currentCustomer ID from global variables depending on what is clicked
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('ERROR: ', err));

}
// postBooking();
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
}