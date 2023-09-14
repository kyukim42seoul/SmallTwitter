/* useRouteError 가 error 객체를 반환해준다. 해당 객체는 스테이터스 관련 문장 혹은 메세지를 가지고 있다 */

import { useRouteError, useNavigate } from "react-router-dom";
import { CustomButton } from "src/button/CustomButton.ts";

export const  ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <CustomButton onClick={() => navigate("/")}>Go Home</CustomButton>
    </div>
  );
}
