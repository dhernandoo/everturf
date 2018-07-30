/** server/controllers/lead.ctrl.js*/
const Lead = require('./../models/Lead')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')
module.exports = {
    addLead: (req, res, next) => {
        let { text, title, claps, description } = req.body
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
                saveLead(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveLead({ text, title, claps, description, feature_img: '' })
        }
        function saveLead(obj) {
            new Lead(obj).save((err, lead) => {
                if (err)
                    res.send(err)
                else if (!lead)
                    res.send(400)
                else {
                    return lead.addAuthor(req.body.author_id).then((_lead) => {
                        return res.send(_lead)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Lead.find(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, lead)=> {
            if (err)
                res.send(err)
            else if (!lead)
                res.send(404)
            else
                res.send(lead)
            next()            
        })
    },
    /**
     * lead_id
     */
    clapLead: (req, res, next) => {
        Lead.findById(req.body.lead_id).then((lead)=> {
            return lead.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * comment, author_id, lead_id
     */
    commentLead: (req, res, next) => {
        Lead.findById(req.body.lead_id).then((lead)=> {
            return lead.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * lead_id
     */
    getLead: (req, res, next) => {
        Lead.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, lead)=> {
            if (err)
                res.send(err)
            else if (!lead)
                res.send(404)
            else
                res.send(lead)
            next()            
        })
    }
}