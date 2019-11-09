import { Item } from "../typedefs/Item";
import { Group } from "../typedefs/Group";

const infernusChest: Item = {
  id: 0,
  name: "Skrzynia Infernus",
  image: "/assets/sampleChest.png",
  group: "Skrzynie"
};

const gamehagChest: Item = {
  id: 1,
  name: "Skrzynia Gamehag",
  image: "/assets/sampleChest.png",
  group: "Skrzynie"
};

const randomCDKeyOne: Item = {
  id: 2,
  name: "Steam CD-Key (Rare)",
  image: "/assets/sampleReward.png",
  group: "Nagrody"
};

const randomCDKeyTwo: Item = {
  id: 3,
  name: "Steam CD-Key (Epic)",
  image: "/assets/sampleReward.png",
  group: "Nagrody"
};

const chests: Group = {
  name: "Skrzynie",
  slots: [
    {
      item: infernusChest,
      group: "Skrzynie"
    },
    {
      item: gamehagChest,
      group: "Skrzynie"
    },
    {
      item: null,
      group: "Skrzynie"
    },
    {
      item: null,
      group: "Skrzynie"
    },
    {
      item: null,
      group: "Skrzynie"
    }
  ]
};

const runes: Group = {
  name: "Runy",
  slots: [
    {
      item: null,
      group: "Runy"
    },
    {
      item: null,
      group: "Runy"
    },
    {
      item: null,
      group: "Runy"
    },
    {
      item: null,
      group: "Runy"
    },
    {
      item: null,
      group: "Runy"
    }
  ]
};

const rewards: Group = {
  name: "Nagrody",
  slots: [
    {
      item: randomCDKeyOne,
      group: "Nagrody"
    },
    {
      item: randomCDKeyTwo,
      group: "Nagrody"
    },
    {
      item: null,
      group: "Nagrody"
    },
    {
      item: null,
      group: "Nagrody"
    },
    {
      item: null,
      group: "Nagrody"
    }
  ]
};

export const db = [chests, runes, rewards];
