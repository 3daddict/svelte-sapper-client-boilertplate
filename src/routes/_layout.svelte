<script context="module">
  export async function preload(page, session) {
    const { user } = session;
    const { path } = page;

    const loginRoutes = ["/dashboard", "/settings"];
    const logoutRoutes = ["/login", "/register"];

    if (user && logoutRoutes.includes(path)) {
      return this.redirect(302, "dashboard");
    } else if (!user && loginRoutes.includes(path)) {
      return this.redirect(302, "login");
    }

    return { user };
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
