<script context="module">
  export async function preload(page, session) {
	const { user , token } = session;
	const { path } = page;

	// Protected Routes
	const loginRoutes = ["/dashboard", "/settings", "/accounts" , "/account"];
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

<Nav {segment}/>

<main class="h-nav-mobile w-screen md:h-nav-desktop">
	<slot></slot>
</main>