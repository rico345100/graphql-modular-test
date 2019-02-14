module.exports = {
    typeDef: `
        type Author {
            id: Int!
            firstName: String
            lastName: String
            books: [Book]
        }
    `
}
