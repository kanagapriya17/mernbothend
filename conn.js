const mongoose=require('mongoose');

const dburl='mongodb+srv://velangudi:pMeBjqVHwONeinEV@cluster0.obudofj.mongodb.net/kottaiyur?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser:true,   
    
    useUnifiedTopology:true,
}

mongoose.connect(dburl,connectionParams).then(()=>{
console.log(`sucessful`);
}).catch((e)=>{
console.log('no connection');
})

