

class Hotel{
	constructor(){
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer( name ){
		var newCustomer = new Customer(name);
		this.rooms[0].addOccupant(newCustomer);

	}
	checkOutCustomer(){

	}
	//make a room and add to rooms array
	addRoom(){
		var newRoom = new Room(this);
		this.rooms.push(newRoom);
	}
	//add staff to the hotel
	hireStaff( name ) {
	}
	getVacantRooms(){

	}
	getKitchenService(){
		
	}
	getUnoccupiedRoom(){
		for(var i = 0; i < this.rooms.length - 1; i++){
			var availableRoom;
			if(!this.rooms[i].occupant){
				availableRoom = this.rooms[i];
				break;
			}
		}
		return availableRoom;
	}

}