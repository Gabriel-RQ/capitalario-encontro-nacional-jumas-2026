<script lang="ts">
  type ProgressBarProps = {
    value: number;
    max?: number;
    class?: string;
  };

  let { value, max = 100, class: className }: ProgressBarProps = $props();
</script>

<div
  style="--progress: {(value / max) * 100}%"
  class="relative border-variation-dark-blue border-2 bg-variation-dark-blue/70 rounded-full appearance-none accent-amber-400 h-6
  before:absolute before:inset-px before:bg-linear-90 before:from-[#27A7DF] before:to-[#74A1B4] before:to-75% before:rounded-full before:w-(--progress) {className}"
></div>
