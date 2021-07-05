<script>
  import { getCookie } from "../services/cookies";
  import { onMount } from "svelte";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";
  import BlogItem from "./blog_item.svelte";

  let blog_list = [];

  onMount((_) => {});
</script>

<section id="blog-list-section">
  <Header>
    <div slot="info_and_actions" class="info_and_actions">
      <div class="info">
        <p>👤 {getCookie("username")}</p>
      </div>
      <Button title="Log out" primary={true} flat={true} />
    </div>
  </Header>

  <div class="blog-list" class:no-blogs={blog_list.length === 0}>
    {#each blog_list as blog}
      <BlogItem
        title={blog.title}
        body={blog.body}
        created_date={blog.created_date}
      />
    {:else}
      <p>There are no blogs to display</p>
    {/each}
  </div>
</section>

<style>
  .info_and_actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info {
    margin-right: 0.5rem;
  }

  .blog-list {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .no-blogs {
    grid-template-columns: 1fr;
    place-items: center;
  }
</style>
