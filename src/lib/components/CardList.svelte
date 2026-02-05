<script lang="ts">
  import type { Snippet } from "svelte";

  type CardListProps = {
    children: Snippet<[]>;
  };

  let { children }: CardListProps = $props();
</script>

<div
  class="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-3 gap-5 lg:gap-x-8 text-center"
>
  {@render children()}
</div>

<style>
  div {
    counter-reset: card-item;
  }
</style>
