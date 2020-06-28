<script context="module">
  import * as api from "api.js";

  export async function preload(page, session) {
    console.log("page in [_id.svelte]", page);
    console.log("session in [_id.svelte]", session);
    const { slug } = page.params;

    const res = await api.get(
      `accounts/${slug}`,
      session.token,
      session.user._id
    );
    const accountData = res.data;

    console.log("individual acount _id", accountData);

    return { accountData };
  }
</script>

<script>
  export let accountData;
  console.log("accountData", accountData);

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
        <!-- Account url will be slug param from api response object -->
        <a
          class="hover:underline text-blue-500"
          href={`account/project/${accountData._id}/${project._id}`}
          rel="prefetch"
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
