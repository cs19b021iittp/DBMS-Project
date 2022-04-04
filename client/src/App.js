//@ts-check

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage/authentication";
import { LandingPage } from "./components/LandingPage/landing-page";
import BuyerHomePage from "./components/BuyerHomePage/buyer-home-page";
import BuyerAccountPage from "./components/BuyerAccountPage/buyer-account-page";
import SellerHomePage from "./components/SellerHomePage/seller-home-page";
import CartPage from "./components/CartPage/cart-page";
import SellerUpdatePage from "./components/SellerUpdateItem/seller-update";
import ItemPage from "./components/ItemPage/item-page";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BuyerAccountPage} />
          <Route exact path="/item" component={ItemPage} />
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/auth/:id" component={AuthenticationPage} />
          <Route exact path="/buyer-home" component={BuyerHomePage} />
          <Route exact path="/seller-home" component={SellerHomePage} />
          <Route exact path="/seller-update" component={SellerUpdatePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
