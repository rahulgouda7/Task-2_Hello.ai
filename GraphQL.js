// Construct the GraphQL query
const query = `
    query {
      orders(first: 5, query: "created_at_min:2022-12-12T00:00:00-00:00 created_at_max:2022-12-29T23:59:59-00:00", sortKey: CREATED_AT) {
        edges {
          node {
            id
            name
            createdAt
          }
        }
      }
    }
  `;

module.exports = query;
