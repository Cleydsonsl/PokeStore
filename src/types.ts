export interface IPokeProduct {
  id: number;
  name: string;
  desc: string;
  price: string;
  cardNumber: string;
  amount: number;
  type: {
    tp1: string;
    tp2?: string;
  }
}
