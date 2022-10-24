import React from "react";
import { Navigate } from "react-router-dom";

export const UserNew = () => {
  const whenSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const email = event.target.email;
    const password = event.target.password;
    fetch("/api/users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "User added successfully") {
          window.alert("Signup Successful!");
          Navigate("/session/new");
        } else {
          window.alert(json.message);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      <h1>Signup to an account</h1>
      <form onSubmit={whenSubmit}>
        <input name="Name" placeholder="Type in your first name" />
        <input name="Email" type="email" placeholder="Type in your email" />
        <input name="Password" type ="password" placeholder="Password" />
        <input type="Submit" value="Signup" />
      </form>
    </div>
  );
};
