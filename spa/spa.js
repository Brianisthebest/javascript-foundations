function createCustomer(name, bill, bookings = [],) {
  var customer = {
    name:name,
    bill: bill,
    bookings: bookings
  };
  return customer;
}

function greeting(customer) {
  if(customer.bookings.length < 1) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
}

function createService(name, cost) {
  var service = {
    name: name,
    cost: cost
  };
  if(service.name === undefined || service.cost === undefined) {
    return 'Please provide service name and cost.';
  } else{
    return service;
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost
  return customer;
}

function applyGiftCard(services, amount) {
  var affordable = [];
  for(i = 0; i < services.length; i++) {
    if(amount >= services[i].price) {
      affordable.push(services[i].name)
    };
  };
  return affordable;
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
