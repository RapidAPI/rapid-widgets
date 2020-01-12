import { useState, useRef, useEffect } from "react";
import debounce from 'lodash/debounce'
import { ApiFactory } from "./types";

export const useApi = (apiFactory: ApiFactory, initialState: any) => {
  let [state, setState] = useState(initialState);
  return apiFactory({ state, setState });
};

export function useIsMounted() {
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false
    };
  }, []);
  return isMounted.current;
}

export function useDebounce(func: (...args: any[]) => any, ...args: any[]) {
  const isMounted = useIsMounted();

  const securedFunc = (...funcArgs: any[]) => {
    if (!isMounted) {
      return;
    }

    return func(...funcArgs);
  };

  return useRef(debounce(securedFunc, ...args)).current;
}