// server/routes/index.js
const user = require('./user')
const lead = require('./lead')
const util = require('./util')
module.exports = (router) => {
    user(router)
    lead(router)
    util(router)
}