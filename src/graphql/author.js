/* @flow */
const typeDefs = `
    extend type Query {
        author: Author
    }

    type Author {
        id: Int!
        firstName: String
        lastName: String
        books: [Book]
    }
`;

const resolvers = {
    author: () => ({
        id: 0,
        firstName: 'Rico',
        lastName: 'Choi',
        books: [
            {
                title: 'Rico\'s Life',
                author: 'Rico Choi'
            }
        ]
    })
};

module.exports = {
    typeDefs,
    resolvers
};
