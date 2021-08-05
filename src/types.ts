export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  cardNumber: string;
  amount: number;
  type: {
    tp1: string;
    tp2?: string;
  }
}


export interface Stock {
  id: number;
  amount: number;
}