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
    padding: 0.5rem 1.5rem;
    border: none;
    font-size: 1rem;
    background-color: rgb(111, 196, 111);
    color: #fff;
    font-weight: 700;
    border-radius: 7px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.178);
  }

  .flat {
    box-shadow: none;
  }

  .secondary {
    background-color: rgb(224, 6, 240);
  }

  .primary {
    background-color: rgb(56, 147, 231);
  }
</style>
