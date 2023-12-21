console.log("    ");
console.log("******************************************************************************** Vehicles details ***********************************************************************************");
console.log("    ");

class Vehicle {

    modelName

    color

    fuelType

    seatingCapacity

    noOfWheels

    price

    constructor(modelName, color, fuelType, seatingCapacity, noOfWheels, price){
       
        this.modelName = modelName;

        this.color = color;

        this.fuelType = fuelType;

        this.seatingCapacity = seatingCapacity;

        this.noOfWheels = noOfWheels;
        
        this.price = price;

    }

    details(){
        console.log(`Details: ${this.modelName}, ${this.color}, ${this.fuelType}, ${this.seatingCapacity}, ${this.noOfWheels}, ${this.price}`);
    }

}



const vehicle1 = new Vehicle('BMW 7', 'Mineral White Metallic', 'Petrol', 5, 4, '1.70 cr');
console.log("Details of Vehicle 1 ===>",vehicle1);

const vehicle2 = new Vehicle('Land Rover Range Rover 4.4', 'Ostuni Pearl White', 'Petrol', 7, 4, '4.17 cr');
console.log("Details of Vehicle 2 ===>",vehicle2);

const vehicle3 = new Vehicle('Toyota Glanza G AMT', 'Cafe White', 'Petrol', 5, 4, '9.28 lakh' );
console.log("Details of Vehicle 3 ===>",vehicle3);

const vehicle4 = new Vehicle('Mahindra Thar LX 4-Str Hard Top AT RWD', 'Aqua Marine', 'Petrol', 4, 4, '13.77 lakh');
console.log("Details of Vehicle 4 ===>",vehicle4);


const vehicle5 = new Vehicle('Lamborghini Huracan EVO STO Grigio Artis Lucido', 'Grigio Artis Lucido', 'Petrol', 2, 4, '4.99 cr')
console.log("Details of Vehicle 5 ===>",vehicle5);

console.log("    ");
console.log("************************************************************** Traversing an array of vehicles using for of loop *********************************************************************");
console.log("    ");

const arrayOfVehicles =[vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];

for (const element of arrayOfVehicles) {

     console.log('Details:', element);
 }

// ***************************************************************************************** College Details ****************************************************************************************

 class College {

    name

    location

    university

    noOfDeparments

    constructor(name, location, university, noOfDeparments){

        this.name = name;

        this.location = location;

        this.university = university;

        this.noOfDeparments = noOfDeparments;
    }

    display(){
        console.log(`College Details:===> Name: ${this.name},   Location: ${this.location},   University: ${this.university},   No. of departments:  ${this.noOfDeparments}`);
    }

}

console.log("    ");
console.log("************************************************************************ Traversing an object using method ***************************************************************************");
console.log("    ");


const college1 = new College('DIEMS', 'Sambhaji Nagar', 'DBATU University', 4);
console.log(college1.display());


const college2 = new College('COEP', 'Pune', 'PUNE University', 5);
console.log(college2.display());


const college3 = new College('MGM', 'Sambhaji Nagar', 'DBATU University', 5);
console.log(college3.display());


const college4 = new College('MIT', 'Sambhaji Nagar', 'DBATU University', 4);
console.log(college4.display());


console.log("    ");
console.log("************************************************************************ Traversing an object using function ***************************************************************************");
console.log("    ");



function traverseObject(object){

    console.log('====Details of college====');

    for (const key in object) {
       
        console.log(key ,':' , object[key] );
    }

    
}

traverseObject(college1);

console.log(" ");

traverseObject(college2);

console.log(" ");

traverseObject(college3);

console.log(" ");

traverseObject(college4);
    


console.log("    ");
console.log("*****************************************************************************************************************************************************************************************");
