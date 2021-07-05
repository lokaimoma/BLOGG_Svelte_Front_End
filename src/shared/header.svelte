<script>
  export let setDefault = true;
</script>

<header>
  {#if setDefault}
    <img src="static/img/blog_logo.png" alt="BLOGG Logo" />
  {:else}
    <slot name="_default" />
  {/if}
  <slot name="info_and_actions"/>
</header>

<style>
  header {
    background-color: rgb(37, 20, 44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.3rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.288);
  }
</style>
