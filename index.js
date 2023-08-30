// import shopify
const shopify = require("./shopify");

// Main function to execute the order fetching process
async function main() {
  const orders = await shopify.fetchOrders();

  // Display the fetched orders
  if (orders.length > 0) {
    console.log("Fetched orders:");
    orders.forEach((order) => {
      console.log("Order ID:", order.node.id);
      console.log("Order Name:", order.node.name);
      console.log("Created At:", order.node.createdAt);
      console.log("---------------------------");
    });
  } else {
    console.log("No orders found.");
  }
}

// Call the main function to start the process
main();
