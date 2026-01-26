<script lang="ts">
  import { Button } from "$lib/components";
  import type { MouseEventHandler } from "svelte/elements";
  import { fade, fly, scale, slide } from "svelte/transition";

  let counter = $state(0);

  const addCounter = () => counter++;
  const subtractCounter = () => {
    if (counter > 0) counter--;
  };
</script>

{#snippet CounterButton({
  text,
  onclick,
}: {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
})}
  <Button {onclick}>
    <span class="size-4 lg:size-6 inline-block font-bold"> {text} </span>
  </Button>
{/snippet}

<div class="inline-flex gap-4 mb-4">
  {@render CounterButton({ text: "-", onclick: subtractCounter })}

  <Button>
    <span class="text-md lg:text-xl">
      Registrar
      {#key counter}
        <strong class="inline-block" in:fly={{ duration: 500, y: -15 }}
          >{counter}</strong
        >
      {/key}

      {counter > 1 ? "orações" : "oração"}
    </span>
  </Button>

  {@render CounterButton({ text: "+", onclick: addCounter })}
</div>
