const { graphqlHTTP } = require('express-graphql');
const controller = require('../controller/coronaController');
const schemaCorona = require('../schema/schemaCorona');

module.exports = (server) => {
  server.get('/test',  (req, res, next) => {
    res.send('Hello frame express');
  });

  server.use('/graphql', graphqlHTTP(async () => {
    const value = await controller.getDataCorona();
    const rootSchema = await schemaCorona.createSchema();
    return {
      schema: rootSchema,
      rootValue: value,
      graphiql: true,
    }
  }))
}