import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'kapitol-art-labs-demo.myshopify.com',
    storefrontAccessToken: 'your-storefront-access-token'
});
