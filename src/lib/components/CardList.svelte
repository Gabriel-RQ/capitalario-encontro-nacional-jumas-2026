<script lang="ts">
  import type { Snippet } from "svelte";

  type CardListProps = {
    children: Snippet<[]>;
  };

  let { children }: CardListProps = $props();
</script>

<div class="flex flex-col gap-5">
  {@render children()}
</div>

<style>
  div {
    counter-reset: card-item;
  }
</style>
