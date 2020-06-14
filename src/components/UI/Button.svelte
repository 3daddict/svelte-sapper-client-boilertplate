<script>
<<<<<<< HEAD
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
=======
    export let type = "button";
    export let href = null;
    export let mode = null;
    export let color = null;
    export let disabled = false;
</script>

<style>

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .primary {
    background-color: #117BCC;
    color: #FFFFFF;
  }

  .primary:hover,
  .primary:focus {
    background: #2B95E6;
    box-shadow: 0px 1px 3px rgba(43, 149, 230, 0.45);
    outline: 0;
  }

  .primary:active {
    background: #0062B3;
  }

  .primary:disabled,
  .primary:disabled:hover,
  .primary:disabled:active {
    background: #E0E0E0;
    color: #BDBDBD;
    box-shadow: none;
    cursor: not-allowed;
  }

  .primary-outline {
    border: 1px solid #2B95E6;
    background-color: #FFF;
    color: #2B95E6;
  }

  .primary-outline:hover,
  .primary-outline:focus {
    border: 1px solid #0062B3;
    color: #0062B3;
  }

  .primary-outline:active {
    border: 1px solid #2B95E6;
    background: #C5E0F4;
  }

  .primary-outline:disabled,
  .primary-outline:disabled:hover,
  .primary-outline:disabled:active {
    background: #E0E0E0;
    color: #BDBDBD;
    box-shadow: none;
    cursor: not-allowed;
  }

  .primary-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #117BCC;
    text-decoration: none;
  }

  .primary-link:hover {
    color: #0c5e9c;
  }

  .secondary-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #9e9e9e;
    text-decoration: none;
    margin: 0 8px;
  }

  .secondary-link:hover {
    color: #757575;
  }

</style>

{#if href}
    <a class="{color}" {href}>
      <slot />
    </a>
{:else}
    <button class="{mode} {color}" type="{type}" on:click {disabled} >
      <slot />
    </button>
{/if}
>>>>>>> dev
