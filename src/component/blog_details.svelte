<script>
  import { getCookie } from "../services/cookies";
  import { getDateTimeString } from "../services/date";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";
  import { get } from "svelte/store";

  export let id = null;
  export let title = "";
  export let body = "";
  export let last_updated = new Date().toLocaleString();
  export let created_date = new Date().toLocaleString();
  export let user_id;
  const isOwner = parseInt(getCookie("id")) === parseInt(user_id);
  let contentChanged = false
  console.log(isOwner);
</script>

<section id="blog-details-section">
  <Header setDefault={false}>
    <div slot="_default">
      <p>🔰</p>
      {#if isOwner}
        <h2 contenteditable="true" bind:innerHTML={title} />
      {:else}
        <h2>{title}</h2>
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
      <p contenteditable="true" bind:innerHTML={body} />
    {:else}
      <p>{body}</p>
    {/if}
  </div>
</section>
