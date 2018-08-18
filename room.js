

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant( customer ){
		this.occupant = customer;
	}
	checkIfOccupied(){
		if(this.occupant===null){
			return false;
		} else {
			return true;
		}
	}
	removeOccupant(){
		
	}
	getRoomService(food){
		this.hotel.getKitchenService(food);
	}
}