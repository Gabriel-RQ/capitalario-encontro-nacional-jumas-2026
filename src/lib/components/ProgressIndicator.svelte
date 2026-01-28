<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";

  type ProgressIndicatorProps = {
    objective: number;
    current: number;
  };

  let { objective, current }: ProgressIndicatorProps = $props();

  const formatter = new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "long",
  });

  let objectiveDescriptor = $derived(formatter.format(objective));
</script>

<div
  id="container"
  class="relative rounded-full bg-secondary px-6 py-3 lg:px-9 lg:py-6 flex flex-col border-variation-dark-blue border-4 text-background space-y-2 lg:space-y-6 w-full max-w-209 select-none"
>
  <p class="font-bold text-lg lg:text-3xl leading-5">
    Contribua com o capital de graças
  </p>

  <div
    class="text-sm lg:text-xl flex items-center gap-1 lg:gap-3 justify-between"
  >
    <span class="font-light text-nowrap">
      <span class="font-bold">JUMAS</span>BR
    </span>

    <ProgressBar value={current} max={objective} class="flex-1" />

    <span class="font-bold text-nowrap">
      {objectiveDescriptor}
    </span>
  </div>
</div>

<style>
  #container::before {
    background: var(--color-variation-dark-blue);
    border: 2px solid var(--color-secondary);
    border-radius: 9999px;
    content: "";
    inset: 0;
    left: -2px;
    position: absolute;
    transform: translateY(10px);
    width: calc(100% + 4px);
    z-index: -1;
  }
</style>
