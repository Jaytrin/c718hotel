

class Customer{
	constructor( occupentsName ){
		this.name = occupentsName;
		this.room = null; //room we are currently
		this.isHungry = false;
		setInterval(this.checkIfHungry(),1000);
	}
	checkIfHungry(){
		var random = Math.random();
		if(random <= 0.05){
			this.isHungry = true;
			this.orderRoomService('Potatoes, Boil em, mash, em, stick em in a stew')
			console.log('im staving')
		}else{
			 console.log('Im not hungry')
		}
	}
	orderRoomService( food ){
		this.room.getRoomService(food);
	}
	eat( food ){
		
	}
}

var fido = new Customer('Fido');

