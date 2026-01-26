<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type ButtonProps = {
    children: Snippet;
  } & HTMLButtonAttributes;

  let { children, ...restProps }: ButtonProps = $props();
</script>

<button {...restProps} class="relative outline-none group">
  <div
    class="size-max bg-variation-red rounded-full border-2 border-variation-red-border px-4 py-3 z-0 text-background group-active:translate-y-1.5 transition-transform duration-250 select-none cursor-pointer in-focus-visible:outline-2"
  >
    {@render children()}
  </div>
</button>

<style>
  button {
    &::before {
      content: "";
      background: var(--color-primary);
      border-radius: 9999px;
      inset: 0;
      position: absolute;
      transform: translateY(8px);
      z-index: -1;
    }

    &::after {
      content: "";
      background: var(--color-variation-orange);
      border: 2px solid var(--color-variation-orange-border);
      border-radius: 9999px;
      inset: 0;
      left: -2%;
      position: absolute;
      transform: translateY(15px);
      width: 104%;
      z-index: -2;
    }
  }
</style>
