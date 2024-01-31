/* useRouteError 가 error 객체를 반환해준다. 해당 객체는 스테이터스 관련 문장 혹은 메세지를 가지고 있다 */
import Button from "src/component/Common/Button.jsx";

import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
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
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </div>
  );
};
