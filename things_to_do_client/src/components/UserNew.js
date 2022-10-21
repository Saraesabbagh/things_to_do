import React from "react";

export const UserNew = () => {
  return (
    <div>
      <h1>Signup to an account</h1>
      <form>
        <input name="Name" placeholder="Type in your first name" />
        <input name="Email" placeholder="Type in your email" />
        <input password="Password" placeholder="Password" />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};
