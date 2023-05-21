//Create a JavaScript class of Home
class Home {
//A construct that accepts rooms, bathrooms, and squareFeet
constructor(rooms, bathrooms, squarefeet) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squarefeet = squarefeet;
}
//A method that uses the `this` keyword to return the number of rooms, bathrooms, and how many square feet
specs() {
    return `This home has' {this.rooms} rooms, {this.bathrooms} bathrooms, and {this.squarefeet} squarefeet.`;
}
}

//Create a subclass named SingleFamilyHome
class SingleFamilyHome extends Home {
//Include all of the Home parameters plus yardSize
constructor(rooms, bathrooms, squarefeet, yardSize) {
    super(rooms, bathrooms, squarefeet);
    this.yardSize = yardSize;
}
specs() {
    return `{super.specs()} It has a {this.yardSize} square foot yard.`;
}
}

//Create a subclass named Apartment
class Apartment extends Home{
//Include all of the Home parameters plus which floor the unit is on
constructor(rooms, bathrooms, squarefeet, yardSize, floor) {
    super(rooms, bathrooms, squarefeet);
    this.floor = floor;
}
specs() {
    return `{super.specs()} Located on the {this.floor} floor.`;
}
};


