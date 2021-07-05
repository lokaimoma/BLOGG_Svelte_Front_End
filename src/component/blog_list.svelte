<script>
  import { getCookie } from "../services/cookies";
  import Header from "../shared/header.svelte";
  import Button from "../shared/button.svelte";
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
</style>
