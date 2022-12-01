const mongoose=require('mongoose');
const DB=module.exports=()=>{


const connectionParams={
    useNewUrlParser:true,   
    
    useUnifiedTopology:true,
}
try{
mongoose.connect('mongodb+srv://priya:kanagapriyaclarit@cluster0.obudofj.mongodb.net/mernstack?retryWrites=true&w=majority');
console.log(`sucessful`);
}
catch(e){


console.log('no connection');
}
}
DB();
