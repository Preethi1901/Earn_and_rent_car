const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel")


router.post("/adminlogin", async(req, res) => {

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

router.post("/adminregister", async(req, res) => {

    

    try {
        const newuser = new Admin(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
      return res.status(400).json(error);
    }

});




module.exports = router