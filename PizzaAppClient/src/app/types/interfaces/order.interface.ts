import { Pizza, PizzaBE } from './piza.interface';

//Order aresponse that we get from the server
export interface Order {
  id: number;
  userId: number;
  adressTo: string;
  pizzas: Pizza[];
  orderPrice: number;
  description: string;
  user: {
    username: string;
  }
}

//Order response that we send to the server
export interface OrderBE {
  adressTo: string;
  pizzas: PizzaBE[];
  orderPrice: number;
  description: string;
}

