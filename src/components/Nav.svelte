<script>
<<<<<<< HEAD
  import { onMount } from 'svelte';
  import { goto, stores } from "@sapper/app";
  import { post } from "auth.js";
  import Sidebar from './UI/Sidebar.svelte';
  const { page, session } = stores();
  
  export let segment;
  export let activeName;
  let active = true;

  async function logout() {
    await post(`auth/logout`);
	// $session.user = null;
	session.set({ token: null, user: null })
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
=======
	import { goto, stores } from "@sapper/app";
	import { post } from "auth.js";

	export let segment;

	const { session } = stores();

	async function logout() {
		await post(`auth/logout`);
		$session.user = null;
		goto("/");
	}
	  
</script>

<style>
	nav, ul {
		display: flex;
	}
	nav {
		flex-direction: column;
		align-self: center;
	}
	ul {
		justify-content: center;
		list-style-type: none;
		padding: 0;
	}
	li {
		margin: auto 1rem;
	}
	.logo {
		display: none;
		justify-content: center;
        width: 120px;
		margin: 1rem auto 0;
	}
	
	.primary-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #117BCC;
	text-decoration: none;
  }

	.primary-link:hover {
		color: #0c5e9c;
		text-decoration: underline;
	}
	@media (min-width: 769px) {
		nav {
		flex-direction: row;
		justify-content: space-between;
		}
		.logo {
			margin-top: 0;
			align-self: center;
			margin-left: 2rem;
		}
	}
</style>

<nav>
	<img class="logo" src="https://picsum.photos/seed/picsum/100/50" alt="Project Login Logo" loading="lazy" width="120">
	<ul>
		<li><a class="primary-link" aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		{#if !$session.user}
			<li><a class="primary-link" aria-current='{segment === "register" ? "page" : undefined}' href='register'>Register</a></li>
			<li><a class="primary-link" aria-current='{segment === "login" ? "page" : undefined}' href='login'>Login</a></li>
			<li><a class="primary-link" aria-current='{segment === "forgot" ? "page" : undefined}' href='forgot'>Forgot</a></li>
		{/if}
		{#if $session.user}
			<li><a class="primary-link" aria-current='{segment === "dashboard" ? "page" : undefined}' href='dashboard'>Dashboard</a></li>
			<li><a class="primary-link" aria-current='{segment === "projects" ? "page" : undefined}' href='projects'>Projects</a></li>
			<li><a class="primary-link" aria-current='{segment === "logout" ? "page" : undefined}' href='.' on:click={logout}>Logout</a></li>
		{/if}
	</ul>
>>>>>>> dev
</nav>
<Sidebar bind:toggle={active} />