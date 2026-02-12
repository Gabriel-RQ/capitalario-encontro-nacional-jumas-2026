<script lang="ts">
  type CounterProps = {
    current?: number;
    maxLength: number;
  };

  let { current = 0, maxLength }: CounterProps = $props();

  const formatter = new Intl.NumberFormat("pt-br", {
    useGrouping: true,
    // svelte-ignore state_referenced_locally
    minimumIntegerDigits: maxLength,
  });

  // vai falhar quando chegar aos 8 dígitos, retornando um <span> + número (sem fechar o span)
  let value = $derived.by(() => {
    const parts = formatter
      .format(
        current
          .toString()
          .padStart(maxLength, "0") as Intl.StringNumericLiteral,
      )
      .split("");
    let closed = false;

    return parts
      .map((part, i) => {
        if (i === 0 && current.toString().length < maxLength)
          return `<span class="text-variation-red/65">${part}`;
        if (Number.parseInt(part) > 0 && !closed) {
          closed = true;
          return `</span>${part}`;
        }
        return part;
      })
      .join("");
  });
</script>

<div
  class="text-primary font-light text-sm lg:text-xl text-center gap-y-3 inline-flex flex-col select-none"
>
  <span class="font-extrabold text-5xl lg:text-9xl">
    {@html value}
  </span>

  <span> Orações do registradas </span>
</div>
