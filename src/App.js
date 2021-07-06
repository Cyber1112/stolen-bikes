import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SignUpMenu from "./components/Registration/SignUpMenu";
import SignInMenu from "./components/Authorization/SignInMenu";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/signup" component={SignUpMenu} />
          <Route path="/login" component={SignInMenu} />
          <Route path="/" exact component={Body} />
          <Route path="*" render={() => <Body />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
