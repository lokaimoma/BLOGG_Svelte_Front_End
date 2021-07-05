<script>
  import { route } from "./store/routing_store";
  import { getCookies } from "./services/cookies";
  import Login from "./component/login.svelte";
  import SignUp from "./component/sign_up.svelte";
  import BlogList from "./component/blog_list.svelte";
  import BlogDetails from "./component/blog_details.svelte";
  import BlogItem from "./component/blog_item.svelte";

  const cookies = getCookies();
  if (cookies.id === "" || cookies.id == undefined) {
    route.set("login");
  } else {
    route.set("blog_list");
  }

  let blog = null;
  const handleBlogClicked = (e) => {
    blog = e.detail.blog;
    route.set("blog_details");
  };
</script>

<main>
  {#if $route === "login"}
    <Login />
  {:else if $route === "sign_up"}
    <SignUp />
  {:else if $route === "blog_list"}
    <BlogList on:blogClicked={handleBlogClicked} />
  {:else if $route === "blog_details"}
    <BlogDetails {...blog}/>
  {:else}
    <p>Loading</p>
  {/if}
</main>

<style>
</style>
