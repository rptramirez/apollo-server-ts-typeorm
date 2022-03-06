import "reflect-metadata";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import * as path from "path";
import { createConnection } from "typeorm";

const typeDefs = importSchema(path.join(__dirname, "graphql/typedefs/schema.graphql"))

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then(() => {
    server.start(() => console.log("Server is running on http://localhost:4000"));
});
