<script>
  import { getCookie } from "../services/cookies";
  import { getDateTimeString } from "../services/date";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";

  export let id = null;
  export let title = "Blog Title goes here";
  export let body = "Blog content goes here";
  export let last_updated = new Date().toLocaleString();
  export let created_date = new Date().toLocaleString();
  export let user_id = getCookie(id);
  const isOwner = parseInt(getCookie("id")) === parseInt(user_id);
  let contentChanged = false;

  const changeHandler = () => {
    contentChanged = true;
    console.log(contentChanged);
  };
</script>

<section id="blog-details-section">
  <Header setDefault={false}>
    <div slot="_default" class="_default">
      <img class="back-img" src="static/img/chevron.png" alt="Go back" />
      {#if isOwner}
        <h2
          class="title"
          contenteditable="true"
          bind:innerHTML={title}
          on:input|once={changeHandler}
        />
      {:else}
        <h2 class="title">{title}</h2>
      {/if}
    </div>

    <div slot="info_and_actions" class="info_and_actions">
      <div class="info">
        <p>👤 {getCookie("username")}</p>
      </div>
      <Button title="Log out" primary={true} flat={true} />
    </div>
  </Header>

  <div class="body-content">
    {#if id !== null}
      <p>Last updated: {getDateTimeString(last_updated)}</p>
    {/if}
    <p>Created: {getDateTimeString(created_date)}</p>

    {#if isOwner}
      <p
        contenteditable="true"
        bind:innerHTML={body}
        on:input|once={changeHandler}
      />
    {:else}
      <p>{body}</p>
    {/if}
  </div>
</section>

<style>
  .back-img {
    cursor: pointer;
    width: 30px;
  }

  ._default {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 10px;
  }
</style>
