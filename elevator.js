/*jslint node: true */
'use strict';

module.exports = {
	goto: function (currentFloor, destination){
		var destinationNumber = parseInt(destination);
    // validates destinationNumber
    if(destinationNumber > 3) {
      return 0;
    } 
    if(typeof currentFloor === "string") {
      return 0;
    }
    if(typeof destination === "number") {
      return 0;
    }
    if(currentFloor > 3) {
      return 0;
    }
    if(destinationNumber === currentFloor) {
      return 0;
    } 
    if(currentFloor instanceof Array) {
      return 0;
    }
    if(currentFloor < destinationNumber) {
      return destinationNumber - currentFloor;
    }
    if(currentFloor > destinationNumber) {
      return destinationNumber - currentFloor;
    }

    return 0;
	}
};

// function goto(){


// }

