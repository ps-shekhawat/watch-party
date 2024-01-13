import { useState, useRef } from "react";
import { validateCredentials } from "../utils/validate";
import { login } from "../utils/login";

const LoginModal = () => {
  const [error, setError] = useState(null);
  const email = useRef("");
  const password = useRef("");
  let errorMessage = <h1>{error}</h1>;

  const handleLogin = (event) => {
    event.preventDefault();
    setError(validateCredentials(email.current.value, password.current.value));

    const hasError = validateCredentials(
      email.current.value,
      password.current.value
    );

    if (hasError === null) {
      login(email.current.value, password.current.value);
    }
  };

  return (
    <div className="absolute w-96 bg-black/[.85] text-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 p-10">
      <h1 className="text-center text-3xl font-semibold mb-10 text-rose-600">
        Log In
      </h1>
      <form className="flex flex-col">
        <div className="mb-10 flex justify-between">
          <input
            className="p-2 bg-slate-800 text-white w-full"
            type="text"
            placeholder="Email id"
            id="email"
            ref={email}
          ></input>
        </div>
        <div className="flex justify-between">
          <input
            className="p-2 bg-slate-800 text-white w-full"
            type="password"
            placeholder="Password"
            id="password"
            ref={password}
          ></input>
        </div>
        <span className="text-red-700 my-8">{errorMessage}</span>
        <button
          className="text-white bg-rose-700 p-2 rounded-full"
          onClick={handleLogin}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
