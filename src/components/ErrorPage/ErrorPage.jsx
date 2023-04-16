import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default ErrorPage;
