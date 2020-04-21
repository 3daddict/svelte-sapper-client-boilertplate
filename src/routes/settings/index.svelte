<script>
	import { goto, stores } from '@sapper/app';
	import SettingsForm from './_SettingsForm.svelte';

	let inProgress;
	let errors;

	const { session } = stores();

	async function logout() {
		
	}

	async function save(event) {
		inProgress = true;

		// update function

		inProgress = false;
	}
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<div class="settings-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">

				<h1 class="text-xs-center">Your Settings</h1>

				<SettingsForm on:save={save} {...$session.user} {inProgress}/>

				<hr />

				<button class="btn btn-outline-danger" on:click={logout}>
					Or click here to logout.
				</button>
			</div>
		</div>
	</div>
</div>