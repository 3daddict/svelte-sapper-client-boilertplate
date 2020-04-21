<script>
	import { goto, stores } from '@sapper/app';

    export let segment;

    const { session } = stores();

    async function logout() {
        // Logout function
        
        // Remove user from session
		$session.user = null;
		goto('/');
	}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "login" ? "page" : undefined}' href='login'>login</a></li>
		<li><a aria-current='{segment === "register" ? "page" : undefined}' href='register'>register</a></li>
		<li><a aria-current='{segment === "settings" ? "page" : undefined}' href='settings'>settings</a></li>
		<li><a aria-current='{segment === "logout" ? "page" : undefined}' href='.' on:click={logout}>logout</a></li>
		<li><a aria-current='{segment === "dashboard" ? "page" : undefined}' href='dashboard'>dashboard</a></li>


	</ul>
</nav>
