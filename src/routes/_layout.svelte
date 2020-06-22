<script context="module">
  export async function preload(page, session) {
    const { user, token } = session;
    const { path } = page;

    // Protected Routes
    const loginRoutes = ["/dashboard", "/settings", "/accounts", "/account"];
    // Public Routes
    const logoutRoutes = ["/login", "/register", "/forgot"];

    if (user && logoutRoutes.includes(path)) {
      return this.redirect(302, "accounts");
    } else if (!user && loginRoutes.includes(path)) {
      return this.redirect(302, "login");
    }
  }
</script>

<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import * as api from "api.js";
  import { stores } from "@sapper/app";
  import { accounts } from "../store/accounts";
  import Nav from "../components/Nav.svelte";

  const { session } = stores();

  export let segment;

  afterUpdate(async () => {
    if ($session.user._id && $accounts.length === 0) {
      console.log("this is only once done to avoid persisting data");
      const res = await api.get(`accounts/`, $session.token, $session.user._id);
      const accountData = await res.data;
      if (!accountData) {
        return console.log("No Account Data Returned 😭");
      }
      accounts.setupAccounts(accountData);
    }
  });
</script>

<Nav {segment} />
<main class="h-nav-mobile w-screen md:h-nav-desktop">
  <slot />
</main>
