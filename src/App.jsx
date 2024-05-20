import { Routes, Route } from "react-router-dom";
import "././normalize.css";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from "prop-types";

const App = (props) => {
  return (
    <>
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app__wrapper--content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile store={props.store} />
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs store={props.store} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  store: PropTypes.object,
};

export default App;
