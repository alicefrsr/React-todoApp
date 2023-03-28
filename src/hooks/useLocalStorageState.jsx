import { useState, useEffect } from 'react';

// localStorage key = ex 'tasks', defaultVal []
export default function UseLocalStorageState(key, defaultValue) {
  // 1. make piece of state based of value in localStorage

  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  // 2. use useEffect to update localStorage when this piece of state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
// NOTES
// in main TodoApp: const [todos, setTodos] = useLocalStorageState("todos", []);
// instead of:      const [todos, setTodos] = useState(initialTodos);
// same as useState(); only diff is we intercepted it, based its value on stored value,
// added useEffect which is listening for a change
// if we wanted to store something else in localStorage like darkMode, language etc,
// (which has nothing to do with todos), we could use:
// const [darkMode, setDarkMode] = useLocalStorageState('display', true);
//which would be the same as
// useEffect(() => {
//   window.localStorage.setItem(key, JSON.stringify(state));
// }, [darkMode]);
