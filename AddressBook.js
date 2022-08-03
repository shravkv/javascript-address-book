class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
    }


    get firstName() {
        return this._firstName;
    }

    set setFirstName(firstName) {
        let firstNameRegex = new RegExp('^[A-Z]{1}[a-z]{3,15}$');
        console.log(firstNameRegex.test(firstName));
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First name is incorrect!";
        }
    }

    get lastName() {
        return this._lastName;
    }

    set setLastName(lastName) {
        let lastNameRegex = RegExp('[A-Z][a-z]{3,15}');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last name is incorrect!';

    }

    get address() {
        return this._address;
    }

    set setAddress(address) {
        let addressRegex = RegExp('[A-Za-z0-9\.\-\s\,]');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address is incorrect!';
    }

    get city() {
        return this._city;
    }

    set setCity(city) {
        let cityRegex = RegExp('[A-Z][a-z]{3,30}');
        if (cityRegex.test(city))
            this._city = city;
        else throw 'City name is incorrect!';
    }

    get state() {
        return this._state;
    }

    set setState(state) {
        let stateRegex = RegExp('[A-Z][a-z]{3,50}');
        if (stateRegex.test(state))
            this._state = state;
        else throw 'State name is incorrect!';
    }

    get zipCode() {
        return this._zipCode;
    }

    set setZipCode(zipCode) {
        let zipCodeRegex = RegExp('[0-9]{4,6}');
        if (zipCodeRegex.test(zipCode))
            this._zipCode = zipCode;
        else throw 'Zip code is incorrect!';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set setPhoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('[0-9]{8,11}');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone number is incorrect!';
    }

    get emailId() {
        return this._emailId;
    }

    set setEmailId(emailId) {
        let emailIdRegex = RegExp('[a-z][a-z A-Z 0-9]+[@][a-z]+[.][a-z]{2,5}');
        if (emailIdRegex.test(emailId))
            this._emailId = emailId;
        else throw 'Email Id is incorrect!';
    }


    toString() {
        return "firstName='" + this.firstName +
            ", lastName='" + this.lastName +
            ", address='" + this.address +
            ", city='" + this.city +
            ", state='" + this.state +
            ", zipCode='" + this.zipCode +
            ", phoneNumber='" + this.phoneNumber +
            ", emailId='" + this.emailId;
    }
}
let addressBook = new AddressBook("Sravan", "Kumar", "Medak", "Delhi", "Haryana", 8765, 124554549, "sravanjtna49");
let addressBook1 = new AddressBook("Harik", "Bhai", "Vamaak", "Mumbai", "Kerala", 9812, 555555590, "dhsjkhsyrh34");
let addressBookArray = new Array();
addressBookArray.push(addressBook);
addressBookArray.push(addressBook1);
addressBookArray.forEach(function(addressBook){
console.log(addressBook);
});
try {
    addressBook.setFirstName = "himalas";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setLastName = "Bilakur";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setAddress = "Kamal";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setCity = "Mumbai";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setState = "Haryana";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setZipCode = "9876";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setPhoneNumber = "454454656";
} catch (e) {
    console.error(e);
}
try {
    addressBook.setEmailId = "ghidksjsksk";
} catch (e) {
    console.error(e);
}