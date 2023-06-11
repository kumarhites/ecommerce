import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { addressReducer, initialAddressState } from "../reducers/addressReducer";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [addressState, disptach] = useReducer(
    addressReducer,
    initialAddressState
  );

  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  // get all address
//   const getAllAddresses = async () => {
//     try {
//       const response = await axios.get("/api/user/addresses", {
//         headers: { authorization: token },
//       });
//       const {
//         status,
//         data: { address },
//       } = response;
//       if (status === 200) {
//         disptach({ type: "DISPLAY_ADDRESS", payload: address });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     token && getAllAddresses();
//   }, [token]);

  return (
    <AddressContext.Provider value={{
        addressState
    }}>{children}</AddressContext.Provider>
  );
};
