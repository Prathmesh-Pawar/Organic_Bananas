const nodemailer = require("nodemailer");
// C64FC252E914ACF0E9BE2231D366D3B9A6EF
// C64FC252E914ACF0E9BE2231D366D3B9A6EF

const sendm = async(usermail , subjext , message)=>{
    // console.log(usermail ,subjext , message) ;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'livebailgada@gmail.com',
            pass: 'wauz rfyt fmer zrbg'
            
        }
    });
    
    const info = await transporter.sendMail({
        from: '"Organic Bananas" <livebailgada@gmail.com>', // sender address
        to:usermail, // list of receivers
        subject: subjext, // Subject line
        // text: url, // plain text body
        html: message, 
      });
    
    //   console.log("Message sent: %s", info.messageId);
}


module.exports = sendm ;

 
 


