(
  () => {
    // eg array
    let scores: number[] = [];
    scores.push(10);
    scores.push(30);

    // literal
    let status_nikah: "jomblo" | "nikah" | "cerai";
    status_nikah = "jomblo";

    console.log("scores: ", scores);
    console.log("scores[0] -> ", scores[0]);

    console.log("status_nikah: ", status_nikah);
  }
)();
