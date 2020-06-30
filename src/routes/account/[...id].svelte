<script context="module">
  export async function preload({ params }) {
    console.log("params in project", { params });
    let [account, project] = params.id;

    return { account, project };
  }
</script>

<script>
  import { onMount } from "svelte";

  export let account, project;
  onMount(() => {
    // here you can call the API passing the account and project parameters
  });
</script>

<svelte:head>
  <title>Individual project</title>
</svelte:head>
<h1>Individual project</h1>

<p>account id: {account}</p>
<p>project id: {project}</p>
