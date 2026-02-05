<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components";
  import type { MouseEventHandler } from "svelte/elements";
  import { fly } from "svelte/transition";

  let counter = $state(1);
  let isSubmitting = $state(false);

  const addCounter = () => {
    if (counter >= 50) return;
    counter++;
  };
  const subtractCounter = () => {
    if (counter > 1) counter--;
  };
</script>

{#snippet CounterButton({
  text,
  onclick,
}: {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
})}
  <Button {onclick} disabled={isSubmitting}>
    <span
      class="size-4 lg:size-12 lg:text-2xl flex items-center justify-center font-bold"
    >
      {text}
    </span>
  </Button>
{/snippet}

<form
  action="?/counter"
  method="POST"
  class="self-center"
  use:enhance={() => {
    return async ({ update }) => {
      isSubmitting = true;
      await update({ invalidateAll: true });
      isSubmitting = false;
    };
  }}
>
  <div class="inline-flex gap-4 mb-4">
    {@render CounterButton({ text: "-", onclick: subtractCounter })}

    <input
      type="hidden"
      class="hidden"
      id="increment"
      name="increment"
      bind:value={counter}
    />

    <Button type="submit" disabled={isSubmitting} class="relative">
      <div
        class="size-12 rounded-full border-background border-3 border-l-0 border-t-0 absolute top-1/2 left-1/2 -translate-1/2 animate-spin hidden"
        class:inline-block={isSubmitting}
      ></div>

      <span class="text-md lg:text-2xl" class:invisible={isSubmitting}>
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
</form>
