export interface Healthcare {
  id: number;
  title: string;
  description: string;
  img: string;
  duration: {
    value: number;
    unitText: string;
  };
  price: {
    value: number | string;
    currency: string;
  };
  audience: string;
  prices: {
    [cabinet: string]: string;
  };
}
