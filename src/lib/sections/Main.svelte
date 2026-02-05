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

<main class="flex flex-col items-center gap-16 lg:gap-24 lg:mx-auto max-w-7xl">
  <section
    id="counter"
    class="flex flex-col lg:flex-row justify-center items-center gap-4"
  >
    <div class="flex grow-2 flex-col items-left gap-6 lg:gap-9 py-4 lg:py-8">
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

      <InfoList
        items={[
          "Faça sua entrega e reze a Oração da Confiança",
          "Registre sua contribuição com o Capital de Graças",
          "Mantenha a chama acesa para o Nacional 2026",
        ]}
      />
    </div>
  </section>

  <section class="grid grid-rows-[auto_1fr] w-full gap-5 lg:gap-12">
    <div class="w-full">
      <h2
        class="mx-auto relative w-fit text-secondary font-bold text-3xl lg:text-6xl lg:text-left lg:before:w-7/10 before:w-30 before:h-0.5 before:bg-variation-light-blue before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2"
      >
        Sua carta
      </h2>
    </div>

    <CardList>
      <Card>
        O Propósito da carta é o símbolo da sua entrega total. Nela, você
        materializa o seu Capital de Graças, depositando sua vida e esforços
        diretamente nos braços da Mãe de Deus.
      </Card>
      <Card>
        Sobre o que escrever: <strong
          >"Como a Mãe de Deus e o Jumas moldam sua história".</strong
        > Reflita sobre sua caminhada, suas conquistas no movimento e como esse vínculo
        transformou quem você é hoje.
      </Card>
      <Card>
        <span>
          <strong>Dados |</strong>
          Coloque Nome, Idade e Cidade.
        </span>
        <br /><br />
        <span>
          <strong>Formato |</strong>
          Escreva preferencialmente à mão.
        </span>
        <br /><br />
        <span>
          <strong> Entrega | </strong>
          Leve a carta física com você para o Encontro Nacional.preferencialmente
          à mão. Entrega | Leve a carta física com você para o Encontro Nacional.
        </span>
      </Card>
    </CardList>
  </section>
</main>

<style>
  #counter {
    background: url("/src/lib/assets/background.svg") no-repeat center center /
      contain;
  }
</style>
