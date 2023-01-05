const sleep = (time: number) => new Promise((res) => setTimeout(res, time));

export default defineEventHandler(async (event) => {
  await sleep(1000);
  return {
    data: [
      {
        id: 1,
        name: "first",
      },
      {
        id: 2,
        name: "second",
      },
      {
        id: 3,
        name: "third",
      },
      {
        id: 4,
        name: "forth",
      },
    ],
  };
});
