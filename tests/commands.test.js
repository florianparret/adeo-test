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
    const dataToFind = [ { name: 'Dillauti [5]',
        people:
         [ { name: 'Winifred Graham [6]',
             animals:
              [ { name: 'Anoa' },
                { name: 'Duck' },
                { name: 'Narwhal' },
                { name: 'Badger' },
                { name: 'Cobra' },
                { name: 'Crow' } ] },
           { name: 'Blanche Viciani [8]',
             animals:
              [ { name: 'Barbet' },
                { name: 'Rhea' },
                { name: 'Snakes' },
                { name: 'Antelope' },
                { name: 'Echidna' },
                { name: 'Crow' },
                { name: 'Guinea Fowl' },
                { name: 'Deer Mouse' } ] }
              ]}];
    const dataToFilter = count();
    expect(dataToFilter).toMatchObject(dataToFind);
  });
  