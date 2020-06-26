<script context="module">
  import * as api from "api.js";
  // preload account data by id
  export async function preload(page, session) {
    //console.log("page in [_id.svelte]", page);
    //console.log("session in [_id.svelte]", session);

    // _id variable from page params
    const { _id } = page.params;
    // call api for account data by id
    const res = await api.get(`accounts/${_id}`,session.token,session.user._id);
    const accountData = res.data;
    // console log for prefetch verication comment out for production
    console.log(accountData.accountName + " Loaded...");
    return { accountData };
  }
</script>

<script>
  export let accountData;
  // assign dynamic variable to project data
  $: projects = accountData.projects;
</script>

<svelte:head>
  <title>{accountData.accountName}</title>
</svelte:head>

<h1>{accountData.accountName}</h1>

<ul>
  {#if projects}
    {#each projects as project}
      <li>
        <!-- Prefetch the data on link hover rel="prefetch" -->
        <a
          class="hover:underline text-blue-500"
          href="account/{accountData._id}/project/{project._id}"
          rel="prefetch"
          id={project._id}>
          {project.projectName}
        </a>
      </li>
    {:else}
      <li>
        <p>No projects found or not logged in...</p>
      </li>
    {/each}
  {/if}
</ul>
