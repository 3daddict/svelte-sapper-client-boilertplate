<script>
  export let type = "button";
  export let mode = null;
  export let href = null;
  export let classes = null;
  export let disabled = false;
</script>

{#if href}
    <a class="{classes}" {href}>
      <slot />
    </a>
{:else if mode === "primary"}
    <button class="
    py-2 px-4 
    text-white 
    bg-blue-500 
    hover:bg-blue-200 
    focus:bg-blue-200
    active:bg-blue-900 
    rounded shadow" 
    type="{type}" 
    on:click 
    {disabled} >
      <slot />
    </button>
{:else}
    <button class="{classes}" type="{type}" on:click {disabled} >
        <slot />
      </button>
{/if}

<style>
button:focus {
    outline: none;
}
</style>
