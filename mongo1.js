const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/students")

.then(()=>{
    console.log('connection successful')
})
.catch((err)=>{
    console.log(`No connection ${err}`)
})
const std= mongoose.Schema({

    name:String,
    age:Number
})
const savedb = async()=>{
    const stud = mongoose.model('students', std)
    let data = new stud({name:"Arwin", age:29})
    const result = await data.save();
    console.log(result);

} 
savedb()
const insert = async()=>{
    const stud=mongoose.model('students', std)
    let data=await stud.insertMany([
        {name:'Manoj', age:78},
        {name:'raj', age:21}
    ])
    console.log(data)
}
insert()
const update=async()=>{
    const stud=mongoose.model('students', std)
    let data=await stud.updateMany(
        {'name':'Arwin'},{$set:{'age':78}}
    )
    console.log(data)
}
update()
const find=async()=>{
    const stud=mongoose.model('students', std)
    let data = await stud.find()
    console.log(data)
}
find()