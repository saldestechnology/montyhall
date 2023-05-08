# Monty Hall Problem

> The Monty Hall problem is named for its similarity to the Let's Make a Deal
> television game show hosted by Monty Hall. The problem is stated as follows.
> Assume that a room is equipped with three doors. Behind two are goats, and
> behind the third is a shiny new car. You are asked to pick a door, and will
> win whatever is behind it. Let's say you pick door 1. Before the door is
> opened, however, someone who knows what's behind the doors (Monty Hall) opens
> one of the other two doors, revealing a goat, and asks you if you wish to
> change your selection to the third door (i.e., the door which neither you
> picked nor he opened). The Monty Hall problem is deciding whether you do.

> The correct answer is that you do want to switch. If you do not switch, you
> have the expected 1/3 chance of winning the car, since no matter whether you
> initially picked the correct door, Monty will show you a door with a goat. But
> after Monty has eliminated one of the doors for you, you obviously do not
> improve your chances of winning to better than 1/3 by sticking with your
> original choice. If you now switch doors, however, there is a 2/3 chance you
> will win the car (counterintuitive though it seems).

Source:
[Wolfram Mathworld - Monty Hall Problem](https://mathworld.wolfram.com/MontyHallProblem.html)

## Prerequisites

- [Docker](https://www.docker.com/): Install Docker on your system by following
  the [installation instructions](https://docs.docker.com/get-docker/) from the
  Docker official documentation.
- [Docker Compose](https://docs.docker.com/compose/): Install Docker Compose on
  your system by following the
  [installation instructions](https://docs.docker.com/compose/install/) from the
  Docker Compose official documentation.

### Local

- [Deno](https://deno.land/): Make sure to have Deno installed on your system.
  You can follow the
  [installation instructions](https://deno.land/manual/getting_started/installation)
  from the Deno official documentation.

## Files

- `montyHall.ts`: Contains the `MontyHall` class, which simulates the Monty Hall
  problem.
- `server.ts`: Sets up a RESTful API using the Oak middleware framework for
  running the Monty Hall simulation.
- `montyHall_test.ts`: Contains the test cases for the `MontyHall` class.
- `README.md`: This file, which provides an overview of the project and
  instructions on how to run the simulation, API, tests, and benchmark.

## Running the Simulation

### Docker

#### Build:

```sh
docker build -t montyhall:latest .
```

#### Run:

```sh
docker run -d montyhall:latest
```

This will start a server locally and the simulation can be accessed at
http://localhost:8000/montyhall/10000

### Local

Create a file named `main.ts` with the following content:

```ts
import { MontyHall } from "./montyHall.ts";

const numSimulations: number = 100000;
const montyHall: MontyHall = new MontyHall(numSimulations);
montyHall.simulate();
montyHall.printResults();
```

Run the simulation using the following command:

### Local

```sh
deno run main.ts
```

This will execute the Monty Hall simulation and print the results, including the
winning percentages when staying and switching.

## Running the Tests

To run the tests, execute the following command in your terminal:

```sh
deno test
```

Deno will run the tests and report the results. All test cases should pass,
confirming that the Monty Hall simulation behaves as expected.

## License

This project is MIT licensed.

```
Copyright 2023 Saldes Technology Group AB

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
