import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Box from '@mui/material/Box';
import moment from 'moment'
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
//import DatePicker from DatePicker;


dayjs.extend(isBetween);
const {RangePicker} = DatePicker
function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars , setTotalcars] = useState([])
    const [priceRange, setPriceRange] = useState([100, 1000]);
const [searchTerm, setSearchTerm] = useState('');
const[searchArea,setSearchArea]=useState('');
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])


    const filteredCars = availablecars().filter((car) => {
      //temp = []
        if (searchTerm && (car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1]) && searchArea) {
          //if(car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1])
          if( car.name.toLowerCase().includes(searchTerm.toLowerCase()) && car.area.toLowerCase().includes(searchArea.toLowerCase())){
                  return true;// temp.push(car);
                
          }
          

        
        // if( car.name.toLowerCase().includes(searchTerm.toLowerCase()) && car.area.toLowerCase().includes(searchArea.toLowerCase())){
        //   return true;// temp.push(car);
      }

          else if(searchArea && (car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1]))
            return car.area.toLowerCase().includes(searchArea.toLowerCase());
          else if(searchTerm && (car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1]))
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        
       else if(car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1])
         return true;
      });
  //  console.log(dayjs().format());
     function availablecars(){ 
        const formatter = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
          
          
          });
          let now = dayjs();

          console.log(now.toString());
         // var now = dayjs()
        const selectedFrom   = new Date(now.toString());
        const selectedTo = new Date(now.toString());
       
        const formattedDate1 = formatter.format(selectedFrom );
        const formattedDate2 = formatter.format(selectedTo );

        console.log( formattedDate1 );
        console.log( formattedDate2 );
        

        var temp=[]

        for(var car of cars){

              if(car.bookedTimeSlots.length == 0){
                  temp.push(car)
              }
             else{
                    var x=0;
                   for(var booking of car.bookedTimeSlots) {
                    // console.log(dayjs(formattedDate1).isBetween(booking.from , booking.to));
                    // console.log(dayjs(formattedDate2).isBetween(booking.from , booking.to));
                    // console.log(dayjs(booking.from).isBetween(formattedDate1 ,formattedDate2));
                    // console.log(dayjs(booking.to).isBetween(formattedDate1 , formattedDate2));
                //    console.log(car.available=="yes")
                //     console.log(car.available);
                       if(dayjs(formattedDate1).isBetween(booking.from , booking.to) ||
                       dayjs(formattedDate2).isBetween(booking.from , booking.to) 
                      
                       )
                       {
                       //console.log(car.available);
                       x=1;
                       }
                    //    else{
                    //     if(car.available=="yes")
                    //        temp.push(car)
                    //    }

                   }
                   if( x==0)
                           temp.push(car)

             }

        }


       return temp;

       
    }
   
    function setFilter(values){
 // var selectedFrom =  new Date(values[0] , 'MM DD yyyy HH:mm')
        // var selectedTo =  new Date(values[1] , 'MM DD yyyy HH:mm')
       
        const selectedFrom   = new Date(values[0]);
        //console.log( new Date(values[0]));
        const selectedTo = new Date(values[1]);
        const formatter = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
        
        
        });
        const formattedDate1 = formatter.format(selectedFrom );
        const formattedDate2 = formatter.format(selectedTo );

        console.log( formattedDate1 );
        console.log( formattedDate2 );
        

        var temp=[]

  console.log(cars);
        for(var car of cars){
                var x=0
              if(car.bookedTimeSlots.length == 0){
                  temp.push(car)
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
                   if(car.available=="yes" && x==0)
                           temp.push(car)


             }

        }


        setTotalcars(temp)


    }
   
    

    return (
     
        <DefaultLayout>
        
         
 <Row class="filters" style={{paddingBottom:"10px",paddingLeft:"20px",paddingTop:"20px"}}>  
   <h2> Filters</h2>
   </Row>
   <Row>
<Col style={{paddingBottom:"10px",paddingLeft:"20px",paddingRight:"120px", paddingTop:"20px"}}>

  <Box sx={{ width: 300 }}>

    <Slider
        min={100}
        max={1000}
       
        valueLabelDisplay="on"

        value={priceRange}
        onChange={setPriceRange}
        range
      /><Row> <Col  style={{textAlign:"left", paddingRight:"115px"}}> Min Price: {priceRange[0]}</Col>
      <Col  style={{textAlign:"right"}}> Max Price: {priceRange[1]}</Col>
      </Row>
      
     
       </Box>
      </Col>
          <Col style={{paddingBottom:"10px",paddingLeft:"20px",paddingRight:"80px", paddingTop:"20px"}}>
             <input class="search"
        type="text"
        placeholder="SearchCar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </Col>
      <Col style={{paddingBottom:"10px",paddingLeft:"20px",paddingRight:"80px", paddingTop:"20px"}}>
           <input class="search"
        type="text"
        placeholder="SearchArea..."
        value={searchArea}
        onChange={(e) => setSearchArea(e.target.value)}
      />
      </Col>
           
            {/* <Col style={{paddingBottom:"10px",paddingLeft:"20px",paddingTop:"20px"}}>
            <RangePicker renderExtraFooter={() => 'extra footer'} showTime onChange={setFilter} />
            </Col> */}
            </Row>
            <hr></hr>
          
            <Col>

             <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-left'>
                 
                

                     {/* <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/> */}
                     {/* <button>  available    onClick={ Available}</button> */}
                 
                 </Col>
                 

             </Row>

              {loading == true && (<Spinner/>)}


              
              <Row justify='center' gutter={16}>

                   {/* {totalCars.map(car=>{ */}
                   {filteredCars.map((car => {
                       <div>
                          <img src={car.image} alt={car.name} />
                          <div>
                            <h3>{car.name}</h3>
                            <p>{car.rentPerHour}</p>
                          </div>
                          </div>

                       return <Col lg={5} sm={24} xs={24}>
                            <div className="car p-2 bs1">
                               <img src={car.image} className="carimg"/>

                               <div className="car-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2'>
                                    <script src="status.js">
                                       
                                        </script>
                                        <p>{car.name}</p>
                                        <p> {car.rentPerHour} /hr</p>
                                        <p>{car.area}</p>
                                    </div>

                                    <div>
                                        <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                    </div>

                               </div>
                            </div>
                       </Col>
                  //  })}
              }))} 

              </Row>
              </Col>
             

        </DefaultLayout>
      
    )
}

export default Home
// import React , {useState,useEffect} from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import DefaultLayout from '../components/DefaultLayout'
// import { getAllCars } from '../redux/actions/carsActions'
// import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
// import {Link} from 'react-router-dom'
// import Spinner from '../components/Spinner';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

// import Box from '@mui/material/Box';
// import moment from 'moment'
// import dayjs from 'dayjs';
// import isBetween from 'dayjs/plugin/isBetween';
// import FormItem from 'antd/es/form/FormItem'
// //import DatePicker from DatePicker;


// dayjs.extend(isBetween);
// const {RangePicker} = DatePicker
// function Home() {
//     const {cars} = useSelector(state=>state.carsReducer)
//     const {loading} = useSelector(state=>state.alertsReducer)
//     const [totalCars , setTotalcars] = useState([])
   
//     const [priceRange, setPriceRange] = useState([100, 1000]);
// const [searchTerm, setSearchTerm] = useState('');
// const[searchArea,setSearchArea]=useState('');

//     const dispatch = useDispatch()
    

//     useEffect(() => {
//         dispatch(getAllCars())
//     }, [])

//     useEffect(() => {

//         setTotalcars(cars)
        
//     }, [cars])

   
    

   



//     const filteredCars = cars.filter((car) => {
      
//       var temp=[]
//       if((car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1]) && car.available=="yes"){
//         temp.push(car);
//         var temp2=[]
//         if(searchTerm){
//            if(car.name.toLowerCase().includes(searchTerm.toLowerCase())){
//               temp2.push(car);
//            }
//            return temp2;
//         }
//         return temp;
//       }
      
//       // if ( searchTerm && (car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1])&& car.available=="yes") {
//       //     //  if(searchTerm.toLowerCase() && searchArea.toLowerCase()){
//       //     //   return true;
//       //     //  }
//       //     // //if(car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1])
//       //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        
//       //   }
//       //   //  if(searchTerm)
//       //   //  return car.name.toLowerCase().includes(searchTerm.toLowerCase());

//       //     if(searchArea && (car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1])&& car.available=="yes")
//       //    return car.area.toLowerCase().includes(searchArea.toLowerCase());
        
//       //   if((car.rentPerHour >= priceRange[0] && car.rentPerHour <= priceRange[1]) && car.available=="yes")
//       //    return true;
//       });
//       //const stfilter
//   //  console.log(dayjs().format());
//     window.onload = function availablecars(){ 
//         const formatter = new Intl.DateTimeFormat("en-US", {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit",
//             hour: "numeric",
//             minute: "numeric",

          
          
//           });
//           let now = dayjs();
//           console.log("ppp");
//           console.log(now.toString());
//          // var now = dayjs()
//         const selectedFrom   = new Date(now.toString());
//         const selectedTo = new Date(now.toString());
       
//         const formattedDate1 = formatter.format(selectedFrom );
//         const formattedDate2 = formatter.format(selectedTo );

//         console.log( formattedDate1 );
//         console.log( formattedDate2 );
        

//         var temp=[]

//         for(var car of cars){

//               if(car.bookedTimeSlots.length == 0){
//                   temp.push(car)
//               }
//              else{
//                     var x=0;
//                    for(var booking of car.bookedTimeSlots) {
//                     // console.log(dayjs(formattedDate1).isBetween(booking.from , booking.to));
//                     // console.log(dayjs(formattedDate2).isBetween(booking.from , booking.to));
//                     // console.log(dayjs(booking.from).isBetween(formattedDate1 ,formattedDate2));
//                     // console.log(dayjs(booking.to).isBetween(formattedDate1 , formattedDate2));
//                 //    console.log(car.available=="yes")
//                 //     console.log(car.available);
//                        if(dayjs(formattedDate1).isBetween(booking.from , booking.to) ||
//                        dayjs(formattedDate2).isBetween(booking.from , booking.to) 
                      
//                        )
//                        {
//                        console.log(car.available);
//                        x=1;
//                        }
//                     //    else{
//                     //     if(car.available=="yes")
//                     //        temp.push(car)
//                     //    }

//                    }
//                     if(x==0)
//                           temp.push(car)


//              }

//         }


       
//         setTotalcars(temp)

       
//     };
   
//     function setFilter(values){
//  // var selectedFrom =  new Date(values[0] , 'MM DD yyyy HH:mm')
//         // var selectedTo =  new Date(values[1] , 'MM DD yyyy HH:mm')
       
//         const selectedFrom   = new Date(values[0]);
//         //console.log( new Date(values[0]));
//         const selectedTo = new Date(values[1]);
//         const formatter = new Intl.DateTimeFormat("en-US", {
//           year: "numeric",
//           month: "2-digit",
//           day: "2-digit",
//           hour: "numeric",
//           minute: "numeric",
        
        
//         });
//         const formattedDate1 = formatter.format(selectedFrom );
//         const formattedDate2 = formatter.format(selectedTo );

//         console.log( formattedDate1 );
//         console.log( formattedDate2 );
        

//         var temp=[]

//   console.log(cars);
//         for(var car of cars){
//                 var x=0
//               if(car.bookedTimeSlots.length == 0){
//                   temp.push(car)
//               }
//              else{
//                 console.log(car.bookedTimeSlots);
//                    for(var booking of car.bookedTimeSlots) {
//                     // console.log(dayjs(formattedDate1).isBetween(booking.from , booking.to));
//                     // console.log(dayjs(formattedDate2).isBetween(booking.from , booking.to));
//                     // console.log(dayjs(booking.from).isBetween(formattedDate1 ,formattedDate2));
//                     // console.log(dayjs(booking.to).isBetween(formattedDate1 , formattedDate2));
//                 //    console.log(car.available=="yes")
//                 //     console.log(car.available);
//                        if(dayjs(formattedDate1).isBetween(booking.from , booking.to) ||
//                        dayjs(formattedDate2).isBetween(booking.from , booking.to) || 
//                        dayjs(booking.from).isBetween(formattedDate1, formattedDate2) ||
//                        dayjs(booking.to).isBetween(formattedDate1 ,formattedDate2) 
//                        )
//                        {
//                      //  console.log(car.available)
//                      x=1;
//                        }
//                       // else{
//                         // if(car.available=="yes")
//                         //    temp.push(car)
//                       // }

//                    }
//                    if(car.available=="yes" && x==0)
//                            temp.push(car)


//              }

//         }


       
//           setTotalcars(temp)
        


//     }
   
    

//     return (
//         <DefaultLayout>
          
            
//             <Row  style={{paddingBottom:"10px",paddingLeft:"20px"}}> 
//              <h2> Filter</h2>
//              </Row>
           
// {/* export default function SliderSizes() { */}
//   {/* return ( */} 
//   <Row style={{width:"100%"}}> 
//   <Col  style={{float:" left", width: "50%"}}>
//   <Row style={{paddingBottom:"10px",paddingLeft:"20px"}}>
   
//   <Box sx={{ width: 300 }}>

//     <Slider
//         min={100}
//         max={1000}
       
//         valueLabelDisplay="on"

//         value={priceRange}
//         onChange={setPriceRange}
//         range
//       />
//       <p>Min Price: {priceRange[0]}</p>
//       <p>Max Price: {priceRange[1]}</p>
//       </Box>
//       </Row>
//   <Row style={{paddingBottom:"10px",paddingLeft:"10px"}}>     <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
       
//       />
//        </Row>
//       <Row style={{paddingBottom:"10px",paddingLeft:"10px"}}>
//       <input
//         type="text"
//         placeholder="Searcharea..."
//         value={searchArea}
//         onChange={(e) => setSearchArea(e.target.value)}
//       />
     
//        </Row>
//        <Row  style={{paddingBottom:"10px",paddingLeft:"10px"}}> 
//        <RangePicker 
          
//           disabledDate={(current) => {
//             let customDate = moment().format("YYYY-MM-DD");
//             return current && current < moment(customDate, "YYYY-MM-DD");
//           }} showTime onChange={setFilter}
//            />
//         </Row>
//         </Col>
//         <Col>
//              <Row className='mt-3' justify='center'>
                 
//                  <Col lg={20} sm={24} className='d-flex justify-content-left'>
              
            
     
  
     
      
  
       
    
     
    
//                  {/* <RangePicker renderExtraFooter={() => 'extra footer'} showTime onChange={setFilter} /> */}

//                      {/* <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/> */}
//                      {/* <button>  available    onClick={ Available}</button> */}
                 
//                  </Col>
                 

//              </Row>

//               {loading == true && (<Spinner/>)}


              
//               <Row justify='center' gutter={16}>

//                     {/* { totalCars.map((car=>{  */}
//                      {filteredCars.map((car => {
//                        <div>
//                           <img src={car.image} alt={car.name} />
//                           <div>
//                             <h3>{car.name}</h3>
//                             <p>{car.rentPerHour}</p>
//                           </div>
//                           </div>
// // lg={} sm={24} xs={24}
//                        return <Col lg={5} sm={24} xs={24}  >
//                             <div className="car p-2 bs1">
//                                <img src={car.image} className="carimg"/>

//                                <div className="car-content d-flex align-items-center justify-content-between">

//                                     <div className='text-left pl-2'>
//                                     <script src="status.js">
                                       
//                                         </script>
//                                         <p>{car.name}</p>
//                                         <p> {car.rentPerHour} /hr</p>
//                                         <p> {car.area} </p>
//                                     </div>

//                                     <div>
//                                         <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
//                                     </div>

//                                </div>
//                             </div>
//                        </Col>
//                      }))} 
//               {/* }))}  */}

//               </Row>
//               </Col>
//               </Row>

//         </DefaultLayout>
//     )
// }

// export default Home
