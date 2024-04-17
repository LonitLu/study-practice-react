import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <div className="app__wrapper">
          <Header />
          <NavBar />
          <div className="app__wrapper--content">
            <Routes>
              <Route
                path="/profile"
                element={<Profile posts={props.posts} />}
              />
              <Route
                path="/dialogs/*"
                element={
                  <Dialogs dialogs={props.dialogs} messages={props.messages} />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  posts: PropTypes.string,
  dialogs: PropTypes.string,
  messages: PropTypes.string,
};

export default App;
