import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import BottomTabNavigator from './screens/BottomTabNavigator';
import Account from './screens/components/Profile/Account';
import CallHistory from './screens/components/Profile/CallHistory';
import FamilyMember from './screens/components/Profile/FamilyMember';
import LabReport from './screens/components/Profile/LabReport';
import Medication from './screens/components/Profile/Medication';
import Monitor from './screens/components/Profile/Monitor';
import Payment from './screens/components/Profile/Payment';
import Referral from './screens/components/Profile/Referral';
import Vaccination from './screens/components/Profile/Vaccination';
import MakeAppointment from './screens/components/Appointment/MakeAppointment';
import DoctorList from './screens/components/Appointment/DoctorList';
import DoctorDetail from './screens/components/Appointment/DoctorDetail';
import Confirm from './screens/components/Appointment/Confirm';
import AppointmentDetail from './screens/components/Appointment/AppointmentDetail';
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
});
  
const Route = createAppContainer(MainNavigator);


export default Route;
