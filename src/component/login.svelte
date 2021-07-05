<script>
  import { route } from "../store/routing_store";
  import { login_user } from "../services/api_service";
  import Button from "../shared/button.svelte";
  import Header from "../shared/header.svelte";

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

    if (no_errors) {
      login_user(email, password).then((data) => {
        if (data.ERROR) {
          errors.email = "Email may not be registered";
          errors.password = "Password may be wrong";
        } else {
          errors.email = "";
          errors.password = "";
          document.cookie = `email=${data.email}`;
          document.cookie = `id=${data.id}`;
          document.cookie = `username=${data.username}`;
          // TODO Redirect To BLOG LIST
        }
      });
    }
  };
</script>

<div class="login-section">
  <Header>
    <div slot="info_and_actions">
      <Button
        title="Sign Up"
        secondary={true}
        clickHandler={() => route.set("sign_up")}
      />
    </div>
  </Header>
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
    color: #fff;
    height: 100vh;
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
