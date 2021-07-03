<script>
  let email = "";
  let password = "";
  const errors = { email: "" };
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

    no_errors && alert("Login OK");
  };
</script>

<div>
  <header>
    <img src="static/img/blog_logo.png" alt="BLOGG Logo" />
  </header>
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
    </label>

    <input type="submit" value="Submit" />
  </form>
</div>

<style>
</style>
