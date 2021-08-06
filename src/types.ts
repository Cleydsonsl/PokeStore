export interface IPokeProduct {
  id: number;
  name: string;
  desc: string;
  price: number;
  cardNumber: number;
  amount: number;
  type: {
    tp1: string;
    tp2?: string;
  }
}
