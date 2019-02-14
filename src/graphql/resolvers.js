/* @flow */
const resolvers = {
    Query: {
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
        }),
        book: () => ({
            title: 'Rico\'s Life',
            author: 'Rico Choi'
        })
    },
};

module.exports = resolvers;