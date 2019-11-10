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
  group: "Nagrody",
  value: 12,
  cdKey: "C4Nt-T0uCh-Th1S"
};

const randomCDKeyTwo: Item = {
  id: 3,
  name: "Steam CD-Key (Epic)",
  image: "/assets/sampleReward.png",
  group: "Nagrody",
  value: 50,
  cdKey: "N-0-1C-3"
};

const randomCDKeyThree: Item = {
  id: 4,
  name: "Steam CD-Key (Mythic)",
  image: "/assets/sampleReward.png",
  group: "Nagrody",
  value: 399,
  cdKey: "3-1-337"
};

const randomCDKeyFour: Item = {
  id: 5,
  name: "Steam CD-Key (Legendary)",
  image: "/assets/sampleReward.png",
  group: "Nagrody",
  value: 999,
  cdKey: "a-e-z4-km1"
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
export const prizePool = [randomCDKeyThree, randomCDKeyFour];
