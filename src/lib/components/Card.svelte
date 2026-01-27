<script lang="ts">
  import type { Snippet } from "svelte";

  type CardProps = {
    children: Snippet<[]>;
  };

  let { children }: CardProps = $props();
</script>

<div
  class="flex flex-col border-2 items-center border-secondary rounded-[60px] rounded-tr-none px-6 py-4 before:size-15 lg:before:size-20 before:flex before:items-center before:justify-center before:bg-secondary before:rounded-full before:text-background before:font-bold before:text-lg lg:before:text-3xl before:border-variation-light-blue before:border-2 text-secondary gap-4 bg-background lg:min-h-64"
>
  <span class="text-base lg:text-xl">
    {@render children()}
  </span>
</div>

<style>
  div::before {
    content: counter(card-item);
    counter-increment: card-item;
  }
</style>
