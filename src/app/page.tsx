"use client";
import styles from "./styles.module.css";

export default function LoginPage() {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    alert(`Email: ${email}, Password: ${password}`);
    window.location.href = "/dashboard";
  }

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form
        id="login-form"
        onSubmit={handleSubmit} 
        className={styles.form}
      >
        <input 
          id="email-input"
          type="email" 
          name="email" 
          placeholder="email" 
          required 
        />
        <input
          id="password-input"
          type="password" 
          name="password" 
          placeholder="Password" 
          required 
        />  
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
