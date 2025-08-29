'use client';

import { useState, FormEvent, ChangeEvent } from "react";
import supabaseClient from "../../../supabase/supabaseClient"; 
const Auths = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();

  if (isSignUp) {
    const { error: signUpError } = await supabaseClient.auth.signUp({
      email: cleanEmail,
      password: cleanPassword,
    });
    console.log("user signed up:", cleanEmail);
    if (signUpError) {
      console.error("Error signing up:", signUpError.message);
      return;
    }
  } else {
    const { error: signInError } = await supabaseClient.auth.signInWithPassword({
      email: cleanEmail,
      password: cleanPassword,
    });
    console.log("user signed in:", cleanEmail);
    if (signInError) {
      console.error("Error signing in:", signInError.message);
      return;
    }
  }
};

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
          required
        />

        {errorMessage && (
          <div style={{ color: "red", marginBottom: "0.5rem" }}>
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <button
        onClick={() => setIsSignUp(!isSignUp)}
        style={{ padding: "0.5rem 1rem", marginTop: "0.5rem" }}
      >
        {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
      </button>
    </div>
  );
};

export default Auths;
