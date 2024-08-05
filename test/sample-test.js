import chai from 'chai';
import {bookRoom, currentBookings, currentFilter, findFreeRooms, hasSpent, listData, setDataVals} from '../src/functionCalls.js';

const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
describe('See if the servers are correctly returning ', function() {
  it('Should be a function', () => {
    expect(setDataVals).to.be.a('function');
  });

  it('should return a promise value', ()=>{
  
    var setval = setDataVals();
  console.log( setval);
    
  })
  it('should return a promise value', ()=>{
  
    var setval = currentBookings();
  console.log( setval);
    
  })
  it('should successfully return a filtered array of rooms.', ()=>{
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
    }
];
var date = "2022/1/27";
var currentFilter = "single room"
    var setval = findFreeRooms(date, currentFilter, unbookedRooms);
    console.log(setval)
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
    
  })

});
