import chai from 'chai';
import { bookRoom, bookRoomTestSuite, currentBookings, currentFilter, findFreeRooms, hasSpent, listData, setDataVals } from '../src/functionCalls.js';

const expect = chai.expect;
var bookings = [{
  "id": "5fwrgu4i7k55hl6sz",
  "userID": 9,
  "date": "2022/04/22",
  "roomNumber": 15
}, {
  "id": "5fwrgu4i7k55hl6t5",
  "userID": 43,
  "date": "2022/01/24",
  "roomNumber": 24
},
{
  "id": "5fwrgu4i7k55hl6t6",
  "userID": 13,
  "date": "2022/01/10",
  "roomNumber": 12
},
{
  "id": "5fwrgu4i7k55hl6t7",
  "userID": 20,
  "date": "2022/02/16",
  "roomNumber": 7
},
{
  "id": "5fwrgu4i7k55hl6t7",
  "userID": 20,
  "date": "2022/02/17",
  "roomNumber": 7
}, {
  "id": "5fwrgu4i7k55hl6tj",
  "userID": 21,
  "date": "2022/01/17",
  "roomNumber": 7
},
{
  "id": "5fwrgu4i7k55hl6tp",
  "userID": 48,
  "date": "2023/11/23",
  "roomNumber": 22
},
{
  "id": "5fwrgu4i7k55hl6tz",
  "userID": 48,
  "date": "2022/02/19",
  "roomNumber": 13
},
{
  "id": "5fwrgu4i7k55hl6uv",
  "userID": 20,
  "date": "2022/02/26",
  "roomNumber": 9
}, {
  "id": "5fwrgu4i7k55hl6w1",
  "userID": 15,
  "date": "2022/02/19",
  "roomNumber": 8
}];
var unbookedRooms = [
  {
    "number": 10,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 497.64
  },
  {
    "number": 12,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 172.09
  },
  {
    "number": 16,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 325.6
  },
  {
    "number": 17,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 328.15
  },
  {
    "number": 20,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 343.95
  },
  {
    "number": 23,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 339.95
  }
];
var roomsData = [
  {
    "number": 1,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
  },
  {
    "number": 2,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 477.38
  },
  {
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
  },
  {
    "number": 4,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 429.44
  },
  {
    "number": 5,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 340.17
  },
  {
    "number": 6,
    "roomType": "junior suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 397.02
  },
  {
    "number": 7,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 231.46
  },
  {
    "number": 8,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 261.26
  },
  {
    "number": 9,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 200.39
  },
  {
    "number": 10,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 497.64
  },
  {
    "number": 11,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 207.24
  },
  {
    "number": 12,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 172.09
  },
  {
    "number": 13,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 423.92
  },
  {
    "number": 14,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 457.88
  },
  {
    "number": 15,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 294.56
  },
  {
    "number": 16,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 325.6
  },
  {
    "number": 17,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 328.15
  },
  {
    "number": 18,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 496.41
  },
  {
    "number": 19,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 374.67
  },
  {
    "number": 20,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 343.95
  },
  {
    "number": 21,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 429.32
  },
  {
    "number": 22,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 350.31
  },
  {
    "number": 23,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 176.36
  },
  {
    "number": 24,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 327.24
  },
  {
    "number": 25,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 305.85
  }
]

describe('See if the tests are running', function () {
  it('should return true', function () {
    expect(true).to.equal(true);
  });
});
describe('See if the servers are returning ', function () {

  it('should return a promise value', () => {
    var setVal = setDataVals();
  })
});

describe('currentBookings()', () => {
  it('should return an empty array', () => {
    var setVal = currentBookings(99, bookings);
    expect(setVal).to.be.a('array');
    // console.log(setVal)
  });
  it('Should return the an array with only the booking at index 5 on the list of all bookings', () => {
    var retVal = currentBookings(21, bookings);
    // console.log(retVal[0]);
    expect(retVal[0]).to.deep.equal(bookings[5])
  });

});

describe('findFreeRooms()', () => {
  it('should successfully return a filtered array of rooms, previously determined to be unbooked for the date in question.', () => {
    var date = "2022/1/27";
    var currentFilter = "single room"
    var setval = findFreeRooms(date, currentFilter, unbookedRooms);
    // console.log(setval)
    expect(setval).to.deep.equal([
      {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 16,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 325.6
      }
    ])
  });
  it('should successfully return a different filtered array of rooms.', () => {
    var date = "2022/1/27";
    var currentFilter = "residential suite"
    var setval = findFreeRooms(date, currentFilter, unbookedRooms);
    // console.log(setval)
    expect(setval).to.deep.equal([
      {
        number: 20,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 23,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 339.95
      }
    ]);
  })
  it('Should recognize when an invalid date has been entered.', () => {
    var date = "2023/81/9";
    var currentFilter;
    var checkDate = findFreeRooms(date, currentFilter, unbookedRooms);
    expect(checkDate).to.equal("ERROR: 2023/81/9 is an invalid date.");
  })

  it('Should recognize when a different kind of invalid date has been entered.', () => {
    var date = "mayonnaise";
    var currentFilter;
    var checkDate = findFreeRooms(date, currentFilter, unbookedRooms);
    expect(checkDate).to.equal("ERROR: mayonnaise is an invalid date.");
  })

});
describe('bookRoomTestSuite()', () => {
  it('should confirm that it would have been posted, and would not have overlapped with any of the previous bookings.', () => {
    var roomNum = 9;
    var date = '2022/02/19';
    var customerID = 5

    var returned = bookRoomTestSuite(roomNum, date, customerID, bookings)
    expect(returned).to.equal("Successfully (would've) posted a booking with a date of 2022/02/19, a customer ID of 5, and a room number of 9. Additionally, this booking was not already in the received bookings.")

  });
  it('should confirm that a different value would also work when trying to post it, and would not have overlapped with any of the previous bookings.', () => {
    var roomNum = 12;
    var date = '2025/05/19';
    var customerID = 3

    var returned = bookRoomTestSuite(roomNum, date, customerID, bookings)
    expect(returned).to.equal("Successfully (would've) posted a booking with a date of 2025/05/19, a customer ID of 3, and a room number of 12. Additionally, this booking was not already in the received bookings.")

  });

  it('should return a string saying it ended in failure, because the room was already booked.', () => {
    var roomNum = 8;
    var date = '2022/02/19';
    var customerID = 5

    var returned = bookRoomTestSuite(roomNum, date, customerID, bookings)
    expect(returned).to.equal("ERROR, this booking doesn't actually seem to be available! Room number 8 is already booked for 2022/02/19.")

  });
  it('should return a string saying it ended in failure, because either the room number or customer id was not a valid number.', () => {
    var roomNum = 8;
    var date = '2022/02/19';
    var customerID = "Twelve"

    var returned = bookRoomTestSuite(roomNum, date, customerID, bookings)
    expect(returned).to.equal("ERROR: One or both of the room number 8 or the customer ID Twelve are not valid numbers.")

  });
});
describe('hasSpent()', () => {
  it('Should be a function', () => {
    expect(hasSpent).to.be.a('function');
  })
  it('Should take in a set of bookings, rooms, and a customerID value in order to find out how much that customer ID has spent in the past.', ()=>{

    var returnVal = hasSpent(20, bookings, roomsData);
    expect (returnVal).to.equal(663.31)

  })
  it('Should take in a set of bookings, rooms, and a different customerID value in order to find out how much that customer ID has spent in the past.', ()=>{

    var returnVal = hasSpent(48, bookings, roomsData);
    expect (returnVal).to.equal(774.23)

  })
  it('Should return an error message if one or mor of the input values are of the incorrect type.', ()=>{
    var returnVal = hasSpent("blueberry", bookings.toString(), 45);
    expect (returnVal).to.equal("ERROR: One or more of the input parameters were not of the correct type.")

  })


});