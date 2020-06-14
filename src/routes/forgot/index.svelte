<script>
    import { onMount, onDestroy } from 'svelte';
    import { goto, stores } from '@sapper/app';
    import { post } from "auth.js";
    import { isEmail } from '../../helpers/validate';

    import TextInput from '../../components/UI/TextInput.svelte';
    import Button from '../../components/UI/Button.svelte';

    const { session } = stores();

    onMount(() => {
        if (window.innerWidth > 768) {
            document.querySelector("#sapper > main").style.background = '#F6F6F6';
        } else {
            document.querySelector("#sapper > main").style.background = '#FFFFFF';
        }
    });
    
    onDestroy(() => {
		document.querySelector("#sapper > main").style.background = '#FFFFFF';
	});

    let email = '';
	let password = '';
    let errors = '';
    let success = '';
    let disabled = false;

    async function submit() {
        console.log('Request Submitted')
        let emailCheck = isEmail(email);
        if (!emailCheck) {
            return errors = "Please enter a valid email address"
        }
        const response = await post(`auth/forgot`, { email });
        console.log('RESPONSE:', response);

        if (response.success === false) {
            return errors = response.error;
        }

        if (response.success === true && response.data === "Email sent") {
            document.getElementById('errorMsg').style.display = "none";
            disabled = true;
            success = "Got it, please check your email."
        }
    }

</script>

<style>
    .top-margin {
        padding-top: 4rem;
        background: #F6F6F6;
    }
    .card-wrapper {
        width: 100%;
        margin: 0 auto;
        background: #FFF;
    }
    .card-container {
        margin: 0 24px;
        background: #FFF;
    }
    .logo-container {
        display: flex;
        flex-direction: column;
    }
    .logo {
        width: 120px;
        margin-top: 48px;
        margin-bottom: 16px;
        align-self: center;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
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

    .error {
        color: #D93025;
        font-size: 12px;
        margin: 0;
    }

    .success {
        color: #000;
        font-size: 12px;
        margin: 0;
    }

    @media (min-width: 769px) {
        .card-wrapper {
                width: 440px;
                height: 440px;
                box-shadow: 0px 1px 3px #00000066;
                border-radius: 8px;
            }
    }
</style>

<div class="top-margin"></div>
<div class="card-wrapper">
    <div class="card-container">
        <div class="logo-container">
            <img class="logo" src="https://picsum.photos/seed/picsum/200/200" alt="Platform Login Logo" loading="lazy" width="120">
            <h2>Enter your email to reset your password.</h2>
        </div>
        <form on:submit|preventDefault={submit}>
            <div class="form-item">
                <TextInput
                        type="email"
                        placeholder="Email"
                        ariaLabel="email"
                        value={email}
                        on:input={event => (email = event.target.value)}
                        disabled={disabled}
                    />
            </div>
            <div class="btn-group">
                <p class="error" id="errorMsg">{errors}</p>
                <p class="success">{success}</p>
                <div class="btn-item">
                    <Button 
                        mode="button"
                        color="primary"
                        type="button" 
                        disabled={!email || disabled === true}
                        on:click={submit}
                        >Continue</Button>
                </div>
            </div>
        </form>
        
    </div>
</div>