<script>
  import { onMount } from 'svelte';
  import { goto, stores } from "@sapper/app";
  import { post } from "auth.js";
  import Sidebar from './UI/Sidebar.svelte';
  import { accountStore } from "../store/accountStore";
  const { page, session } = stores();
  
  export let segment;
  export let activeName;
  let active = true;

  async function logout() {
    await post(`auth/logout`);
	session.set({ token: null, user: null })
	accountStore.set([]);
    goto("/");
  }

</script>

<style>

</style>

<nav class="bg-gray-800 text-white md:py-3">
	
		{#if $session.user}
			<div class="md:hidden flex align-middle items-center justify-between px-6 py-2">
				<div>
					<div class="cursor-pointer" on:click="{() => active = !active}"><i class="material-icons-outlined align-middle">menu</i></div>
				</div>
				<div on:click={logout}>
					<p class="pl-2">Logout</p>
				</div>
			</div>
		{:else}
			<div class="md:hidden flex flex-row-reverse align-middle items-center justify-between px-6 py-2">
				<div>
					<a class="flex align-middle items-center" href="/login" aria-current='{segment === "login" ? "page" : undefined}' >
						<span class="pl-2">Login</span>
					</a>
				</div>
				<div on:click={logout}>
					<p class="pl-2">Logout</p>
				</div>
			</div>
		{/if}
		
	
	<div class="hidden md:flex flex-row align-middle items-center justify-between">
		<div class="flex align-middle items-center">
			<a href="/" aria-current='{segment === undefined ? "page" : undefined}' on:click={logout}>
				<p class="pl-2">Logout</p>
			</a>
			<span class="h-10 w-px bg-gray-900 align-middle mx-6"></span>
			{#if $session.user && $page.path.includes('/account/')}
				<div class="cursor-pointer" on:click="{() => active = !active}">{activeName ? activeName : "DEBUG"}<i class="material-icons-outlined align-middle pl-3">menu</i></div>
			{/if}
			{#if $session.user}
			<div class="cursor-pointer" on:click="{() => active = !active}">Account Name<i class="material-icons-outlined align-middle pl-3">menu</i></div>
			{/if}
		</div>
		{#if $session.user}
			<div>
				<a class="flex align-middle items-center pr-6" href=".">
					<img class="w-6 rounded-full" src="{$session.user.image}" alt="profile avatar" />
					<span class="pl-2">{$session.user.name}</span>
				</a>
			</div>
		{:else}
			<div>
				<a class="flex align-middle items-center pr-6" href="/login" aria-current='{segment === "login" ? "page" : undefined}' >
					<span class="pl-2">Login</span>
				</a>
			</div>
		{/if}
	</div>
</nav>
<Sidebar bind:toggle={active} />