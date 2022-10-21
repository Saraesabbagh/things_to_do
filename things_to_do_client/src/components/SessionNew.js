import React from "react";

export const SessionNew = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <form>
        <input name="Email" placeholder="Type in your email" />
        <input password="Password" placeholder="Password" />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};
