const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema( //declaring datatypes of document
  {
    _id: {
        type: Number
    },
    customerName: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    loanAmount: {
        type: Number,
    },
    interest: {
        type: Number
    },
    loanTermsYears: {
        type: Number
    },
    loanType: {
        type: String
    },
    description:{
        type: String
    }

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;