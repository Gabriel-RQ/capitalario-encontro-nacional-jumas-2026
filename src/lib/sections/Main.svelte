<script lang="ts">
  import {
    Card,
    CardList,
    Comment,
    Counter,
    InfoList,
    PrayerCounterButtons,
    ProgressIndicator,
  } from "$lib/components";

  type MainProps = {
    currentCounter: number;
    maxCounter: number;
  };

  let { currentCounter, maxCounter }: MainProps = $props();
</script>

<main class="flex flex-col items-center gap-4 lg:mx-auto max-w-7xl">
  <section
    id="counter"
    class="flex flex-col lg:flex-row justify-center items-center gap-4"
  >
    <div class="flex grow-2 flex-col items-center gap-6 lg:gap-9 py-4 lg:py-8">
      <ProgressIndicator objective={maxCounter} current={currentCounter} />
      <Counter maxLength={8} current={currentCounter} />
      <PrayerCounterButtons />
    </div>

    <div class="space-y-4 lg:w-1/4">
      <Comment title="Oração da confiança">
        Confio em teu poder e em tua bondade. Em ti, confio com filialidade.
        Confio, cegamente, em toda situação, Mãe, no teu Filho e em tua proteção
        (Pe. José Kentenich).
      </Comment>

      <InfoList items={["Teste", "Teste", "Teste"]} />
    </div>
  </section>

  <section class="grid grid-rows-[auto_1fr] w-full lg:w-4/5 gap-5 lg:gap-12">
    <div class="w-full">
      <h2
        class="relative w-fit text-secondary font-bold text-3xl lg:text-5xl text-left before:w-7/10 before:h-0.5 before:bg-variation-light-blue before:absolute before:-bottom-1"
      >
        Sua carta
      </h2>
    </div>

    <CardList>
      <Card>Lorem ipsum sit dolor amet</Card>
      <Card>Lorem ipsum sit dolor amet</Card>
      <Card>Lorem ipsum sit dolor amet</Card>
    </CardList>
  </section>
</main>

<style>
  #counter {
    background: url("/src/lib/assets/background.svg") no-repeat center center /
      contain;
  }
</style>
