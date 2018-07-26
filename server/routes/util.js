const utilscontroller = require('./../controllers/util.ctrl')

module.exports = (router) => {
    /**
     * post contact form
     */
    router
        .route('/contactus')
        .post(utilscontroller.sendContact)
}