const data = require('./data/data.json');

//console.log(data);

data.forEach((item) =>{
    console.log('*'.repeat(20));
    console.log(item);
    item.IFT598 = 'Summer';
    item.payment = (val)=>{
    return item.credits * val;
   }
})

data.forEach(function(item){
    const {id , customerName} = item;
    console.log(`id = ${id}`);
    console.log(`image = ${customerName}`);
})