import { GroupName } from "./GroupName";

export class Item {
  id: number;
  name: string;
  image: string;
  group: GroupName;
  value?: number;
  cdKey?: number;
}
