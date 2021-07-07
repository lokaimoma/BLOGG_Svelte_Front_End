<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getCookie } from "../services/cookies";
  import { get_blogs } from "../services/api_service";
  import { getDateTimeString } from "../services/date";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";
  import BlogItem from "./blog_item.svelte";

  let blog_list = [];
  const dispatch = createEventDispatcher();

  onMount((_) => {
    get_blogs().then((data) => {
      blog_list = data;
    });
  });
  const handleClick = (id) => {
    let blog = {};
    if (id) {
      blog_list.every((_blog) => {
        if (_blog.id === id) {
          blog = _blog;
        }
        return _blog.id !== id;
      });
    }
    dispatch("blogClicked", { blog });
  };
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
    {#each blog_list as blog (blog.id)}
      <BlogItem
        title={blog.title}
        body={blog.body}
        created_date={getDateTimeString(blog.created_date)}
        on:click={() => handleClick(blog.id)}
      />
    {:else}
      <p>There are no blogs to display</p>
    {/each}
  </div>

  <div class="add-blog" on:click={handleClick}>
    <p>+</p>
  </div>
</section>

<style>
  .blog-list {
    padding: 20px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, 300px);
  }

  .no-blogs {
    grid-template-columns: 1fr;
    place-items: center;
  }

  .add-blog {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    background-color: rgb(131, 4, 148);
    display: grid;
    place-items: center;
    cursor: pointer;
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin: 30px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.493);
    transition: opacity 0.2s ease-in-out;
  }

  .add-blog:hover {
    opacity: 0.5;
  }
</style>
