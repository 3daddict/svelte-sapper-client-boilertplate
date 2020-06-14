<script context="module">
    export function preload(page, { user }) {
		// console.log('module user:', user);
        return { user };
    };
</script>
<script>
	import { stores } from '@sapper/app';

	const { session } = stores();
	
</script>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
	h1, figure {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

<<<<<<< HEAD
=======
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

>>>>>>> dev
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
<<<<<<< HEAD
	<title>Platform | Pure Data Pwnage</title>
</svelte:head>

<div class="wrapper">
	<h1 class="bg-purple-700 text-white hover:bg-blue-500" >Great success!</h1>

	<figure>
		<img class="mx-auto max-w-sm w-auto" alt='Borat' src='great-success.png'>
=======
	<title>Platform</title>
</svelte:head>

<div class="wrapper">
	<h1>Great success!</h1>

	<figure>
		<img alt='Borat' src='great-success.png'>
>>>>>>> dev
		<figcaption>HIGH FIVE!</figcaption>
	</figure>

</div>
