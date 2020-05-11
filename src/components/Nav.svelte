<script>
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
  nav,
  ul {
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
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #117bcc;
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
  <img
    class="logo"
    src="https://picsum.photos/seed/picsum/100/50"
    alt="Project Login Logo"
    loading="lazy"
    width="120" />
  <ul>
    <li>
      <a
        class="primary-link"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        home
      </a>
    </li>
    {#if !$session.user}
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'register' ? 'page' : undefined}
          href="register">
          Register
        </a>
      </li>
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'login' ? 'page' : undefined}
          href="login">
          Login
        </a>
      </li>
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'forgot' ? 'page' : undefined}
          href="forgot">
          Forgot
        </a>
      </li>
    {/if}
    {#if $session.user}
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'dashboard' ? 'page' : undefined}
          href="dashboard">
          Dashboard
        </a>
      </li>
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'projects' ? 'page' : undefined}
          href="projects"
          rel="prefetch">
          Projects
        </a>
      </li>
      <li>
        <a
          class="primary-link"
          aria-current={segment === 'logout' ? 'page' : undefined}
          href="."
          on:click={logout}>
          Logout
        </a>
      </li>
    {/if}
  </ul>
</nav>
