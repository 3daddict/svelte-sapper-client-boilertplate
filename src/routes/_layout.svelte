<script context="module">
  export async function preload(page, session) {
	const { user , token } = session;
	const { path } = page;

	// Protected Routes
	const loginRoutes = ["/dashboard", "/settings","/projects"];
	// Public Routes
    const logoutRoutes = ["/login", "/register", "/forgot"];

    if (user && logoutRoutes.includes(path)) {
      return this.redirect(302, "dashboard");
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
	<slot></slot>
</main>