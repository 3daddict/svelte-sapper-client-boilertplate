<script>
    export let controlType = null;
    export let id;
    export let label;
    export let placeholder;
    export let ariaLabel;
    export let rows = null;
    export let value;
    export let type = 'text';
    export let valid = true;
    export let validityMessage = "";
    export let togglePassword = true;
    export let disabled = false;

    let touched = false;

    function toggleInputType(){
      togglePassword = !togglePassword;
    }
</script>

<style>
  .input-container {
    position: relative;
  }

  input {
    width: 100%;
    margin: 8px auto;
    padding: 15px 0 15px 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    box-shadow: 0 0 0 1pt #FFF;
  }

  input::placeholder {
    color: #9E9E9E
  }

  input:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 0 1pt #117BCC;
    border: 1px solid #117BCC;
  }

  input:disabled {
    color: #e0e0e0;
  }

  .label {
    position:absolute;
    top:-2px;
    left:17px;
    font-size: 12px;
    color: #117BCC;
    background-color:white;
    padding:0 6px;
  }

  .hide {
    display: none;
  }

  span {
    position: absolute;
    right: 8px;
    top: 25px;
    cursor: pointer;
  }

  i {
    color: rgba(0, 0, 0, 0.38);
    user-select: none;
  }

  .banned {
    position: absolute;
    right: 19px;
    top: 28px;
    height: 15px;
    width: 0px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.38);
    border-right: 3px solid rgba(0, 0, 0, 0.38);
    transform: skew(45deg);
    cursor: pointer;
    user-select: none;
  }

  .invert {
    right: 19px;
    top: 25px;
    height: 15px;
    width: 0px;
    border-bottom: 6px solid #FFF;
    border-right: 6px solid #FFF;
  }

</style>

<div class="form-control">
  {#if label}
    <label for="{id}">{label}</label>
  {/if}
  {#if controlType === "textarea"}
      <textarea class:invalid="{!valid && touched}" rows="{rows}" id="{id}" placeholder="{touched ? '' : placeholder}" aria-label="{ariaLabel}" bind:value on:focus={() => touched = true} on:focusout={() => touched = false} />
      <label class="{touched ? 'label' : 'hide'}" for="{id}">{placeholder}</label>
  {:else}
      <div class="input-container">
          {#if controlType === "password"}
            <input class:invalid="{!valid & touched}" type="{togglePassword ? 'password' : 'text'}" id="{id}" placeholder="{touched ? '' : placeholder}" aria-label="{ariaLabel}" value={value} on:input on:focus={() => touched = true} on:focusout={() => touched = false} />
            <label class="{touched ? 'label' : 'hide'}" for="{id}">{placeholder}</label>
            <span on:click={toggleInputType}><i class="material-icons-outlined">remove_red_eye</i></span>
            <div class="{togglePassword ? '' : 'banned invert'}"  on:click={toggleInputType}></div>
            <div class="{togglePassword ? '' : 'banned'}"  on:click={toggleInputType}></div>
          {:else}
            <input class:invalid="{!valid & touched}" type="{type}" id="{id}" placeholder="{touched ? '' : placeholder}" aria-label="{ariaLabel}" value={value} on:input on:focus={() => touched = true} on:focusout={() => touched = false} disabled="{disabled ? 'disabled' : ''}" />
            <label class="{touched ? 'label' : 'hide'}" for="{id}">{placeholder}</label>
          {/if}
      </div>
  {/if}
  {#if validityMessage && !valid && touched}
      <p class="error-message">{validityMessage}</p>
  {/if}
</div>
