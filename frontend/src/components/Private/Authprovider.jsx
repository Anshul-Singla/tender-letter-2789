// import { useSelector } from "react-redux";
// import { Navigate } from 'react-router-dom'

// const Authprovider = ({ children }) => {
//   const { Token, gAuth } = useSelector((store) => store.UserLogin.data);
//   return Token || gAuth ? children : <Navigate to="/" />;
// };

// export default Authprovider;
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

const Authprovider = ({ children }) => {
  const { Token } = useSelector((store) => store.UserLogin.data);
  return Token  ? children : <Navigate to="/" />;
};

export default Authprovider;