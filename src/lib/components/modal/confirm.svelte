<script>
  import { fly, fade } from 'svelte/transition'
  import { createEventDispatcher, onMount } from 'svelte';
  export let themeColor = 200
  export let confirmTitle = 'Confirm'
  export let cancelTitle = 'Cancel'
  let showDialog = false

const dispatch = createEventDispatcher();

const handlelDeleteClick = () => {
  dispatch('delete');
}
  
  let functionToCall = {
    func: null,
    args: null
  }
  function callFunction () {
    showDialog = false
    functionToCall['func'](...functionToCall['args'])
  }
  function confirm (func, ...args) {
    functionToCall = {func, args}
    showDialog = true
  }
</script>

<slot confirm={confirm}></slot>

{#if showDialog}
  <div
    class="overlay"
    in:fade="{{ duration: 200 }}"
    out:fade="{{ delay: 200, duration: 200 }}"
  ></div>
  <div
    class="confirm-dialog"
    in:fly="{{
      y: -10,
      delay: 200,
      duration: 200
    }}"
    out:fly="{{
      y: -10,
      duration: 200
    }}"
  >
    <div class="message-section">
      <span class="message-title">
        <slot name="title">
          Are you sure you want to perform this action?
        </slot>
      </span>
      <span class="message-description">
        <slot name="description">
          This action can't be undone!
        </slot>
      </span>
    </div>
    <div
      class="actions"
      style="background: hsl({themeColor}, 30%, 97%)"
    >
      <button
        class=" text-[#5B7AA3] tracking-[1px] leading-none font-semibold text-lg pr-4"
        style="
          --cancel-btn-color: hsl({themeColor}, 40%, 50%);
          --cancel-btn-color-hover: hsl({themeColor}, 40%, 55%);
        "
        on:click="{() => showDialog = false }"
      >
        <slot name="cancel">
          {cancelTitle}
        </slot>
      </button>
      <button
        class="leading-none rounded-[10px] bg-[#5B7AA3] tracking-[1px] w-[90px] h-[42px] p-2 text-base text-white font-normal"
        style="
          --confirm-btn-bg: hsl({themeColor}, 40%, 50%);
          --confirm-btn-bg-hover: hsl({themeColor}, 40%, 55%);
        "
        on:click="{() => {
						 handlelDeleteClick();
            callFunction ()
					}}"
      >
        <slot name="confirm">
          {confirmTitle}
        </slot>
      </button>
    </div>
  </div>
{/if}

<style>
.message-title {
  font-size: 22px;
  font-weight: 500;
  display: block;
  color: hsl(0, 0%, 20%);
  line-height: 1.2;
}
.message-description {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: hsl(0, 0%, 30%);
  line-height: 1.4;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin: 25px -40px -30px;
  padding: 15px 20px;
  border-radius: 0 0 3px 3px;
}
.confirm-dialog {
  font-family: sans-serif;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 40px;
  border-radius: 6px;
  background: #FFF;
  max-width: 500px;
  width: calc(100% - 20px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  user-select: none;
  z-index: 998;
  background: hsla(0, 0%, 0%, 80%);
}
.confirm-button {
  background: hsl(200, 40%, 50%);
  background: var(--confirm-btn-bg);
  margin-left: 10px;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  color: hsl(0, 0%, 95%);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
.confirm-button:hover {
  background: hsl(200, 40%, 55%);
  background: var(--confirm-btn-bg-hover);
}
.cancel-button {
  border: none;
  outline: none;
  background: transparent;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  color: hsl(200, 40%, 50%);
  color: var(--cancel-btn-color);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
.cancel-button:hover {
  color: hsl(200, 40%, 55%);
  color: var(--cancel-btn-color-hover);
}
</style>