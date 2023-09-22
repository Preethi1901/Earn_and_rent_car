import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OwnerDefaultLayout from "../components/OwnerDefaultLayout";
import Spinner from "../components/Spinner";
//import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { updateCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import AOS from "aos";
//changes start
import { addCar, ownereditCar, getAllCars } from "../redux/actions/carsActions";
import { useParams } from "react-router-dom";
import {  Form, Input } from "antd";
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

function UpdateCar() {
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
  const [totalcars, settotalcars] = useState([]);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      settotalcars(cars);
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
        alert("It is a booked slot")
       }
               
else{
  setFrom(formattedDate1);
     setTo(formattedDate2);
     //setFrom( new Date(values[0]));
    // setTo( new Date(values[1]));
      // setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
      // setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
    car.available="no";

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
    
    function onToken() {
      const reqObj = {
        //token,
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
      //onFinish(car);
     
      dispatch(updateCar(reqObj));
    }
  
    function onFinish(values) {
      values._id = car._id;
      values.name = car.name;
      values.image = car.image;
      values.capacity = car.capacity;
      values.fuelType = car.fuelType;
      values.carno = car.carno;
      values.ownerid = car.ownerid;
  
  
      dispatch(ownereditCar(values));
      onToken();
      console.log(values);
    }
  

  return (
    
    <OwnerDefaultLayout>
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
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalcars.length > 0 && (
            <Form
              initialValues={car}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Car</h3>

              <hr />
              
              <Form.Item
                name="rentPerHour"
                label="Rent per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              
              
                           
                           {/* <Form.Item name='available' label='available' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item> */}

              <div className="text-right">
                <button className="btn1">Edit CAR</button>
              </div>
            </Form>
          )}
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
          
          </Divider>
         

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          {/* <RangePicker
            showTime=
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          /> */}
          <RangePicker renderExtraFooter={() => 'extra footer'} showTime onChange={selectTimeSlots} />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          
           
         
        </Col>

        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
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
    </OwnerDefaultLayout>
  );
}


export default UpdateCar;