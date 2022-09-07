const math = require('math')
module.exports = (htmlStr, loan)=>{ 
    // fat arrow function or lambda
    let interest = (loan.interest*0.01)/12;
    let months= loan.loanTermYears * 12;
    let presentValue = (loan.loanAmount/interest)*(1-1/math.pow((1+interest)/months));

    output = htmlStr.replace(/{%DESCRIPTION%}/g, loan.description);
    output = output.replace(/{%ID%}/g, loan.id);
    output = output.replace(/{%CUSTOMERNAME%}/g, loan.customerName);
    output = output.replace(/{%PHONENUMBER%}/g, loan.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%LOANAMOUNT%}/g, loan.loanAmount);
    output = output.replace(/{%INTEREST%}/g, loan.interest);
    output = output.replace(/{%LOANTERMS%}/g, loan.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
    output = output.replace(/{%PRESENTVALUE%}/g, presentValue);
    return output;
}
