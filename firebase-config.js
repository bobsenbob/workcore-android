import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCQMO2VB17DCrO-M04GucF9IZM_rO5At7o',
    authDomain: 'workcore-android.firebaseapp.com',
    databaseURL: 'https://workcore-android-default-rtdb.firebaseio.com',
    projectId: 'workcore-android',
    storageBucket: 'workcore-android.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:31278409326:android:24e8441b3cb29064e0a87f',
    measurementId: 'G-measurement-id',
    };
      
const app = initializeApp(firebaseConfig);

export { app };