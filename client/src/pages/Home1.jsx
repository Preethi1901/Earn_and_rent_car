import React from 'react';
import car from '../pages/car.gif';
const Home1=()=>
{
    const backgroundImage = {
        backgroundImage:"url(" + car + ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      };
    
      const containerStyle = {
        ...backgroundImage,
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      };
    return(
        <div style={containerStyle}>
            <section id="home">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div>
                            {/* <h1 className='display-4 fw-bolder mb-4 text-center'><b>A car rental website</b></h1> */}
                           
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Home1;