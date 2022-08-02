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
        return this.firstName;
    }

    set firstName(firstName) {
        this.firstName = firstName;
    }

    get lastName() {
        return this.lastName;
    }

    set lastName(lastName) {
        this.lastName = lastName;
    }

    get address() {
        return this.address;
    }

    set address(address) {
        this.address = address;
    }

    get city() {
        return this.city;
    }

    set city(city) {
        this.city = city;
    }

    get state() {
        return this.state;
    }

    set state(state) {
        this.state = state;
    }

    get zipCode() {
        return this.zipCode;
    }

    set zipCode(zipCode) {
        this.zipCode = zipCode;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    get emailId() {
        return this.emailId;
    }

    set emailId(emailId) {
        this.emailId = emailId;
    }


    toString() {
        return
        "firstName='" + this.firstName +
            ", lastName='" + this.lastName +
            ", address='" + this.address +
            ", city='" + this.city +
            ", state='" + this.state +
            ", phoneNumber='" + this.phoneNumber +
            ", zipCode='" + this.zipCode +
            ", emailId='" + this.emailId;
    }
}
let addressBook = new AddressBook("Sravan","Kumar","Mncl","Hyd","Goa",35456789,8345,"sravankum");
console.log(addressBook);