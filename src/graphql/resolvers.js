/* @flow */
const merge = require('lodash/merge');
const { resolvers: authorResolvers } = require('./author');
const { resolvers: bookResolvers } = require('./book');

module.exports = {
    Query: merge(authorResolvers, bookResolvers)
};
