<script>
  import { onMount, onDestroy } from "svelte";
  import { goto, stores } from "@sapper/app";
  import { post } from "auth.js";
  import TextInput from "../../components/UI/TextInput.svelte";
  import Button from "../../components/UI/Button.svelte";

  const { session } = stores();

  onMount(() => {
    if (window.innerWidth > 768) {
      document.querySelector("#sapper > main").style.background = "#F6F6F6";
    } else {
      document.querySelector("#sapper > main").style.background = "#FFFFFF";
    }
  });

  onDestroy(() => {
    document.querySelector("#sapper > main").style.background = "#FFFFFF";
  });

  let email = "";
  let password = "";
  let errors = null;

  async function submit() {
    const response = await post(`auth/login`, { email, password });
    // TODO handle network errors
    // errors = response.errors;
    if (errors) {
    }

    if (response.user) {
      //! I think this is doing nothing!!!
      // $session.user = response.user;
      // $session.token = response.token;
      goto("/dashboard");
    }
  }
</script>

<style>
  .top-margin {
    padding-top: 4rem;
    background: #f6f6f6;
  }
  .card-wrapper {
    display: flex;
    width: 100%;
    margin: 0 auto;
    background: #fff;
  }
  .card-container {
    width: 100%;
    margin: 0 24px;
    background: #fff;
  }
  .logo-container {
    text-align: center;
  }
  .logo {
    width: 120px;
    margin-top: 48px;
    margin-bottom: 16px;
    align-self: center;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    margin: 16px auto 32px;
    align-self: center;
  }

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 24px;
  }
  .btn-item {
    align-self: center;
  }

  .link-container {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 769px) {
    .card-wrapper {
      width: 440px;
      height: 440px;
      margin: 0 auto;
      box-shadow: 0px 1px 3px #00000066;
      border-radius: 8px;
    }

    .link-container {
      position: relative;
      margin: 117px auto 0;
      text-align: center;
    }
  }
</style>

<div class="top-margin" />
<div class="card-wrapper">
  <div class="card-container">
    <div class="logo-container">
      <img
        class="logo"
        src="https://picsum.photos/seed/picsum/200/200"
        alt="Platform Login Logo"
        loading="lazy"
        width="120" />
      <h2>Sign in to continue to Plateform.</h2>
    </div>
    <form on:submit|preventDefault={submit}>
      <div class="form-item">
        <TextInput
          type="email"
          placeholder="Email"
          ariaLabel="email"
          value={email}
          on:input={event => (email = event.target.value)} />
      </div>
      <div class="form-item">
        <TextInput
          controlType="password"
          type="password"
          placeholder="Password"
          ariaLabel="password"
          value={password}
          on:input={event => (password = event.target.value)} />
      </div>
      <div class="btn-group">
        <div class="btn-item">
          <Button mode="link" color="primary-link" href="/forgot">
            FORGOT PASSWORD?
          </Button>
        </div>
        <div class="btn-item">
          <Button
            mode="button"
            color="primary"
            type="button"
            disabled={!email || !password}
            on:click={submit}>
            Login
          </Button>
        </div>
      </div>
    </form>
    <div class="link-container">
      <Button mode="link" color="secondary-link link-item" href="/terms">
        Terms
      </Button>
      <Button mode="link" color="secondary-link link-item" href="/privacy">
        Privacy
      </Button>
    </div>
  </div>
</div>
