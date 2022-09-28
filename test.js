const sdk = require("node-appwrite");

const client = new sdk.Client();

client
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("playground") // Your project ID
  .setKey(
    "beb1e9fdeece6048ffa707a8cf19f3f645bce784def5135f3f8f5c91e382570ac26df1180105ba50068df79a20687fbc5b2af525fe2962550f42840175656444584cc84e97ec4b5ae57e342b912949c98224bac9d64ba6f3531ba33da707a07e0b0adb4155b95fbd32918aafba87338ab4c131f76d786cff4406c2af6bba9ef4"
  ); // Your secret API key

let users = new sdk.Users(client);

let promise = users.get("6334bfa0202f3a501716");

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
