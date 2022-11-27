const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    customerName: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    loanAmout:{
        type: Number
    },
    interest: {
        type: Number
    },
    loanTermYears: {
        type: Number
    },
    loanType: {
        type: String
    },
    description: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    insertedDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Loan', loanSchema)