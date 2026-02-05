<script lang="ts">
  import { Header, Main, Footer, LoadingScreen } from "$lib/sections";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let isLoading = $state(true);
  const loadingDuration = 1200;

  onMount(() => {
    const timer = setTimeout(() => (isLoading = false), loadingDuration);

    return () => clearTimeout(timer);
  });

  let { data }: PageProps = $props();
</script>

{#if isLoading}
  <LoadingScreen />
{/if}

<Header />

<Main currentCounter={data.current} maxCounter={data.max} />

<Footer />
