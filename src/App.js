
import CreateAccount from './components/create-account-page/CreateAccount'
import ForgotPassword from './components/forgot-password-page/ForgotPassword';
import Login from './components/login-page/Login';
import OtpConfitmation from './components/otp-confirmation-page/OtpConfitmation';
import ResetPassword from './components/reset-password-page/ResetPassword';
import SplashScreen from './components/splash-screen-page/SplashScreen';


function App() {
  return (
    <div>
      <CreateAccount />
      <OtpConfitmation />
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <SplashScreen />
    </div>
  );
}

export default App;
