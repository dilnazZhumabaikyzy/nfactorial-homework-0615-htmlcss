import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";
import { ThemeContext, themes } from './theme/contexts/ThemeContext';


import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [darkMode, setDarkMode] = useState(true);


  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button className="switchMode"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <span>Switch mode</span>
              </button>
            )}
          </ThemeContext.Consumer>
      </>
      <Header fan={fan} />
      <hr/>
      <Content />
      <Footer/>
    </DefaultContext.Provider>
  );
}
