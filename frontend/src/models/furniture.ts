interface Furniture {
  _id: string;
  size: string;
  material: string;
  color: {
    name: string;
    hex: string;
  };
  left: number;
  price: number;
  description?: string;
  image?: string;
}

export default Furniture;
