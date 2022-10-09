import mongoose from 'mongoose';
const { Schema } = mongoose;

const Schema1 = new Schema({
      customerName : String,
      phoneNumber: Number,
      address:  String,
      loanAmount: Number,
      interest: Number,
      loanTermYears: Number,
      loanType: String,
      description: String,
      createdDate:Date,
      insertedDate:Date
  });

 const loan = mongoose.model('loan', loanSchema);
 