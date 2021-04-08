import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import MovieDetailPage from './views/MovieDetailPage/MovieDetailPage'


// import StripeBtn from "./views/StripeBtn/StripeBtn";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetailPage, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
          {/* <Route exact path="/stripebtn" component={Auth(StripeBtn), false} /> */}
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Stripe Checkout - ReactJS</p>
          <StripeBtn />
        </header> */}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
