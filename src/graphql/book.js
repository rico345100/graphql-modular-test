/* @flow */
const typeDefs = `
    extend type Query {
        book: Book
    }

    type Book {
        title: String
        author: Author
    }
`;

const resolvers = {
    book: () => ({
        title: 'Rico\'s Life',
        author: 'Rico Choi'
    })
};

module.exports = {
    typeDefs,
    resolvers
};