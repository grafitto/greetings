const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./message.proto');
const personPackage = grpc.loadPackageDefinition(packageDefinition).person;

const client = new personPackage.Greetings('localhost:8181', grpc.credentials.createInsecure());

client.getFirstName({}, (error, response) => {
  if(!error) {
    console.log('Hello ' + response.name);
  } else {
    console.error(error);
  }
});
