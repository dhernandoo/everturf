// server/models/Lead.js
const mongoose = require('mongoose')
let LeadSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);
LeadSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
LeadSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
LeadSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
LeadSchema.methods.getUserLead = function (_id) {
    Lead.find({'author': _id}).then((lead) => {
        return lead
    })
}
module.exports = mongoose.model('Lead', LeadSchema)