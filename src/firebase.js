import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyCBM7ecQNzGEpPxdIEmksonxJW3huTsZDM",
    authDomain: "dd35-5b467.firebaseapp.com",
    projectId: "dd35-5b467",
    storageBucket: "dd35-5b467.appspot.com",
    messagingSenderId: "228664502776",
    appId: "1:228664502776:web:9a4d00d1ac5841697c4e0d",
    measurementId: "G-SH60JGP8RT"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };