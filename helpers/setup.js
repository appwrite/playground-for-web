const sdk = require('node-appwrite');
const config = {
  project: '5d8fa6deefd05',
  endpoint: 'https://localhost/v1',
  key: '1589eb89e0c0153892c68867ea44137581a7a91390668ab1966a9c3a30a4d9ace58de90b3eaf61c0eae3f35e886b3d01cc8a674caf630c25a4428021ba0697cca5047b42bafb6710911e88fb1553d2833a221a94d2dc6fb55b7e500bc7873c4f09aab939e47aa959d55a972beacec8f7b86852b6842f4ca606908dea9d1cc7df',
};

// Init SDK
const client = new sdk.Client();

const database = new sdk.Database(client);

client
    .setSelfSigned(true)
    .setProject(config.project)
    .setKey(config.key)
    // .setJWT('jwt') // set this to authenticate using JWT
    .setEndpoint(config.endpoint)
;

const collectionName = 'tasks';
const read = ['*'];
const write = ['*'];
const rules = [
  {
    'label': 'completed',
    'key': 'completed',
    'type': 'boolean',
    'default': false,
    'required': true,
    'array': false,
  },
  {
    'label': 'text',
    'key': 'text',
    'type': 'text',
    'default': '',
    'required': true,
    'array': false,
  },
];

const promise = database.createCollection(collectionName, read, write, rules);

promise.then(function(response) {
  console.log('success');
}, function(error) {
  console.log('error', error.type, error.message);
});

