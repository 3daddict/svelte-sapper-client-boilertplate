<script context="module">
  export async function preload(page, session) {
    const { user, token } = session;
    const { path } = page;

    // Protected Routes
    const loginRoutes = ["/dashboard", "/settings", "/accounts", "/account"];
    // Public Routes
    const logoutRoutes = ["/login", "/register", "/forgot"];

    // redirect if logged in and redirect if logged out
    if (user && logoutRoutes.includes(path)) {
      return this.redirect(302, "accounts");
    } else if (!user && loginRoutes.includes(path)) {
      return this.redirect(302, "login");
    }
  }
</script>

<script>
  import { afterUpdate } from "svelte";
  import { stores } from "@sapper/app";
  import { accounts } from "../store/accounts";
  import * as api from "api.js";
  import Nav from "../components/Nav.svelte";

  const { session } = stores();

  export let segment;

  // populate the accounts store
  // afterUpdate is used here to avoid persisting data
  afterUpdate(async () => {
    // check for session user and that store is empty
    if ($session.user._id && $accounts.length === 0) {
      // call api for users store data
      const res = await api.get(`accounts/`, $session.token, $session.user._id);
      const accountData = await res.data;
      // handle api data error
      if (!accountData) {
        return console.log("Could not fetch data from api...");
      }
      // set store data from api response
      accounts.setupAccounts(accountData);
      console.log("Store Data Retrieved and Set...");
    }
  });
</script>

<Nav {segment} />
<main class="h-nav-mobile w-screen md:h-nav-desktop">
  <slot />
</main>
