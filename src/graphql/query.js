/* @flow */
const { typeDef: Author } = require('./author');
const { typeDef: Book } = require('./book');

const Query = `
    type Query {
        author: Author
        book: Book
    }
`;

module.exports = [Author, Book, Query];
