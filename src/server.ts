import { Application, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { MontyHall } from "./montyHall/index.ts";

const router = new Router();

router.get("/montyhall/:numSimulations", (ctx) => {
  const numSimulations = parseInt(ctx.params.numSimulations);
  if (isNaN(numSimulations)) {
    ctx.response.status = 400;
    ctx.response.body = {
      error: "Invalid parameter: numSimulations must be an integer.",
    };
    return;
  }

  const montyHall = new MontyHall(numSimulations);
  montyHall.simulate();
  ctx.response.body = {
    numSimulations: numSimulations,
    stayWins: montyHall.stayWins,
    switchWins: montyHall.switchWins,
    stayWinningPercentage: (montyHall.stayWins / numSimulations) * 100,
    switchWinningPercentage: (montyHall.switchWins / numSimulations) * 100,
  };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
console.log(`Server listening on port ${port}`);
await app.listen({ port });
