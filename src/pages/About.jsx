import React from "react";
import car2 from './car2.png';

const About=()=>{
    return (
    <div style={{backgroundColor:"white"}}>
        <section id="home">
            <div className='container my-5 py'>
                <div className='row'>
                    <div className="col-md-6">
                        <img src={car2} alt="about car"
                        className="w-100 h-100 mt-5"/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5">ABOUT US</h3>
                        <h1 className="display-6 mb-2">Who <b>we </b>are</h1>
                        <hr/>
                    
                    <p className="lead text-center fs-4">
                    Earn and Rent car is a website for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs!
                    A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car.
                    You can experience the convenience of online booking. The cars listed on our platform come with vehicle insurance. It is extremely easy to pick up the car from the host location. You can drive unlimited KMs, with 100% Free Cancellation up to 6 hours before the trip start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. 
                    Car rent per KM starts as low as Rs. 49/hour. From short road trips to quick in-city drives for groceries, supply pick-up, meeting friends and family, doctor visits, business trips, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.
                    </p>
                 </div>
             </div>
             </div>
        </section>
       
     </div>
    )

}

export default About;