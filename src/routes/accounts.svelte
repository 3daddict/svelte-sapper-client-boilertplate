<script context="module">
  import * as api from "api.js";
  import { accounts } from "../store/accounts";

  export async function preload(page, session) {
    //console.log('page', page);
    //console.log('session', session);
    const { _id } = page.params;

    const res = await api.get(`accounts/`, session.token, session.user._id);
    const accountData = res.data;

    // return { accountData }
    accounts.setupAccounts(accountData);
  }
</script>

<script>
  // export let accountData;

  $: console.log("estore", $accounts);
</script>

<ul>
  {#if $accounts.length > 0}
    {#each $accounts as account}
      <li>
        <a
          class="hover:underline text-blue-500"
          href="/account/{account._id}"
          id={account._id}>
          {account.accountName}
        </a>
      </li>
    {:else}
      <li>
        <p>No Accounts found or call has not been made</p>
      </li>
    {/each}
  {/if}
</ul>
