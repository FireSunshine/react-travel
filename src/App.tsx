import React, { useEffect } from 'react';
import styles from './App.module.css';
import { HomePage, OntFound, Register, SignIn, Detail, Search, ShoppingCart, PlaceOrder } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/shoppingCartSlice';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const RouteComponent = (props) => {
    return isAuthenticated ? React.createElement(component, props) : <Navigate to="/signIn" />;
  };
  return <RouteComponent {...rest} />;
};

function App() {
  const token = useSelector((state) => state.userSlice.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getShoppingCart(token));
    }
  }, [token]);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:keywords" element={<Search />} />
          <Route path="/search/" element={<Search />} />
          <Route
            path="/shoppingCart"
            element={<PrivateRoute isAuthenticated={token && token !== null} component={ShoppingCart} />}
          />
          <Route
            path="/placeOrder"
            element={<PrivateRoute isAuthenticated={token && token !== null} component={PlaceOrder} />}
          />
          <Route path="*" element={<OntFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
