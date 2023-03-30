import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(key, defaultValues, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultValues, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValues));
    } catch (e) {
      value = defaultValues;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}
