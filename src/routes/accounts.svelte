<script>
  import { accountStore } from "../store/accountStore";

</script>

<ul>
  {#if $accountStore.length > 0}
    {#each $accountStore as account}
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
