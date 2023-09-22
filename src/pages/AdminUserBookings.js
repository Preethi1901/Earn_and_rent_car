import React, { useState, useEffect } from "react";
import AdminDefaultLayout from "../components/AdminDefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";
function AdminUserBookings() {
  const dispatch = useDispatch();
 const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

 
  return (
    <AdminDefaultLayout>
        {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My Bookings</h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {bookings.map((booking) => {
            
              
             return <Row gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                <p><b>{booking.car ? booking.car.name : ''}</b></p>

                    {/* <p><b>{booking.car.name}</b></p> */}
                    <p>Total hours : <b>{booking.totalHours}</b></p>
                    <p>Rent per hour :<b>{booking.car ? booking.car.rentPerHour : ''}</b></p>
                    {/* <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p> */}
                    <p>Total amount : <b>{booking.totalAmount}</b></p>
                </Col>

                <Col lg={12} sm={24}>
                <p>Transaction Id : <b>{booking.transactionId}</b></p>
                {/* <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p>To: <b>{booking.bookedTimeSlots.to}</b></p> */}
                <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                <p> Address:  <b>{booking.car ? booking.car.address:''}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                  
                    <img style={{borderRadius:5}} src={booking.car ? booking.car.image: ''}  height="140" className="p-2"/>
                </Col>
              </Row>;
            })}
         
          
        </Col>
      </Row>
     
    
    </AdminDefaultLayout>
  );
}

export default AdminUserBookings;