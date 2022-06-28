const Cat = require("./cat")

/**
 * Resolvers used to perform the operation
 * that define in mutations in typeDef (TypeDefinition) file
 * typedefs.js
 **/


const resolvers = {
    Query: {
        hello: ()=> 'Hello from GraphQL'
    },
    Mutation: {
        createCat: async (_,{name})=> {
            const kitty = new Cat({name});
            await kitty.save();
            console.log(kitty);
            return kitty;
            // kitty.save()
            //     .then((response)=>{
            //         console.log(response);
            //         return response;
            //     })
            //     .catch(err=> console.error(err.message))
        }
    }
}
module.exports = resolvers
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
