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
  import * as api from "api.js";
  import { stores } from '@sapper/app';
  import { accountStore } from '../store/accountStore';
  import Nav from '../components/Nav.svelte';
  const { session } = stores();

  export let segment;

  if($session.token && $session.user) {
    updateStore($session.token, $session.user._id);
  }
  
  async function updateStore(token, userID) {
      const res = await api.get(`accounts/`, token, userID);
      const accountData = await res.data;

      if (!accountData) {
          return console.log('No Account Data Returned 😭')
      }

      return accountStore.set(accountData);
  }
</script>

<Nav {segment}/>

<main class="h-nav-mobile w-screen md:h-nav-desktop">
	<slot></slot>
</main>