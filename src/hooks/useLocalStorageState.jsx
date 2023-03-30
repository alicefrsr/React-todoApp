import { useState, useEffect } from 'react';

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
