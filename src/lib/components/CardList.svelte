<script lang="ts">
  import type { Snippet } from "svelte";

  type CardListProps = {
    children: Snippet<[]>;
  };

  let { children }: CardListProps = $props();
</script>

<div class="flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-x-14">
  {@render children()}
</div>

<style>
  div {
    counter-reset: card-item;
  }
</style>
