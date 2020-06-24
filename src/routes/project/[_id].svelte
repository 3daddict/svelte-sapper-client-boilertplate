<script context="module">
  import * as api from "api.js";
  // preload account data by id
  export async function preload(page, session) {
    //console.log("page in [_id.svelte]", page);
    //console.log("session in [_id.svelte]", session);

    // _id variable from page params
    const { _id } = page.params;
    // call api for account data by id
    const res = await api.get(`projects/${_id}`,session.token,session.user._id);
    const projectData = res.data;
    // console log for prefetch verication comment out for production
    //console.log(projectData.projectName + " Loaded...");
    return { projectData };
  }
</script>

<script>
  export let projectData;
  // assign dynamic variable to project data
  $: projects = projectData;
</script>

<!-- <svelte:head>
  <title>{projectData.projectName}</title>
</svelte:head> -->

<div>Project Data Will go here...</div>
