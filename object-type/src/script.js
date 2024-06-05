function createUser(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

// Function to get the full name from a user object
function getFullName(user) {
    if (!user) return '';
    return `${user.firstName} ${user.lastName}`;
}

// Function to get the width from a nested object
function getWidth(params) {
    if (!params || !params.styling || !params.styling.sizes) return null;
    return params.styling.sizes.width || null;
}

// Function to extend an object with a new property isValid
function extendObject(obj, isValid) {
    return {
        ...obj,
        isValid: isValid
    };
}

// Function to sum all finite values in an object
function sumPrices(prices) {
    let sum = 0;
    for (let key in prices) {
        if (typeof prices[key] === 'number' && isFinite(prices[key])) {
            sum += prices[key];
        }
    }
    return sum;
}

// Function to create a user object with methods to set names and get full name
function createUserWithFullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        setFirstName: function(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName: function(newLastName) {
            this.lastName = newLastName;
        },
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}