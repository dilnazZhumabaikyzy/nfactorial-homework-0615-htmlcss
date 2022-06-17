import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        document.getElementById('footer').classList.remove('dark');
        document.getElementById('footer').classList.add('light');
        // console.log(document.getElementById('footer').classList);

        for (let item of document.getElementsByClassName('favorite-button')) {
        item.classList.add('light');
        item.classList.remove('dark');
        }
        break;
      case themes.dark:
        document.body.classList.remove('white-content');
        document.getElementById('footer').classList.add('dark');
        document.getElementById('footer').classList.remove('light');
        for (let item of document.getElementsByClassName('favorite-button')) {
        item.classList.add('dark');
        item.classList.remove('light');
       }
        // console.log(document.getElementById('footer').classList);
        break;
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}