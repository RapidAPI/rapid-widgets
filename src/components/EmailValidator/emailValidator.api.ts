import { useEffect, BaseSyntheticEvent } from "react";

import { useDebounce, useApi } from "../hooks";
import { validateEmail } from "./emailValidator.service";
import merge from "lodash/merge";
import { ApiFactoryProps } from "../types";

export type State = {
  email?: string
  rapidKey: string
  isValid?: boolean
  isLoading?: boolean
}

export type Api = {
  email: string
  isValid: boolean
  isLoading: boolean
  handleEmailChange: (e: BaseSyntheticEvent) => void
  validateEmailAndSetToState: (rapidKey: string, email: string) => void
}

export const validateEmailApiFactory = ({ state, setState }: ApiFactoryProps<State>) => {

  const validateEmailAndSetToState = (rapidKey: string, email: string) => {
    if (!email) return;
    validateEmail
      (rapidKey, email)
      .then(({ data = {} }: any) => {
        setState(prevState => {
          return {
            ...prevState,
            isValid: data.status !== "invalid",
            isLoading: false
          };
        });
      })
      .catch((e: Error) => {
        setState(prevState => {
          return {
            ...prevState,
            isValid: false,
            isLoading: false
          };
        });
      });
  };

  const handleEmailChange = (e: BaseSyntheticEvent) => {
    e.persist();
    setState(prevState => {
      return {
        ...prevState,
        isLoading: true,
        email: e.target && e.target.value
      };
    });
  };

  const email = state.email;
  const isValid = state.isValid;
  const isLoading = state.isLoading;

  return {
    email,
    handleEmailChange,
    isValid,
    isLoading,
    validateEmailAndSetToState
  };
};

export const useValidateEmailApiFactory = ({ state, setState }: ApiFactoryProps<State>) => {
  const validateEmailApi = validateEmailApiFactory({ state, setState })

  const validateEmailViaZeroBounce = useDebounce(validateEmailApi.validateEmailAndSetToState, 1000);
  useEffect(() => {
    validateEmailViaZeroBounce(state.rapidKey, state.email)
  }, [state.rapidKey, state.email, validateEmailViaZeroBounce])

  return validateEmailApi
}

export const DEFAULT_STATE = {
  email: '',
  isValid: false,
  isLoading: false,
}

export const useValidateEmailApi = (initialState: State) => {
  const mergedInitialState = merge({}, DEFAULT_STATE, initialState)
  return useApi(useValidateEmailApiFactory, mergedInitialState);
}
