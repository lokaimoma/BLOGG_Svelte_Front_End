<script>
  import { route } from "../store/routing_store";
  import Button from "../shared/button.svelte";

  let email = "";
  let password = "";
  let conf_password = "";
  let user_name = "";

  const errors = { email: "", password: "", conf_password: "", user_name: "" };
  let no_errors = false;

  const submitHandler = (_) => {
    no_errors = true;

    if (user_name.length < 5) {
      no_errors = false;
      errors.user_name = "Username must be at least 5 characters long";
    } else {
      errors.user_name = "";
    }

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

    if (conf_password !== password) {
      no_errors = false;
      errors.conf_password = "Password don't match";
    } else {
      errors.conf_password = "";
    }
  };
</script>

<div class="sign-up-section">
  <header class="main-header">
    <img src="static/img/blog_logo.png" alt="BLOGG Logo" />
    <Button
      title="Log In"
      primary={true}
      clickHandler={() => route.set("login")}
    />
  </header>

  <div class="form-container container">
    <form on:submit|preventDefault={submitHandler}>
      <label>
        Username
        <input type="text" bind:value={user_name} />
        <div class="error">
          <p>{errors.user_name}</p>
        </div>
      </label>

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

      <label>
        Confirm password
        <input type="password" bind:value={conf_password} minlength="8" />
        <div class="error">
          <p>{errors.conf_password}</p>
        </div>
      </label>

      <Button
        title="Sign Up"
        clickHandler={submitHandler}
        flat={true}
        secondary={true}
      />
    </form>
  </div>
</div>

<style>
  .sign-up-section {
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

  .error {
    color: red;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
</style>
