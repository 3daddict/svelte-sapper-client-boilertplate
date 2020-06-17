<script context="module">
  import * as api from "api.js";

  export async function preload(page, session) {
    //console.log('page', page);
    //console.log('session', session);
    const { _id } = page.params;

    const res = await api.get(
      `accounts/${_id}`,
      session.token,
      session.user._id
    );
    const accountData = res.data;

    console.log("server _id", accountData);

    return { accountData };
  }
</script>

<script>
  export let accountData;
  console.log("client _id", accountData);

  $: projects = accountData.projects;

  if (accountData) {
    //activeName = accountData.accountName;
  }
</script>

<svelte:head>
  <title>{accountData.accountName}</title>
</svelte:head>

<h1>{accountData.accountName}</h1>

<ul>
  {#if projects}
    {#each projects as project}
      <li>
        <a
          class="hover:underline text-blue-500"
          href="/project/{project._id}"
          id={project._id}>
          {project.projectName}
        </a>
      </li>
    {:else}
      <li>
        <p>No projects found or call has not been made</p>
      </li>
    {/each}
  {/if}
</ul>
