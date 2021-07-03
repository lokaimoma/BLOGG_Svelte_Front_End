<script>
  import { route } from "./store/routing_store";
  import { getCookies } from "./services/cookies";
  import Login from "./component/login.svelte";
  import SignUp from "./component/sign_up.svelte";

  const cookies = getCookies();
  if (cookies.id === "") {
    route.set("login");
  } else {
    route.set("blog_list");
  }
</script>

<main>
  {#if $route === "login"}
    <Login />
  {:else if $route === "sign_up"}
    <SignUp />
  {:else if $route === "blog_list"}
    <p>Blog List</p>
  {/if}
</main>

<style>
</style>
