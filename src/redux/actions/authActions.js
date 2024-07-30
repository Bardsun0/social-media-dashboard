import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from "../slices/authSlice";

export const registerRequest = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    await updateProfile(userCredential.user, { displayName: userData.name });

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: userData.name,
      email: userData.email,
    });

    dispatch(
      registerSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userData.name,
      })
    );
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const loginRequest = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    dispatch(
      loginSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      })
    );
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
