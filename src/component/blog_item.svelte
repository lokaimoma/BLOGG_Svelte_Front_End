<script>
  export let title = "Title";
  export let body =
    "A sample body with a long text to display. Better put something there. I just want to put so much text for better styling it. I just want to exceed 3 lines. So let's test and see how i trauncate this text.";
  export let created_date = "4/12/2021";
</script>

<div class="blog-item" on:click>
  <h3 class="title">{title}</h3>
  <p class="body">{body}</p>
  <p class="date">Created date: {created_date}</p>
</div>

<style>
  .blog-item {
    hyphens: auto;
    -ms-hyphens: manual;
    width: 300px;
    background-color: rgb(50, 8, 56);
    border-radius: 5px;
    padding: 15px;
    border-left: 2px solid orangered;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .blog-item:hover {
    transform: translateY(-10px);
  }

  .title,
  .body {
    margin-bottom: 0.4rem;
  }

  .body {
    font-size: 0.9rem;
    line-height: 1.2rem;
    height: 3.6rem;
    overflow: hidden;
    position: relative;
  }

  .body::after {
    content: "";
    position: absolute;
    height: 1.2rem;
    bottom: 0;
    right: 0;
    width: 70%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgb(50, 8, 56) 90%
    );
  }

  .date {
    font-size: 0.8rem;
    text-align: right;
  }
</style>
