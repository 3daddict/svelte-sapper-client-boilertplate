<!-- <script context="module">
  import * as api from "api.js";
  export async function preload({}, { token, user }) {
    return await api.get(`accounts`, token)
      .then(response => {
        if (!response.success) {
            throw new Error("Fetching projects failed, please try again later!");
        }
        return response.data;
      })
      .then(data => {
          let legitProjects = []
          for (const i in data) {
              for (const x in data[i].accountGroup) {
                  if (data[i].accountGroup[x] === user._id) {
                    for (const n in data[i].projects) {
                        if (data[i].projects[n].projectGroup.includes(user._id)) {
                            legitProjects.push(data[i].projects[n])
                        }
                    }
                  }
              }
          }
          return { fetchedAccountData: legitProjects };
      })
      .catch(err => {
          console.log(err);
          this.error(500, "Could not fetch projects!");
      });
  }
</script> -->

<script>
  import { stores } from "@sapper/app";
  const { session } = stores();
  // fetchedAccountData is imported to the client side as props
  export let fetchedAccountData;

  let isLoading;
  let unsubscribe;
  let staticAccountId = '5ed72d8536f9d3189c115f76';

</script>

<div class="header">
    <!-- <h1>Welcome {user.name.split(' ')[0]}</h1> -->
    <p>Business is crushing today!</p>
</div>
<pre>{JSON.stringify(fetchedAccountData, null, 2)}</pre>

<!-- <hr class="hr-break" />

<h2>Development</h2>

{#each matchedData as project}
    {#if project.type === "development"}
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
    {/if}
{/each} -->
