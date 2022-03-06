import { ResolverMap } from "../../types/graphql-utils";

const resolvers: ResolverMap = {
    Query: {
        hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "World"}`
    },
    Mutation: {
        register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
            console.log('email and password ', { email, password })
        }
    }
}

export default resolvers