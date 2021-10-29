const express  =  require('express');
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./graphql/post/post.js");
const app  =  express();

app.use("/graphql", expressGraphQL({ schema: schema.schema, graphiql: true}));

app.listen(4000, () => {
    console.log("GraphQL server running at http://localhost:4000.");
});