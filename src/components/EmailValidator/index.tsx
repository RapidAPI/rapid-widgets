import React, { ReactComponentElement, ReactElement, ReactChildren } from "react";
import { useValidateEmailApi, State, Api } from "./emailValidator.api";

export type Props = {
  rapidKey: string
  renderProps?: (props: Api) => ReactElement
  children?: (props: Api) => ReactElement
}

function EmailValidator(props: Props) {
  const { rapidKey, renderProps, children } = props
  const validateEmailApi = useValidateEmailApi({ rapidKey });

  if (renderProps) {
    return renderProps(validateEmailApi)
  }

  if (children) {
    return children(validateEmailApi)
  }

  return (
    <div className={'email-field-container' + (validateEmailApi.isValid ? ' valid' : ' invalid')} >
      <input onChange={validateEmailApi.handleEmailChange} value={validateEmailApi.email} />
      {!validateEmailApi.isLoading && <div> {validateEmailApi.isValid ? 'valid' : 'invalid'} </div>}
    </div>
  );
}

export default EmailValidator
