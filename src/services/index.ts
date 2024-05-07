const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { Cards } from '../types/index';

const firebaseConfig = {
	apiKey: 'AIzaSyClG1YlHD1CiQM_5AsY4DByCCRJ7WAgZrY',
	authDomain: 'lab-6-40105.firebaseapp.com',
	projectId: 'lab-6-40105',
	storageBucket: 'lab-6-40105.appspot.com',
	messagingSenderId: '364193822048',
	appId: '1:364193822048:web:4dabfd7368a07825541a05',
	measurementId: 'G-5SKSS3NHJK',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const addMusic = async (FormData: Omit<Cards, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'music'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getMusic = async () => {
	const querySnapshot = await getDocs(collection(db, 'music'));
	const Arraysongs: Array<Cards> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};
