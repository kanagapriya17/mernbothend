const mongoose=require('mongoose');
const dburl='mongodb+srv://velangudi:priya17@cluster0.bvw7mey.mongodb.net/kottaiyur?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser:true,   
    
    useUnifiedTopology:true,
}

mongoose.connect(dburl,connectionParams).then(()=>{
console.log(`sucessful`);
}).catch((e)=>{
console.log('no connection');
})

