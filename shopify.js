// Import the required module
const Shopify = require("shopify-api-node");

// import GraphQL query
const query = require("./GraphQL");

// Create a function to fetch orders based on date range
async function fetchOrders() {
  // Initialize the Shopify instance
  const shopify = new Shopify({
    shopName: "hello24-d5",
    accessToken: "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",
  });
  try {
    // Fetch orders using the GraphQL query
    const response = await shopify.graphql(query);

    // Extract and return the orders
    return response.orders.edges;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return []; // Return an empty array in case of an error
  }
}

module.exports = { fetchOrders };
