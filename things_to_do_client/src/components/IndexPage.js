import React from "react";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate('/session/new');
  }

  const navigateToSignup = () => {
    navigate('/user/new');
  }

  return (
    <div>
      <h1>Hi welcome to your Todos!</h1>
      <h3>Never forget a job again</h3>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToSignup}>Signup</button>
    </div>
  )
};