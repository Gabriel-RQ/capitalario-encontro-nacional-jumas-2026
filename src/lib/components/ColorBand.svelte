<script lang="ts">
  type ColorBandProps = {
    class: string;
  };

  let { class: className }: ColorBandProps = $props();
</script>

<div class="flex h-3 *:flex-1 {className}">
  <div class="bg-primary"></div>
  <div class="bg-secondary"></div>
  <div class="bg-tertiary"></div>
  <div class="bg-variation-orange"></div>
</div>
