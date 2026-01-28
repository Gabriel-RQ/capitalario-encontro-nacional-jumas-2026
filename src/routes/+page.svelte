<script lang="ts">
  import { Header, Main, Footer, LoadingScreen } from "$lib/sections";
  import { onMount } from "svelte";

  let isLoading = $state(true);
  const loadingDuration = 1200;

  onMount(() => {
    const timer = setTimeout(() => (isLoading = false), loadingDuration);

    return () => clearTimeout(timer);
  });
</script>

{#if isLoading}
  <LoadingScreen />
{/if}

<Header />

<Main />

<Footer />
