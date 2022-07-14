import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwjuDi1SZUSJItqECA9pNpAfebz0nP_JU",
    authDomain: "hackerton-a43ff.firebaseapp.com",
    databaseURL: "https://hackerton-a43ff-default-rtdb.firebaseio.com",
    projectId: "hackerton-a43ff",
    storageBucket: "hackerton-a43ff.appspot.com",
    messagingSenderId: "370224362820",
    appId: "1:370224362820:web:1dd959d7ecc0cccd0c1311",
    measurementId: "G-SXZ7S9CDKH"
  };

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };