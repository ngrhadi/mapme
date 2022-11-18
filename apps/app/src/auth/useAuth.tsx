import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import firebase from 'firebase';
import initFirebase from './initFirebase';
import { useRouter } from 'next/router';
import { removeTokenCookie, setTokenCookie } from './tookenCookies';

initFirebase();

interface IAuthContext {
  user: firebase.User | null;
  logout: () => void;
  authenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<firebase.User | null>(null);
  const router = useRouter();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => console.log(e));
  };

  // async function initFirebase() {
  //   if (firebase.apps.length) {
  //     var conf = firebase.initializeApp({
  //       databaseURL:
  //         'https://data-ae30c-default-rtdb.asia-southeast1.firebasedatabase.app/',
  //       /* eslint-disable-next-line */
  //       storageBucket: 'data-ae30c.firebaseapp.com',
  //       /* eslint-disable-next-line */
  //       projectId: 'data-ae30c',
  //       /* eslint-disable-next-line */
  //       apiKey: 'AIzaSyCOTNKWOs4z81rQJ7tFUWBcq4I2T6ORP_8',
  //     });
  //     var db = conf.firestore();
  //     return db;
  //   }
  // }
  useEffect(() => {
    const cancelListeningAuth = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      });
    return () => {
      cancelListeningAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, authenticated: !!user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const authenticatedUser = useContext(AuthContext);
  return authenticatedUser;
}
