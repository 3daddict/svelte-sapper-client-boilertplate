<script context="module">
  export async function preload(page, session) {
	const { user , token } = session;
	const { path } = page;

	// Protected Routes
<<<<<<< HEAD
	const loginRoutes = ["/dashboard", "/settings","/projects", "/accounts" , "/account"];
=======
	const loginRoutes = ["/dashboard", "/settings","/projects"];
>>>>>>> dev
	// Public Routes
    const logoutRoutes = ["/login", "/register", "/forgot"];

    if (user && logoutRoutes.includes(path)) {
      return this.redirect(302, "accounts");
    } else if (!user && loginRoutes.includes(path)) {
      return this.redirect(302, "login");
    }

    return { user, token };
  }
</script>
<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<<<<<<< HEAD
<Nav {segment}/>

<main class="h-nav-mobile w-screen md:h-nav-desktop">
=======
<style>
	main {
		position: relative;
		background: #F6F6F6;
		height: calc(100vh - 49px);
		width: 100%;
	}

	@media (min-width: 600px) {

	}
</style>

<Nav {segment}/>

<main>
>>>>>>> dev
	<slot></slot>
</main>