<script>
    import { onMount, onDestroy } from 'svelte';
    import { goto, stores } from '@sapper/app';
    import { post } from "auth.js";
    import TextInput from '../components/UI/TextInput.svelte';
    import Button from '../components/UI/Button.svelte';
    import accountData from '../helpers/accountData';

    const { session } = stores();

    let email = '';
	let password = '';
    let errors = null;
    let user = [];

    async function submit() {
        const response = await post(`auth/login`, { email, password });
        // TODO handle network errors
        // errors = response.errors;
        if(errors) {
            
        }

        if (response.user) {
            $session.user = response.user;
            $session.token = response.token;
                goto("/account");
        }
    }

</script>

<svelte:head>
	<title>Login | Platform</title>
</svelte:head>

<section class="md:pt-20 md:bg-gray-100 h-full">
    <div class="flex flex-col bg-white h-full md:h-auto md:w-440px md:mx-auto pt-12 md:rounded md:overflow-hidden md:shadow-2">
        <div class="mt-12 md:mt-0 flex flex-col items-center">
            <img class="w-120" src="/Platform.svg" alt="Platform Login Logo" loading="lazy" width="120">
            <h2 class="my-8">Sign in to continue to Platform.</h2>
        </div>
        <form class="mx-6 md:mb-16" on:submit|preventDefault={submit}>
            <div class="mb-4">
                <TextInput
                        type="email"
                        placeholder="Email"
                        ariaLabel="email"
                        value={email}
                        on:input={event => (email = event.target.value)}
                    />
            </div>
            <div>
                <TextInput
                        controlType="password"
                        type="password"
                        placeholder="Password"
                        ariaLabel="password"
                        value={password}
                        on:input={event => (password = event.target.value)}
                    />
            </div>
            <div class="flex items-center justify-between mt-8">
                <div class="btn-item">
                    <Button 
                        mode="link"
                        classes="text-blue-500 text-sm"
                        href="/forgot"
                        >FORGOT PASSWORD?</Button>
                </div>
                <div class="btn-item">
                    <Button 
                        mode="primary"
                        type="button" 
                        disabled={!email || !password}
                        on:click={submit}
                        >Login</Button>
                </div>
            </div>
        </form>
        <div class="flex justify-center flex-1 items-end mb-4 md:hidden">
            <Button 
                mode="link"
                classes="text-gray-300 text-xs mx-2"
                href="/terms"
                >Terms</Button>
            <Button 
                mode="link"
                classes="text-gray-300 text-xs mx-2"
                href="/privacy"
                >Privacy</Button>
        </div>
    </div>
    <div class="hidden md:flex md:justify-center md:flex-1 md:items-end md:mt-6">
        <Button 
            mode="link"
            classes="text-gray-300 text-xs mx-2"
            href="/terms"
            >Terms</Button>
        <Button 
            mode="link"
            classes="text-gray-300 text-xs mx-2"
            href="/privacy"
            >Privacy</Button>
    </div>
</section>