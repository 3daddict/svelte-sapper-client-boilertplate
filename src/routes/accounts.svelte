<script>
  import { accounts } from "../store/accounts";
  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  $: console.log("$ession in account", $session);
</script>

<ul>
  {#if $accounts.length > 0}
    {#each $accounts as account}
      <li>
        <a
          class="hover:underline text-blue-500"
          href="/account/{account._id}"
          rel="prefetch"
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
