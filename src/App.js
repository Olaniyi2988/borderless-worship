
import CreateAccount from './components/create-account-page/CreateAccount'
import ForgotPassword from './components/forgot-password-page/ForgotPassword';
import Login from './components/login-page/Login';
import OtpConfirmation from './components/otp-confirmation-page/OtpConfirmation';
import ResetPassword from './components/reset-password-page/ResetPassword';
import SplashScreen from './components/splash-screen-page/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationOption from './components/registration-option-page/RegistrationOption';
import Dashboard from './components/Dashboard/Dashboard';
import { Overview, Bulletin, Discover, Give, LiveStream, PrayerRequest, Testimonial, User } from './components/component'



function App() {
  return (
    <Router>
      <Routes >
        <Route index element={<RegistrationOption />} />
        <Route path='registration-option' element={<RegistrationOption />} />
        <Route path='login' element={<Login />} />
        <Route path='create-account' element={<CreateAccount />} />
        <Route path='otp-confirmation' element={<OtpConfirmation />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='splash-screen' element={<SplashScreen />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index exact element={<Overview />} />
          <Route path='/dashboard/overview' exact element={<Overview />} />
          <Route path='/dashboard/discover' element={<Discover />} />
          <Route path='/dashboard/testimonial' element={<Testimonial />} />
          <Route path='/dashboard/prayer-request' element={<PrayerRequest />} />
          <Route path='/dashboard/user' element={<User />} />
          <Route path='/dashboard/live-stream' element={<LiveStream />} />
          <Route path='/dashboard/give' element={<Give />} />
          <Route path='/dashboard/bulletin' element={<Bulletin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
