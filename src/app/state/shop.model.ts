import { ID } from '@datorama/akita';

export interface List {
  name: string;
  id: ID;
  date: number | Date;
  total: number;
  items: Item[];
}

export interface Item {
  id: ID;
  quantity: number;
  label: string;
  purchased: boolean;
}



