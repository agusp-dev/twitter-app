import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyD-03m_eYIGoY9HmAJGPt6lAmmQpObENvs",
	authDomain: "tweetdev-9fda2.firebaseapp.com",
	projectId: "tweetdev-9fda2",
	storageBucket: "tweetdev-9fda2.appspot.com",
	messagingSenderId: "311628306436",
	appId: "1:311628306436:web:9942a6d171e8340597fd51"
}

firebase.apps.length === 0 && 
	firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuth = user => {
	const { displayName, email, photoURL } = user
	return {
		avatar: photoURL,
		username: displayName,
		email
	}
}

export const onAuthStateChanged = onChange => {
	return firebase.auth().onAuthStateChanged(user => {
		let normalizeUser = null
		if (user !== null) {
			normalizeUser = mapUserFromFirebaseAuth(user)
		}
		onChange(normalizeUser)
	})
}

export const loginWithGithub = () => {
	const githubProvider = new firebase.auth.GithubAuthProvider()
	return firebase.auth().signInWithPopup(githubProvider)
}
