import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import BottomTabNavigator from './screens/BottomTabNavigator';
import Account from './screens/Profile/Account';
import CallHistory from './screens/Profile/CallHistory';
import FamilyMember from './screens/Profile/FamilyMember';
import LabReport from './screens/Profile/LabReport';
import Medication from './screens/Profile/Medication';
import Monitor from './screens/Profile/Monitor';
import Payment from './screens/Profile/Payment';
import Referral from './screens/Profile/Referral';
import Vaccination from './screens/Profile/Vaccination';
import MakeAppointment from './screens/Appointment/MakeAppointment';
import DoctorList from './screens/Appointment/DoctorList';
import DoctorDetail from './screens/Appointment/DoctorDetail';
import Confirm from './screens/Appointment/Confirm';
import AppointmentDetail from './screens/Appointment/AppointmentDetail';
import BasicInfo from './screens/Signup/BasicInfo';
import FirebaseConfig from './screens/FirebaseConfig';
import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
};


const MainNavigator = createStackNavigator({

    BottomTabNavigator : { 
      screen: BottomTabNavigator
    },
    Login : {
      screen : Login,
      navigationOptions: () => ({
        title: `Login`,
      }),
    },
    SignUp: {
      screen : SignUp,
      navigationOptions: () => ({
        title: `SignUp`,
      }),
    },
    Account: { 
      screen: Account,
      navigationOptions: () => ({
        title: `Account`,
        headerBackTitle: null
      }), 
    },
    CallHistory: { 
      screen: CallHistory,
      navigationOptions: () => ({
        title: `Call History`,
      }), 
    },
    FamilyMember: { 
      screen: FamilyMember,
      navigationOptions: () => ({
        title: `Family Member`,
      }), 
    },
    LabReport: { 
      screen: LabReport,
      navigationOptions: () => ({
        title: `Lab Report`,
      }),
     },
    Medication: { 
      screen: Medication,
      navigationOptions: () => ({
        title: `Medication`,
      }), 
    },
    Monitor: { 
      screen: Monitor,
      navigationOptions: () => ({
        title: `Monitor`,
      }), 
    },
    Payment: { 
      screen: Payment,
      navigationOptions: () => ({
        title: `Payment`,
      }),
    },
    Referral: { 
      screen: Referral,
      navigationOptions: () => ({
        title: `Referral`,
      }), 
    },
    Vaccination: { 
      screen: Vaccination,
      navigationOptions: () => ({
        title: `Vaccination`,
      }),
    },
    MakeAppointment : { 
      screen: MakeAppointment,
      navigationOptions: () => ({
        title: `Make Appointment`,
      }), 
    },
    DoctorList : { 
      screen: DoctorList,
      navigationOptions: () => ({
        title: `Doctor List`,
      }), 
    },
    DoctorDetail : { 
      screen: DoctorDetail,
      navigationOptions: () => ({
        title: `Doctor Detail`,
      }), 
    },
    Confirm : { 
      screen: Confirm,
      navigationOptions: () => ({
        title: `Confirm`,
      }),
    },
    AppointmentDetail : { 
      screen: AppointmentDetail,
      navigationOptions: () => ({
        title: `Appointment Detail`,
      }), 
    },
    BasicInfo : {
      screen: BasicInfo,
      navigationOptions: () => ({
        title: `Basic Info`,
      }), 
    }
});
  
const Route = createAppContainer(MainNavigator);


export default Route;

