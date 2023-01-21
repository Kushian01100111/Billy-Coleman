// import * as nodemailer from 'nodemailer';


const formControl = async (req,res)=>{
    try{
        console.log(req.body)
        res.json("Form submited")
    }catch(err){
        console.log(err)
    }
}


export default formControl

