
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2
import dotenv from "dotenv"
dotenv.config({path:'./../config/.env'})


const formControl = async (req,res)=>{
    const { name, lastName, phoneNumber, email, mensaje  } = req.body;

    const myOAuth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developer.google.com/oauthplayground"
      );
  
      myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
      });

      const accessToken = myOAuth2Client.getAccessToken()
  
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: "emialdepagina@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refresh_token: process.env.REFRESH_TOKEN,
          accessToken: (await accessToken).token,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      const message = {
        from: "emaildepagina@gmail.com",
        to: "comaspedro6@gmail.com",
        subject: `Sent from: ${name} ${lastName}`,
        text: `Mensaje Enviado por ${name} ${lastName} atraves de billycoleman.com,
                Datos de usuario:
                Nombre: ${name}
                Apellido: ${lastName}
                Numero de telefono: ${phoneNumber}
                Emial: ${email}
                Mensaje: ${mensaje}`,
        html: `<h2>Mensaje Enviado por ${name} ${lastName} atraves de billycoleman.com</h2>
                <br>
                <div>
                <h3>Datos de usuario:</h3>
                <br>
                <span style="font-size: 18px">Nombre: ${name}</span>
                <br>
                <span style="font-size: 18px">Apellido: ${lastName}</span>
                <br>
                <span style="font-size: 18px">Numero de telefono: ${phoneNumber}</span>
                <br>
                <span style="font-size: 18px">Emial: ${email}</span>
                <br>
                <span style="font-size: 18px"> Mensaje: ${mensaje}</span>
                </div>`
      };
      transporter.verify((err, success) => {
        err
          ? console.log(err)
          : console.log(`=== Server is ready to take messages: ${success} ===`);
  
        try {
          transporter.sendMail(message, (err) => {
            if (err) {
              console.log(err);
              res.status(500).send("Something went wrong.");
            } else {
                console.log("Email successfully sent to recipient!")
                res.json("Email successfully sent to recipient!")
            }
          });
        } catch (err) {
          console.log(err);
        }
      });
}


export default formControl

