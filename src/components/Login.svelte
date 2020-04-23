<script>
  import { goto, stores } from "@sapper/app";
  import { post } from "auth.js";

  const { session } = stores();

  let email = "";
  let password = "";

  // Function to call api to login a user
  async function submit(event) {
    const response = await post(`auth/login`, { email, password });

    // TODO handle network errors
    // errors = response.errors;

    if (response.user) {
      $session.user = response.user;
      goto("/dashboard");
    }
  }
</script>

<style>

</style>

<svelte:head>
  <title>Login</title>
</svelte:head>

<form on:submit|preventDefault={submit}>
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      type="email"
      placeholder="Email"
      bind:value={email} />
  </fieldset>
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      type="password"
      placeholder="Password"
      bind:value={password} />
  </fieldset>
  <button
    class="btn btn-lg btn-primary pull-xs-right"
    type="submit"
    disabled={!email || !password}>
    Login
  </button>
</form>
