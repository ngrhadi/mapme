import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}
