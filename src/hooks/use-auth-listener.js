import { useState, useEffect} from 'react';

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth,(authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return;
  }, );

  return { user };
}