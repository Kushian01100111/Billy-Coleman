import * as nodemailer from 'nodemailer';
import * as Oauth2  from 'googleapis/build/src/apis/oauth2/index.js';


const formControl = async (req,res)=>{
    try{
        const main = async () =>{
            const transporter= 0;
                const emial = async (callback) =>{
                    const oauth2Client= new Oauth2(
                    process.env.CLIENT_ID,
                    process.env.CLIENT_SECRET,
                    "https://developers.google.com/oauthplayground",
                    );
                    oauth2Client.setCredentials({
                        refresh_token: process.env.REFRESH_TOKEN,
                        tsl:{
                        rejectUnathorized: false
                        }
                    });
                    oauth2Client.getAccessToken((err,token)=>{
                        if(err)
                            return console.log(err)
                        process.env.ACCESS_TOKEN = token
                        callback( transporter = nodemailer.createTransport({
                            service: "gmail",
                            auth:{
                                type: "oauth2",
                                user: "emaildepagina@gmail.com",
                                clientId: process.env.CLIENT_ID,
                                clientSecret: process.env.CLIENT_SECRET,
                                refreshToken: process.env.REFRESH_TOKEN
                            }
                        }))
                        
                    })
                };
                await emial()
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <emaildepagina@gmail.com>', // sender address
                to: "comaspedro6@gmail.com, emaildepagina@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
        main().catch(console.error);
        console.log(req.body)
        res.json("Form submited")
    }catch(err){
        console.log(err)
    }
}


export default formControl

