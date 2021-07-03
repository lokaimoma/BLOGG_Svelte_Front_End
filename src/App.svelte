<script>
  import { route } from "./store/routing_store";
  import Login from "./component/login.svelte";
  import SignUp from "./component/sign_up.svelte";
</script>

<main>
  {#if $route === "login"}
    <Login />
  {:else if $route == "sign_up"}
    <SignUp />
  {/if}
</main>

<style>
</style>
