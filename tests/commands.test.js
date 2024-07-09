import { filter, count } from "../src/services/commands.js";

test("Filter command ry have to be as the example", () => {
  const dataToFind = [
    {
      name: "Uzuzozne",
      people: [
        {
          name: "Lillie Abbott",
          animals: [
            {
              name: "John Dory",
            },
          ],
        },
      ],
    },
    {
      name: "Satanwi",
      people: [
        {
          name: "Anthony Bruno",
          animals: [
            {
              name: "Oryx",
            },
          ],
        },
      ],
    },
  ];
  const dataToFilter = filter("ry");
  expect(dataToFilter).toEqual(dataToFind);
});

test("Count command have to contain elements as the example", () => {
  const dataToFind = [
    {
      name: "Dillauti [5]",
      people: [
        {
          animals: [
            { name: "Anoa" },
            { name: "Duck" },
            { name: "Narwhal" },
            { name: "Badger" },
            { name: "Cobra" },
            { name: "Crow" },
          ],
          name: "Winifred Graham [6]",
        },
        {
          animals: [
            { name: "Barbet" },
            { name: "Rhea" },
            { name: "Snakes" },
            { name: "Antelope" },
            { name: "Echidna" },
            { name: "Crow" },
            { name: "Guinea Fowl" },
            { name: "Deer Mouse" },
          ],
          name: "Blanche Viciani [8]",
        },
        {
          animals: [
            { name: "Sand Dollar" },
            { name: "Buzzard" },
            { name: "Elephant" },
            { name: "Xenops" },
            { name: "Dormouse" },
            { name: "Anchovy" },
            { name: "Dinosaur" },
          ],
          name: "Philip Murray [7]",
        },
        {
          animals: [
            { name: "Kowari" },
            { name: "Caecilian" },
            { name: "Common Genet" },
            { name: "Chipmunk" },
            { name: "Aardwolf" },
            { name: "Przewalski's Horse" },
            { name: "Badger" },
            { name: "Sand Cat" },
            { name: "Linne's Two-toed Sloth" },
          ],
          name: "Bobby Ristori [9]",
        },
        {
          animals: [
            { name: "Manta Ray" },
            { name: "Nubian Ibex" },
            { name: "Warbler" },
            { name: "Duck" },
            { name: "Mice" },
          ],
          name: "Louise Pinzauti [5]",
        },
      ],
    },
  ];
  const dataToCount = count();
  expect(dataToCount[0]).toEqual(dataToFind[0]);
});
