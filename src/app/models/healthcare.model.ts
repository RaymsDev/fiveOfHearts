export interface Healthcare {
  id: number;
  title: string;
  description: string;
  img: string;
  duration: string;
  audience: string;
  prices: {
    [cabinet: string]: string;
  };
}
