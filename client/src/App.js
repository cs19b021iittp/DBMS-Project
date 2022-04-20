//@ts-check

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage/authentication";
import { LandingPage } from "./components/LandingPage/landing-page";
import BuyerHomePage from "./components/BuyerHomePage/buyer-home-page";
import BuyerAccountPage from "./components/BuyerAccountPage/buyer-account-page";
import BuyerOrdersPage from "./components/BuyerOrdersPage/buyer-orders";
import SellerHomePage from "./components/SellerHomePage/seller-home-page";
import PaymentPage from "./components/PaymentGateway/payment-page";
import OtpPayment from "./components/PaymentGateway/otp-payment";
import CartPage from "./components/CartPage/cart-page";
import SellerUpdatePage from "./components/SellerUpdateItem/seller-update";
import ItemPage from "./components/ItemPage/item-page";
import BuyerSignupPage from "./components/BuyerSignupPage/buyer-signup";
import SellerSignupPage from "./components/SellerSignupPage/seller-signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={OtpPayment} /> */}
          {/* <Route exact path="/" component={BuyerHomePage} /> */}
          <Route exact path="/item" component={ItemPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth/:id" component={AuthenticationPage} />
          <Route exact path="/buyer-home" component={BuyerHomePage} />
          <Route exact path="/payment-page" component={PaymentPage} />
          <Route
            exact
            path="/otp-payment/:id/:address_id"
            component={OtpPayment}
          />
          <Route exact path="/buyer-signup" component={BuyerSignupPage} />
          <Route exact path="/seller-signup" component={SellerSignupPage} />
          <Route exact path="/seller-home" component={SellerHomePage} />
          <Route exact path="/seller-update" component={SellerUpdatePage} />
          <Route exact path="/buyer-cart" component={CartPage} />
          <Route exact path="/buyer-account" component={BuyerAccountPage} />
          <Route exact path="/buyer-orders" component={BuyerOrdersPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
