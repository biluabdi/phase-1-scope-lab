// 1. Declare a global variable using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly global (bad practice!)
}

// 4. Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// 6. Function that tries to change a constant (this will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // TypeError
}

