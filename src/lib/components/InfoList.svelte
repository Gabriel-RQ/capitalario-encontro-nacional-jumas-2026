<script lang="ts">
  type InfoListProps = {
    items: string[];
  };

  let { items }: InfoListProps = $props();
</script>

<div class="flex flex-col gap-4 text-primary">
  {#each items as item}
    <span
      class="inline-flex items-center gap-3 px-4 py-2 rounded-[80px] bg-background rounded-tr-none before:rounded-full before:flex before:items-center before:justify-center before:size-12 before:bg-primary before:font-bold before:text-background before:text-lg lg:before:text-3xl shadow-lg"
    >
      {item}
    </span>
  {/each}
</div>

<style>
  div {
    counter-reset: list-item;
  }

  span::before {
    content: counter(list-item);
    counter-increment: list-item;
  }
</style>
