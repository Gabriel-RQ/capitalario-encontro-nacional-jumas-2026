import {
  getCurrentCounter,
  getMaxCounter,
  incrementCurrentCounter,
} from "$lib/database/upstash";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const current = await getCurrentCounter();
  const max = await getMaxCounter();

  return { current, max };
};

export const actions: Actions = {
  counter: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    if (!data.increment) return;
    const incrementBy = Number(data.increment);
    if (!(incrementBy > 0 && incrementBy <= 50)) return;

    await incrementCurrentCounter(incrementBy);
  },
};
