
// import CreateAccount from './components/create-account-page/CreateAccount'
// import ForgotPassword from './components/forgot-password-page/ForgotPassword';
// import Login from './components/login-page/Login';
// import OtpConfitmation from './components/otp-confirmation-page/OtpConfitmation';
// import ResetPassword from './components/reset-password-page/ResetPassword';
// import SplashScreen from './components/splash-screen-page/SplashScreen';
import { Overview, Bulletin, Discover, Give, LiveStream, PrayerRequest, Testimonial, User } from './components/component'
import SidebarComponent from "./components/sidebar-component/SidebarComponent";
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="w-full bg-body">
        <div className="flex">
          <div className="w-1/6 bg-white">
            <SidebarComponent />
          </div>
          <div className="w-5/6 px-10 py-5">
            <div className="flex">
              <NavbarComponent />
            </div>
            <div className='mt-5'>
              <Routes>
                <Route path='/overview' component={Overview} />
                <Route path='/discover' component={Discover} />
                <Route path='/testimonial' component={Testimonial} />
                <Route path='/prayer-request' component={PrayerRequest} />
                <Route path='/user' component={User} />
                <Route path='/live-stream' component={LiveStream} />
                <Route path='/give' component={Give} />
              </Routes>
            </div>
          </div>
          {/* <OtpConfitmation /> */}
          {/* <Login /> */}
          {/* <ForgotPassword /> */}
          {/* <ResetPassword /> */}
          {/* <SplashScreen /> */}
          {/* <CreateAccount /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
