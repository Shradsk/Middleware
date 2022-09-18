const data = require("./data");

const datafile = data.Loan;
const httpServer = require('http');
const url = require('url');

const server = httpServer.createServer((req,res)=>{ //call back function
    // console.log(datafile);
   const {query, pathname} = url.parse(req.url, true); 
    
   if(query.id){//if there is query parameter named id
    //Loan page
    if(pathname === '/' || pathname.toLowerCase() === '/loan'){
        res.writeHead(200, { //Everythin ran successfully 
            'Content-type' : 'text/html'
        });
        var queryId = parseInt(query.id);
        function calculatedLoanAmount (queryId){
        var loanAmount;
        datafile[queryId].loanAmount = datafile[queryId].monthlyPayment*((1+datafile[queryId].interest)**datafile[queryId].loanTermYears)*((((1+datafile[queryId].interest)**datafile[queryId].loanTermYears)-1)/datafile[queryId].interest)
        console.log(datafile[queryId].loanAmount);
        }

        //console.log(calculatedLoanAmount(queryId))
        var sum = 0
        for(i=0;i<5;i++){
            datafile[i].loanAmount = datafile[i].monthlyPayment*((1+datafile[i].interest)**datafile[i].loanTermYears)*((((1+datafile[i].interest)**datafile[i].loanTermYears)-1)/datafile[i].interest);
            sum = sum + datafile[i].loanAmount
            //console.log(datafile[i].loanAmount);
        }
        console.log(`Grand total:${sum}`);
    }
}       
            res.end('Hello');
 });
   
//Start Listening to Requests
server.listen(8000,'localhost', ()=>{

    console.log(`Listening to requests on port 8000`);
}); 

