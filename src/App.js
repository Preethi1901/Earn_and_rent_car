//import logo from './logo.svg';
import './App.css';
import {Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLogin from './pages/AdminLogin'
import AdminRegister from './pages/AdminRegister'
import OwnerLogin from './pages/OwnerLogin'
import OwnerRegister from './pages/OwnerRegister'
import BookingCar from './pages/BookingCar'
import UpdateCar from './pages/OwnerUpdate'
//import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import OwnerUserBookings from './pages/OwnerUserBookings';
import AdminUserBookings from './pages/AdminUserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import OwnerHome from './pages/OwnerHome';
import OwnerEditCar from './pages/OwnerEditCar';
import OwnerAddCar from './pages/OwnerAddCar';
import Landing from './pages/Landing';
import Services from './pages/Services';
import About from './pages/About';
import Home1 from './pages/Home1';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Forgot from './pages/Forgot';
import OwnerForgot from './pages/OwnerForgot';
import Guidelines from './pages/Guidelines';




function App() {
  return (
    <div className="App">

         
         
         <Routes>
         <Route path='/' element={<Landing/>}/>
             <Route path='/nav' element={<Navbar/>}/>
             <Route path='/home1' element={<Home1/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/services' element={<Services/>}/>
             <Route path='/footer' element={<Footer/>}/>
             <Route path='/guidelines' element={<Guidelines/>}/>
             <Route path='/home' element={<Home />}/>
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>}/>
             <Route path='/adminlogin' element={<AdminLogin/>} />
             <Route path='/adminregister' element={<AdminRegister/>}/>
             <Route path='/ownerlogin' element={<OwnerLogin/>} />
             <Route path='/ownerregister' element={<OwnerRegister/>}/>
             <Route path='/booking/:carid' element={<BookingCar/>} exact/>
           
             <Route path='/userbookings' element={<UserBookings/>} />
             <Route path='/owneruserbookings' element={<OwnerUserBookings/>} />
             <Route path='/adminuserbookings' element={<AdminUserBookings/>} />
             <Route path='/addcar' element={<AddCar/>} />
             <Route path='/editcar/:carid' element={<EditCar/>} />
             <Route path='/admin' element={<AdminHome/>} /> 
             <Route path='/ownerhome' element={<OwnerHome/>}/>
             <Route path='/owneraddcar' element={<OwnerAddCar/>} />
             <Route path='/ownereditcar/:carid' element={<OwnerEditCar/>} />
           
             <Route path='/update/:carid' element={<UpdateCar/>} exact/>
            
             <Route path='/forgot' element={<Forgot/>} /> 
             <Route path='/ownerforgot' element={<OwnerForgot/>} /> 
            
         </Routes>

    </div>
  );
}
export default App;

/*
/* <Route path='/booking/:carid' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             <Route path='/admin' exact component={AdminHome} /> */


/*export default function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    //{path: '/about', element: <About />},
     ]);

  return element;
}


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Navigate to='/login'/>
    }

}*/