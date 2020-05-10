<script>
  import { goto, stores } from "@sapper/app";
  import { post } from "auth.js";

  const { session } = stores();

  let name = "";
  let email = "";
  let password = "";
  let role = "user";

  async function submit(event) {
    const response = await post(`auth/register`, {
      name,
      email,
      password,
      role
    });

    if (response.user) {
      $session.user = response.user;
      goto("/");
    }
  }
</script>

<style>

</style>

<form on:submit|preventDefault={submit}>
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      type="text"
      placeholder="Full Name"
      bind:value={name} />
  </fieldset>
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      type="text"
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
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      type="role"
      placeholder="Role"
      bind:value={role} />
  </fieldset>
  <button
    class="btn btn-lg btn-primary pull-xs-right"
    disabled={!name || !email || !password || !role}>
    Sign up
  </button>
</form>
