const mongoose= require('mongoose');

const connectionString=process.env.DATABASE;

mongoose.connect(connectionString).then((res)=>{
    console.log('mongodb running successfully');
    
}).catch((err)=>{
    console.log(`not connected due to the error ${err}`);
    
})