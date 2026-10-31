// IIFE -> Immediately Invoked F Expression
import { add } from "./add.ts";

// function add(a: number, b: number):number {
//   return a + b;
// }
//
async function wait(t: number): Promise<void> {
  // await new Promise<void>((resolve) => setTimeout(resolve, t));
  await Bun.sleep(t);
}

(
  // () => {
  //   console.log("dalem toket!");
  // }h
  //
  //
  async function () {
    console.log("dalem toket satu lagi!");

    // explicit type annotation
    let result: number;
    result = add(5, 10);

    let inferred_result = add(20, 30);

    const one_time_result = add(100, 200);

    console.log("hasil add: ", result);
    console.log("hasil inferred: ", inferred_result);
    console.log("hasil const_inferred: ", one_time_result);

    // print timestamp using bun
    console.log(new Date().toLocaleString());

    // waiting for 5 seconds
    await wait(5000);

    console.log(new Date().toLocaleString());
  }
)();
