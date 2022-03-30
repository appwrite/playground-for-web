const sdk = require('node-appwrite');

const client = new sdk.Client();

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('62387717329626ff1d5a') // Your project ID
    .setKey('000615ffba60ade50ebabc4f13360f4b78a87b40d6f64e2d3eb3d7b248ed70495f8e6918327c12338d96e1f5a745360db915b7ec71e4e0694cf3c3bc4f9a33a78a183d651f64e75ba1f2f3b920a7fec5b04cb706ddbe962d6922a9631e855198e9d042c8205efcc45a19640e0f55b543570da692fe5bea94381632f161b10913') // Your secret API key
;

let users = new sdk.Users(client);

let promise = users.get('623b66a849afa34b5d4e');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});