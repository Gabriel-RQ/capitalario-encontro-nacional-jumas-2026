<script lang="ts">
  import type { Snippet } from "svelte";

  type CommentProps = {
    title: string;
    children: Snippet<[]>;
  };

  let { title, children }: CommentProps = $props();
</script>

<div
  class="border-2 border-primary flex flex-col text-primary gap-2 lg:gap-4 px-6 py-4 lg:px-8 lg:py-6 rounded-[60px] rounded-tr-none bg-background"
>
  <span class="font-bold text-lg lg:text-2xl">{title}</span>

  {@render children()}
</div>
