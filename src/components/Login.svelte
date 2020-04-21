<script>
    import { goto, stores } from '@sapper/app';

    const { session } = stores();

    let name = '';
    let email = '';
    let password = '';
    let role = '';

    // Function to call api to login a user
    async function submit(event) {
        // Call login route and authenticate

        // add auth user to session

        // Route logged in user to Dashboard
        goto('/dashboard');
    }
</script>

<style>

</style>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form on:submit|preventDefault={submit}>
    <fieldset class="form-group">
        <input class="form-control form-control-lg" type="email" placeholder="Email" bind:value={email}>
    </fieldset>
    <fieldset class="form-group">
        <input class="form-control form-control-lg" type="password" placeholder="Password" bind:value={password}>
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right" type="submit" disabled='{!email || !password}'>
        Login
    </button>
</form>