<script>
  import { route } from "./store/routing_store";
  import Button from "../shared/button.svelte";
  let email = "";
  let password = "";
  const errors = { email: "", password: "" };
  let no_errors = false;

  const submitHandler = (_) => {
    no_errors = true;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      errors.email = "Type a correct email";
      no_errors = false;
    } else {
      errors.email = "";
    }

    if (password.length < 8) {
      no_errors = false;
      errors.password = "Password has to be at least 8 characters long";
    } else {
      errors.password = "";
    }

    no_errors && alert("Login OK");
  };
</script>

<div class="login-section">
  <header class="main-header">
    <img src="static/img/blog_logo.png" alt="BLOGG Logo" />
    <Button
      title="Sign Up"
      secondary={true}
      clickHandler={() => route.set("sign_up")}
    />
  </header>
  <div class="form-container container">
    <form on:submit|preventDefault={submitHandler}>
      <label>
        Email
        <input type="email" bind:value={email} />
        <div class="error">
          <p>{errors.email}</p>
        </div>
      </label>

      <label>
        Password
        <input type="password" bind:value={password} minlength="8" />
        <div class="error">
          <p>{errors.password}</p>
        </div>
      </label>

      <Button
        title="Log In"
        clickHandler={submitHandler}
        flat={true}
        primary={true}
      />
    </form>
  </div>
</div>

<style>
  .login-section {
    background-color: rgb(55, 28, 66);
    color: #fff;
    height: 100vh;
  }

  .main-header {
    background-color: rgb(37, 20, 44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.3rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.288);
  }

  .form-container {
    display: grid;
    place-items: center;
    padding: 30px;
    height: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.151);
    border-radius: 10px;
  }

  form input[type="email"],
  form input[type="password"] {
    width: 100%;
    padding: 0.5rem 0.3rem;
    margin: 0.4rem 0;
    border-radius: 5px;
    border: none;
  }

  .error {
    color: red;
    font-weight: bold;
  }
</style>
