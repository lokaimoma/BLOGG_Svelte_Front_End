<script>
  import { getCookie } from "../services/cookies";
  import { getDateTimeString } from "../services/date";
  import { update_blog, insert_blog } from "../services/api_service";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";

  export let id = null;
  export let title = "";
  export let body = "";
  export let last_updated = new Date().toLocaleString();
  export let created_date = new Date().toLocaleString();
  export let user_id = getCookie("id");
  const isOwner = parseInt(getCookie("id")) === parseInt(user_id);
  let contentChanged = false;

  const changeHandler = () => {
    contentChanged = true;
  };

  let errors = true;
  const onSaveClicked = () => {
    errors = false;

    if (title === "" || title === "This can't be blank") {
      errors = true;
      title = "This can't be blank";
    }

    if (body === "" || body === "This can't be blank") {
      errors = true;
      body = "This can't be blank";
    }

    if (!errors) {
      let blog_object = {
        title,
        body,
        user_id,
      };
      if (id !== null) {
        update_blog(id, blog_object);
      } else {
        insert_blog(blog_object);
      }
    }
  };
</script>

<section id="blog-details-section">
  <Header setDefault={false}>
    <div slot="_default" class="_default">
      <img class="back-img" src="static/img/chevron.png" alt="Go back" />
      {#if isOwner}
        <h2
          class="title"
          placeholder="Blog Title goes here"
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

  <div id="body-content" class="container">
    <div class="info_and_actions">
      <div class="dates">
        {#if id !== null}
          <p class="date-updated">
            Last updated: {getDateTimeString(last_updated)}
          </p>
        {/if}
        <p class="date-created">Created: {getDateTimeString(created_date)}</p>
      </div>

      {#if isOwner && contentChanged}
        <Button
          clickHandler={onSaveClicked}
          flat={true}
          title="💾 Save Blog"
          secondary={true}
        />
      {/if}
    </div>

    {#if isOwner}
      <p
        class="body"
        contenteditable="true"
        bind:innerHTML={body}
        placeholder="Blog content goes here"
        on:input|once={changeHandler}
      />
    {:else}
      <p class="body">{body}</p>
    {/if}
  </div>
</section>

<style>
  [contenteditable="true"]:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    display: block; /* For Firefox */
    color: rgba(255, 255, 255, 0.445);
  }

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

  #body-content {
    padding: 50px;
  }

  .date-updated,
  .date-created {
    font-size: 0.96rem;
    color: rgb(218, 218, 218);
  }

  .body {
    margin-top: 0.6rem;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.219);
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;
  }

  .body:focus-visible {
    outline: none;
    border-color: rgb(231, 118, 235);
  }
</style>
