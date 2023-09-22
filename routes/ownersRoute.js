const express = require("express");
const router = express.Router();
const Admin = require("../models/ownerModel")

const nodemailer=require('nodemailer');
router.post("/ownerlogin", async(req, res) => {

      const {username , password} = req.body

      try {
          const user = await Admin.findOne({username , password})
          if(user) {
              res.send(user)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});
router.post("/forgot", async(req, res) => {

    //const {username , password} = req.body

        const owner = await Admin.findOne({Email:req.body.Email})
        console.log(req.body.Email);
        // if(user) {
        //     res.send(user)
        // }
        // else{
        //     return res.status(400).json(error);
        // }
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: 'ishita.senapati2@gmail.com',
              pass: 'kjogswbsgwssxvon' 
            }
          });
transporter.sendMail(
    {
        from:'ishita.senapati2@gmail.com',
        to:owner.Email,
        subject:'password',
        text:'your password is ' +owner.password
    },
    (err)=>  {if (err)
    console.log("Error sending email to owner: ", err);
  else
    console.log("Email sent to owner");
  
}
);

});


router.post("/ownerregister", async(req, res) => {

    

    try {
        const newuser = new Admin(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
      return res.status(400).json(error);
    }

});


module.exports = router