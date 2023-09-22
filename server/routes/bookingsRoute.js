

const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const Owner=require("../models/ownerModel")
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IYnC0SIR2AbPxU0EiMx1fTwzbZXLbkaOcbc2cXx49528d9TGkQVjUINJfUDAnQMVaBFfBDP5xtcHCkZG1n1V3E800U7qXFmGf"
);
const nodemailer = require('nodemailer');

// File 1 content
router.post("/bookcar", async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
     
    });
    ``
    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email
      },
      {
        idempotencyKey: uuidv4(),
        
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;
      const newbooking = new Booking(req.body);
      await newbooking.save();
      
      const car = await Car.findOne({ _id: req.body.car });
     // const user= await User.findOne({_id:req.body.user});
      const owner= await Owner.findOne({ownerid:req.body.owner})
    //  console.log(req.body.owner);
      // console.log(req.body.user);
      // console.log("email")
      console.log(owner.Email);
       console.log(req.body.car);
       //if(req.body.car.ownerid==owner.ownerid)
            
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await car.save();

      // File 2 content
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'ishita.senapati2@gmail.com',
          pass: 'kjogswbsgwssxvon' 
        }
      });

      // Sending email to user
      transporter.sendMail(
        {
          from: 'ishita.senapati2@gmail.com',
          to: token.email,
          subject: 'Payment Successful',
         
          text: 'Your payment was successful for car '+car.name+'! debited amount: '+ req.body.totalAmount +'for any queries contact owner number  '+car.ownerid+'  To contact our organisation  040-67241717' 
        },
        (err) => {
          if (err)
            console.log("Error sending email to user: ", err);
          else
            console.log("Email sent to user");
        }
      );

      // Sending email to owner
      transporter.sendMail(
        {
          from: 'ishita.senapati2@gmail.com',
          to: owner.Email,
          subject: 'Car Booked',
          text: 'Money has been added to your account! credited amount: '+ req.body.totalAmount * 0.8
        },
        (err) => {
          if (err)
            console.log("Error sending email to owner: ", err);
          else
            console.log("Email sent to owner");
        }
      );

      res.send("Your booking is successful");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Rest of File 1 content
router.post("/updatecar", async (req, res) => {
  req.body.transactionId = '1234';
  try {
    const newbooking = new Booking(req.body);
    await newbooking.save();
    const car = await Car.findOne({ _id: req.body.car });
    // console.log("kknakdnknk")
     //console.log(req.body.car);
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);

    await car.save();
    res.send("Your booking is successful");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate('car');
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;