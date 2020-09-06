const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

let packageDefinition = protoLoader.loadSync('./message.proto');
let personPackage = grpc.loadPackageDefinition(packageDefinition).person;

let server = new grpc.Server()
server.addService(personPackage.Greetings.service, {
  getFirstName: (_, callback) => {
    callback(null, { name: 'John' })
  }
})
server.bind('localhost:8181', grpc.ServerCredentials.createInsecure())
console.log('Serving at localhost:8181')
server.start()
