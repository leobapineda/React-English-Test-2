import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  else return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  });

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
}, [value])

    
  return [value, setValue];
}

export default useLocalStorage;
