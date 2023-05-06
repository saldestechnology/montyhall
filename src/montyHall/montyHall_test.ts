import { assertEquals } from "https://deno.land/std@0.115.0/testing/asserts.ts";
import { MontyHall } from "./montyHall.ts";

Deno.test("Monty Hall Simulation - More switch wins than stay wins", () => {
  const numSimulations = 10000;
  const montyHall = new MontyHall(numSimulations);
  montyHall.simulate();

  assertEquals(montyHall.getSwitchWins > montyHall.getStayWins, true);
});

Deno.test("Monty Hall Simulation - Total wins equal total simulations", () => {
  const numSimulations = 10000;
  const montyHall = new MontyHall(numSimulations);
  montyHall.simulate();

  assertEquals(montyHall.getSwitchWins + montyHall.getStayWins, numSimulations);
});

Deno.test(
  "Monty Hall Simulation - Stay wins percentage approximately 33.3%",
  () => {
    const numSimulations = 10000;
    const montyHall = new MontyHall(numSimulations);
    montyHall.simulate();
    const stayWinningPercentage =
      (montyHall.getStayWins / numSimulations) * 100;

    assertEquals(
      stayWinningPercentage >= 32 && stayWinningPercentage <= 35,
      true
    );
  }
);

Deno.test(
  "Monty Hall Simulation - Switch wins percentage approximately 66.7%",
  () => {
    const numSimulations = 10000;
    const montyHall = new MontyHall(numSimulations);
    montyHall.simulate();
    const switchWinningPercentage =
      (montyHall.getSwitchWins / numSimulations) * 100;

    assertEquals(
      switchWinningPercentage >= 64 && switchWinningPercentage <= 68,
      true
    );
  }
);
