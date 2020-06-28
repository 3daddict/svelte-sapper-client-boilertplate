<script context="module">
  import * as api from "api.js";
  // preload account data
  export async function preload(page, session) {
    // call api for account data
    const res = await api.get(`accounts/`,session.token,session.user._id);
    const accountData = res.data;
    return { accountData };
  }
</script>

<script>
  export let accountData;
  // assign dynamic variable to project data
  $: accounts = accountData;
</script>

<svelte:head>
  <title>Accounts</title>
</svelte:head>

<ul>
  {#if accounts}
    {#each accounts as account}
      <li>
        <!-- Prefetch the data on link hover rel="prefetch"" -->
        <a
          class="hover:underline text-blue-500"
          href="account/{account._id}"
          rel="prefetch"
          id={account._id}>
          {account.accountName}
        </a>
      </li>
    {:else}
      <li>
        <p>No projects found or not logged in...</p>
      </li>
    {/each}
  {/if}
</ul>