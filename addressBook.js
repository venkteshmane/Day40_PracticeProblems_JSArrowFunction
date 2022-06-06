class Contact
{
    //constructor
    constructor(...params)
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }

    //method for validating firstName,lastName.
    validateName(name)
    {
        let nameRegex = RegExp("^[A-Z]{1}[A-z a-z]{2,}$")
        if (nameRegex.test(name))
        {
            return true
        }
        else
        {
          return false
        } 
    }

    //gettters and setters for firstName
    get firstName(){ return this._firstName}
    set firstName(firstName)
    { 
        //passsing firstName to validateName method.
        if (this.validateName(firstName))
        {
            this._firstName = firstName
        }
        else
        {
            throw "First name is incorrect"
        }
    }

    //getter and setter for lastName
    get lastName(){ return this._lastName}
    set lastName(lastName)
    { 
        //passsing lastName to validateName method.
        if (this.validateName(lastName))
        {
            this._lastName = lastName
        }
        else
        {
            throw "Last name is incorrect"
        }
    }
    
    //method for validating address, city, state.
    validateAddressCityState(address)
    { 
        let addressRegex = RegExp("^[A-z]{4,}$")
        if (addressRegex.test(address))
        {
            return true
        }
        else
        {
          return false
        } 
    }

    //getter and setter for address.
    get address(){ return this._address}
    set address(address)
    { 
        //passing address to validateAddressCityState method.
        if (this.validateAddressCityState(address))
        {
            this._address = address
        }
        else
        {
            throw "Address is incorrect"
        }
    }

    //getter and setter for city.
    get city(){ return this._city}
    set city(city)
    { 
        //passing city to validateAddressCityState method.
        if (this.validateAddressCityState(city))
        {
            this._city = city
        }
        else
        {
            throw "City is incorrect"
        }
    }
    
    //getter and setter for state.
    get state(){ return this._state}
    set state(state)
    { 
        //passing state to validateAddressCityState method.
        if (this.validateAddressCityState(state))
        {
            this._state = state
        }
        else
        {
            throw "State is incorrect"
        }
    }

    //getter and setter for zip-code.
    get zip(){ return this._zip}
    set zip(zip)
    { 
        //regexp for zip-code.
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$")
        if (zipRegex.test(zip))
        {
            this._zip=zip
        }
        else
        {
            throw "zip is incorrect"
        }
    }
    
    //getter and setter for phone-number.
    get phoneNumber(){ return this._phoneNumber}
    set phoneNumber(phoneNumber)
    { 
        //regexp for phone-number.
        let phoneNumberRegex = RegExp("^[0-9]\\d{1}\\s[789]\\d{9}$")
        if (phoneNumberRegex.test(phoneNumber))
        {
            this._phoneNumber = phoneNumber
        }
        else
        {
            throw "Phone number is incorrect"
        }
    }
    
    //getter and setter for email.
    get email(){ return this._email}
    set email(email)
    { 
        //regexp for email-id.
        let emailRegex = RegExp("^[0-9a-zA-Z]+([.,+,_,-]{1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2})?")
        if (emailRegex.test(email))
        {
            this._email=email
        }
        else
        {
            throw "email is incorrect"
        }
    }

    toString()
    {
        return "First-Name = " + this.firstName + " Last-Name = " + this.lastName + " Address = " + this.address + " City = " + this.city + " State = " + this.state + " Zip = " + this.zip + " Phone-Number = " + this.phoneNumber + " email = " + this.email
    }
}

//array to store new contact. 
let addressBook  = new Array();

addressBook.push(new Contact("Venktesh","Mane","Omerga","Osmanabad","Maharashtra",413606,"91 9527872718","venktesh.mane18@gmail.com"));

//prompt message on console for user input.
const prompt = require("prompt-sync")({ sigint: true });

//function to create new contact
createContatct = () =>
{
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter last Name : ");
    let address = prompt("Enter Address : ");
    let city = prompt("Enter City : ");
    let state = prompt("Enter State : ");
    let zip = prompt("Enter Zip : ");
    let phoneNumber = prompt("Enter phone number : ");
    let email = prompt("Enter Email address : ");
    return new Contact(firstName,lastName,address,city,state,zip,phoneNumber,email)
    creadteContacts.toString();
}

//method to add contact and check duplicate entries
function checkDuplicateContact()
{
    //calling createcontact function.
    let newContact = createContatct();

    let alreadyExists = addressBook.filter(contact => contact.firstName == newContact.firstName).length;
    if (alreadyExists)
    {
        console.log("\nConatct already exists.\n");
    }
    else
    {
        addressBook.push(newContact);
        console.log("\nAdded sucessfully\n");
    }
}

//function to edit contact
editConatct = () => 
{
    let firstName = prompt("Enter First-Name of contact which you want to edit : ");
    let contact = addressBook.find(contact => contact.firstName == firstName);
    if (contact == undefined)
    {
        console.log("Contact not found ");
    }
    else
    {
        try
        {
            contact.firstName = prompt("Enter First Name : ");
            contact.lastName = prompt("Enter last Name : ");
            contact.address = prompt("Enter Address : ");
            contact.city = prompt("Enter City : ");
            contact.state = prompt("Enter State : ");
            contact.zip = prompt("Enter Zip : ");
            contact.phoneNumber = prompt("Enter phone number : ");
            contact.email = prompt("Enter Email address : ");
        }
        catch(error)
        {
            console.error(error);
        }
    }
}

//delete contact from addressbook.
deleteConatct = () =>
{
    let contactName = prompt("Enter First-Name of contact which you want to delete : ");
    let isdelete = false;
    for( var index = 0; index < addressBook.length; index++)
    { 
        if ( addressBook[index].firstName == contactName)
        { 
            addressBook.splice(index, 1); 
            isdelete = true;
        }
    }
    if (isdelete)
    {
        console.log("\nContact deleted sucessfully.\n");
    }
    else
    {
        console.log("\nContact not found.\n");
    }
}

//fuction to count number of contact in addressbook.
countContact = () =>
{
    let numberOfContact = addressBook.map(contact => contact).reduce(numberOfContact => numberOfContact + 1, 0);
    console.log("\nNumber of contacts are " + numberOfContact + " \n");     
}

function search()
{
    let searchKey = prompt("Enter city or state of contact which you want to search: ");
    return addressBook.filter(contact => contact.city == searchKey || contact.state == searchKey);
}

//method to search contact
function searchContact()
{
    let searchResultList = search();
    console.log(`The person are ${searchResultList.map(contact => contact.firstName)}`);
}

//method to view contact
function viewContact()
{
    let searchResultList = search();
    console.log(`The person are ${searchResultList}`);
}

//function to count contact
countContactByPlace = () =>
{
    let searchResultList = search();
    let numberOfContact = searchResultList.reduce(numberOfContact => numberOfContact+1,0);
    console.log("Number of contacts are "+numberOfContact);
}

//sorting contacts by person's name.
sortByName = () =>
{
    let arrray  = addressBook.sort(function (contact1,contact2)
    {
        let a = contact1.firstName.toUpperCase();
        let b = contact2.firstName.toUpperCase();
        return a == b ? 0 : a > b ? 1: -1;
    })
    console.log(addressBook.toString());
}

//sorting contacts by zip-code.
sortByZip = () =>
{
    addressBook.sort(function (contact1,contact2)
    {
        let a = contact1.firstName.toUpperCase();
        let b = contact2.firstName.toUpperCase();
        return a == b ? 0 : a > b ? 1: -1;
    })
    console.log(addressBook.toString());
}

//user choice and calling functions.
console.log("\nWelcome to address book\n");

let isExit = false
while (!isExit)
{
    console.log("1 Add-Contact :\n2 Display-Contact :\n3 Print Count Of Contacts In Address-Book:\n4 Edit-Contact:\n5 Delete-Contact:\n6 Search Person By City Or State:\n7 View Contact By City Or State:\n8 Count By City Or State:\n9 Sort Contact By Person Name:\n10 Sort By Zip-Code:\n11 Exit :");

    let userChoice = prompt("Enter the number as per against your choice : ");
    switch (userChoice)
    {
        case "1":
            //Create and Add new contacts.
            try
            {
                checkDuplicateContact();
            } 
            catch (error)
            {
                console.error(error);
            }
            break;
        case "2":
            //display all contacts.
            console.log(addressBook);
            break;
        case "3":
            //printing number of contacts in addressbook.
            countContact();
            break;
        case "4":
            //edit contact.
            editConatct();
            break;
        case "5":
            //delete contact.
            deleteConatct();
            break;
        case "6":
            //search person in city or state.
            searchContact();
            break;
        case "7":
            //view contact by city or state.
            viewContact();
            break;
        case "8":
            //count by city or state.
            countContactByPlace();
            break;
        case "9":
            //sort contacts by person's name.
            sortByName();
            break;
        case "10":
            //sort by zip-code.
            sortByZip();
            break;
        case "11":
            //exit from program.
            console.log("Thank You For Using Address-Book.");
            isExit = true;
            break;
        default:
            //error message for invalid input.
            console.log("Invalid Option");
            break;
    }
}