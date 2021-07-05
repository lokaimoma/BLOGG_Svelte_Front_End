<script>
  import { getCookie } from "../services/cookies";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";

  export let blog_id = null;
  export let title = "";
  export let body = "";
  export let last_updated = new Date().toLocaleString();
  export let user_id;
</script>

<section id="blog-details-section">
  <Header setDefault={false}>
    <div slot="_default">
      <p>🔰</p>
      <h2 contenteditable={getCookie("id") === user_id}>
        {body} bind:innerHTML={title} />
      </h2>
    </div>

    <div slot="info_and_actions" class="info_and_actions">
      <div class="info">
        <p>👤 {getCookie("username")}</p>
      </div>
      <Button title="Log out" primary={true} flat={true} />
    </div>
  </Header>

  <div class="body-content">
    <p>Last updated: {last_updated}</p>

    <p contenteditable={getCookie("id") === user_id}>{body}</p>
  </div>
</section>
