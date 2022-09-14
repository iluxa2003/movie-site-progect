const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3005;
mongoose.connect(
  "mongodb+srv://ilya:1111@cluster0.nvhgwsm.mongodb.net/my-data-base?retryWrites=true&w=majority"
);
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error: " + err));
dbConnection.once("open", () => console.log("connected"));
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("Server started, finaly.....");
});
