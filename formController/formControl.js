import * as nodemailer from 'nodemailer';


const formControl = async (req,res)=>{
    // async..await is not allowed in global scope, must use a wrapper
    // Generate test SMTP service account from ethereal.email
    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
  });
  transporter.sendMail({
      from: 'sender@example.com',
      to: 'recipient@example.com',
      subject: 'Message',
      text: 'I hope this message gets delivered!'
  }, (err, info) => {
      console.log(info.envelope);
      console.log(info.messageId);
  });

    // let transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: process.env.PORT,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.user, // generated ethereal user
    //     pass: process.env.pass, // generated ethereal password
    //   },
    // });
    
    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: `"Fred Foo 👻" <${process.env.user}>`, // sender address
    //   to: "comaspedro6@gmail.com", // list of receivers
    //   subject: "Hello ✔", // Subject line
    //   text: "Hello world?", // plain text body
    //   html: "<b>Hello world?</b>", // html body
    // });
  
    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
}
//     try{
//         console.log("Exported")
//     } catch(err){
//         console.log(err)
//     }
// }


export default formControl

