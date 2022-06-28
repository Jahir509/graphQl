const { gql } = require('apollo-server-express');

/**
 * typeDef is the instantiation of
 * a model property as well as model
 **/

const typeDefs = gql`
    type Query{
        hello: String!
    }

    ### Cat Model
    type Cat{
        id: ID!
        name: String!
    }
    
    ### Mutation is the definition of methods to use operation in database
    type Mutation{
        createCat(name:String!): Cat!
    }
`

module.exports = typeDefs
