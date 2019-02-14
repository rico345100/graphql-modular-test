/* @flow */
const { typeDefs: Author } = require('./author');
const { typeDefs: Book } = require('./book');

const Query = `
    type Query {
        _empty: String
    }
`;

module.exports = [Query, Author, Book];
