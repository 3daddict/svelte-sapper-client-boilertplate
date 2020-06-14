<script context="module">
    import * as api from "api.js";

	export async function preload(page, session)  {
		//console.log('page', page);
		//console.log('session', session);
		const { _id } = page.params;

		const res = await api.get(`accounts/`, session.token, session.user._id)
		const accountData = res.data;
		
		return { accountData }
	}
</script>

<script>
	export let accountData;	
</script>

<ul>
{#if accountData}
	 {#each accountData as account}
        <li>
            <a class="hover:underline text-blue-500" href="/account/{account._id}" id="{account._id}">{account.accountName}</a>
        </li>
    {:else}
        <li>
            <p>No Accounts found or call has not been made</p>
        </li>
    {/each}
{/if}
</ul>