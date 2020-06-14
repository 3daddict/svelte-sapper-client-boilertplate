<script context="module">
import * as api from 'api.js';

  export async function preload({}, { user, token }) {
    console.log('Server Side User', user)
    console.log('Server Side Token', token)
    const projects = await api.get(`projects`, token)
        .then((response) => {
            console.log('PROJECTS:', response)
            return response.data;
        })
        .catch(error => console.log('error', error));
		
  }
</script>

<script>
    import { onMount, onDestroy } from 'svelte';
    import { stores } from '@sapper/app';
    import { post } from 'auth.js';

    const { session } = stores();
    console.log('client-side user:', $session.user);

    let projects;
    let inProgress;
    let errors;

    onMount(async () => {
		
	});
    
    onDestroy(() => {
		
    });
    

</script>

<style>
    div.header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 24px;
        padding: 32px 0 0;
    }

    h1 {
        font-size: 34px;
        letter-spacing: 0.24px;
        align-self: center;
        margin: 0;
    }
    i {
        color: #757575;
        margin-top: 8px;
        cursor: pointer;
    }

    hr {
        margin: 24px;
        border: 1px solid #E0E0E0;
    }

    .hr-break {
        margin-top: 48px;
    }

    h2 {
        font-size: 20px;
        letter-spacing: 0.24px;
        margin: 0 0 8px 24px;
    }

    /* a {
        text-decoration: none;
    } 
    
    .card {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow: hidden;
      box-shadow: 0px 1px 3px #cccccc;
      border-radius: 8px;
      margin: 16px 24px;
      background: #FFF;
    }

    .description {
        display: flex;
        flex-direction: row;
        padding: 16px 24px;
    }

    .card-image {
        background-image: url('/no-image.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        min-width: 80px;
        min-height: 80px;
        border-radius: 4px;
    }

    h3 {
        margin: 0 auto 6px 8px;
    }

    p {
        margin: 0 0 0 8px;
        color: #666666;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .fixedWidth {
    max-width: 100%;
    } */
</style>

<div class="header">
    <h1>Your Plateform Projects</h1>
    <i class="material-icons-outlined">settings</i>
</div>

<hr />

<h2>Projects</h2>

<pre>{JSON.stringify($projects, null, 2)}</pre>

<!-- {#each Object.keys($projects) as key}
    <p key={key}>{$projects[key]}</p>
{/each} -->


<!-- {#each $projects as project}
    <a href=".">
        <div class="card fixedWidth">
            <div class="description">
                <div class="card-image" />
                <div class="card-copy">
                    <h3>{project.project}</h3>
                    <p>{project._id}</p>
                </div>
            </div>
        </div>
    </a>
{/each} -->