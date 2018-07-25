// server/routes/lead.js
const leadcontroller = require('./../controllers/lead.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all leads
     */
    router
        .route('/leads')
        .get(leadcontroller.getAll)
    /**
     * add an lead
     */
    router
        .route('/lead')
        .post(multipartWare, leadcontroller.addLead)
    /**
     * comment on an lead
     */
    router
        .route('/lead/comment')
        .post(leadcontroller.commentLead)
    /**
     * get a particlular lead to view
     */
    router
        .route('/lead/:id')
        .get(leadcontroller.getLead)
}