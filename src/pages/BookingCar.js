import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import AOS from "aos";
//changes start
import { useParams } from "react-router-dom";

//changes end
import "aos/dist/aos.css"; // You can also use <link> for styles
const { RangePicker } = DatePicker;
/*function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);
  //changes start
  /*useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id ==carid));
    }
  }, [cars]);*/

function BookingCar() {
  const { carid } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  // const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
 

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == carid));
    }
  }, [cars]);
  //changes end

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
   
  }, [totalHours]);




  function selectTimeSlots(values) {
   
   //  console.log(moment(values[0]).format('MM/DD/YYYY'));
    // var theDate = values[0].ToString("yyyy-MM-dd");
//console.log(theDate)
     //new Date(values[0]);
  
     console.log(car.bookedTimeSlots);
    const dateObj  = new Date(values[0]);
    const dateObj1 = new Date(values[1]);
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    
    
    });
    
    const formattedDate1 = formatter.format(dateObj );
    const formattedDate2 = formatter.format(dateObj1);
    
    console.log(formattedDate1);
    console.log(formattedDate2);


    
    

   // const dateTimeInParts = values.toString().split( "T" ); 

  // for(var car of cars){
    var x=0
  if(car.bookedTimeSlots.length == 0){
    setFrom(formattedDate1);
     setTo(formattedDate2);
     //setFrom( new Date(values[0]));
    // setTo( new Date(values[1]));
      // setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
      // setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
      
  }
 else{
    console.log(car.bookedTimeSlots);
       for(var booking of car.bookedTimeSlots) {
        // console.log(dayjs(formattedDate1).isBetween(booking.from , booking.to));
        // console.log(dayjs(formattedDate2).isBetween(booking.from , booking.to));
        // console.log(dayjs(booking.from).isBetween(formattedDate1 ,formattedDate2));
        // console.log(dayjs(booking.to).isBetween(formattedDate1 , formattedDate2));
    //    console.log(car.available=="yes")
    //     console.log(car.available);
           if(dayjs(formattedDate1).isBetween(booking.from , booking.to) ||
           dayjs(formattedDate2).isBetween(booking.from , booking.to) || 
           dayjs(booking.from).isBetween(formattedDate1, formattedDate2) ||
           dayjs(booking.to).isBetween(formattedDate1 ,formattedDate2) 
           )
           {
         //  console.log(car.available)
         x=1;
           }
          // else{
            // if(car.available=="yes")
            //    temp.push(car)
          // }

       }
       if( x==1){
        alert("Car is unavailable in this time slot")
       }
               
else{
  setFrom(formattedDate1);
     setTo(formattedDate2);
     //setFrom( new Date(values[0]));
    // setTo( new Date(values[1]));
      // setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
      // setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
}

 }

 }
//    // console.log(dateTimeInParts[0]);
   
    //  setFrom(formattedDate1);
    //  setTo(formattedDate2);
    //  //setFrom( new Date(values[0]));
    // // setTo( new Date(values[1]));
    //   // setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    //   // setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    // setTotalHours(values[1].diff(values[0], "hours"));
    
  
  
  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      owner:car.ownerid,
      totalHours,
      totalAmount,
      // driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
   
    dispatch(bookCar(reqObj));
  }

  return (
    
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img
            src={car.image}
            className="carimg2 bs1 w-100"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
            <p>Address : {car.address}</p>
          </div>

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          {/* <RangePicker
            showTime=
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          /> */}
           <RangePicker 
          
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }} 
             showTime onChange={selectTimeSlots} />
           
    
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            unavailable time Slots
          </button>
          {from && to && (
            <div>
              <p>
                Total Hours : <b>{totalHours}</b>
              </p>
              <p>
                Rent Per Hour : <b>{car.rentPerHour}</b>
              </p>
              

              <h3>Total Amount : {totalAmount}</h3>

              <StripeCheckout
                shippingAddress
                token={onToken}
                currency="inr"
                amount={totalAmount * 100}
                stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
              
                //stripeKey="pk_test_51N3NlPSCAy0hC7QHvLPCdD5pruPPgjwik97I8titSeeJD8BR6vvUZMzapV8N5Onmv3aKW0ELD2w5B1xnTJ8w0Lk600mY0ZzENH"
                >
                <button className="btn1">Book Now</button>
              </StripeCheckout>
            </div>
          )}
        </Col>

        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Unavailable time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </DefaultLayout>
  );
}


export default BookingCar;
