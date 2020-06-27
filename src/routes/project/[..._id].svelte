<script context="module">
  export async function preload({ params }) {
    console.log("params in project", { params });
    let [account, project] = params._id;

    return { account, project };
  }
</script>

<script>
  export let account, project;
</script>

<!-- src/routes/blog/[...slug].svelte -->
<svelte:head>
  <title>Individual project</title>
</svelte:head>
<h1>Individual project</h1>

<p>account id => {account}</p>
<p>project id => {project}</p>
