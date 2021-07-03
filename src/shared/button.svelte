<script>
  export let title = "No name";
  export let flat = false;
  export let primary = false;
  export let secondary = false;
  export let clickHandler = () => {};
</script>

<button
  class="btn"
  class:flat
  class:primary
  class:secondary
  on:click={clickHandler}
>
  {title}
</button>

<style>
  .btn {
    padding: 0.3rem 1rem;
    border: none;
    background-color: rgb(111, 196, 111);
    color: #fff;
  }
</style>
