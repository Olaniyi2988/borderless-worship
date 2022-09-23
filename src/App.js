
// import CreateAccount from './components/create-account-page/CreateAccount'
// import ForgotPassword from './components/forgot-password-page/ForgotPassword';
// import Login from './components/login-page/Login';
// import OtpConfitmation from './components/otp-confirmation-page/OtpConfitmation';
// import ResetPassword from './components/reset-password-page/ResetPassword';
// import SplashScreen from './components/splash-screen-page/SplashScreen';
import { Overview, Bulletin, Discover, Give, LiveStream, PrayerRequest, Testimonial, User } from './components/component'
import SidebarComponent from "./components/sidebar-component/SidebarComponent";
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationOption from './components/registration-option-page/RegistrationOption';


function App() {
  return (
    <Router>
      <RegistrationOption />
      {/* <div className=" bg-body">
        <div className="flex">
          <div className="w-1/6 bg-white lg:block hidden">
            <SidebarComponent />
          </div>
          <div className="w-full lg:w-5/6 px-10 py-5">
            <div className="flex">
              <NavbarComponent />
            </div>
            <div className='mt-5'>
              <Routes>
                <Route path='/' element={<Overview />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/prayer-request' element={<PrayerRequest />} />
                <Route path='/user' element={<User />} />
                <Route path='/live-stream' element={<LiveStream />} />
                <Route path='/give' element={<Give />} />
                <Route path='/bulletin' element={<Bulletin />} />
              </Routes>
            </div>
          </div>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
          {/* <OtpConfitmation /> */}
          {/* <Login /> */}
          {/* <ForgotPassword /> */}
          {/* <ResetPassword /> */}
          {/* <SplashScreen /> */}
          {/* <CreateAccount /> */}