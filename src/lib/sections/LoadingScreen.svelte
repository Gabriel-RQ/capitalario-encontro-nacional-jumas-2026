<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { ColorBand } from "$lib/components";
  import { onMount } from "svelte";
  import { scale, blur } from "svelte/transition";

  let mounted = $state(false);

  onMount(() => {
    document.body.classList.add("overflow-hidden");
    mounted = true;

    return () => document.body.classList.remove("overflow-hidden");
  });
</script>

<section class="fixed inset-0 bg-primary z-50 flex items-center justify-center">
  <ColorBand class="absolute inset-x-0 top-0" />

  {#if mounted}
    <img
      src={favicon}
      alt="Logo do Encontro Nacional 2026 - Uma chama com o santuário ao centro, escrito 70 anos do Jumas Brasil abaixo"
      class="drop-shadow-lg size-2/3"
      fetchpriority="high"
      in:blur={{ duration: 500 }}
    />
  {/if}
</section>
