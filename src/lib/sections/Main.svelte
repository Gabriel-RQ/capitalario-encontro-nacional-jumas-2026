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
</script>

<main class="flex flex-col justify-center items-center gap-4">
  <section
    id="counter"
    class="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-4"
  >
    <div class="flex flex-col items-center gap-6 lg:gap-9 py-4 lg:py-8">
      <ProgressIndicator objective={70_000_000} current={30_000_000} />
      <Counter maxLength={8} current={100} />
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

  <section
    class="w-full lg:w-4/5 flex flex-col justify-center items-center gap-9"
  >
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
