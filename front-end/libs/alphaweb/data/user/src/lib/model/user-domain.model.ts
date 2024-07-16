

export interface User{
  email: string;
  role: string;
  profile: Profile;
}
export interface Profile{
  firstName: string;
  lastName: string;
}
export interface LoginView {
  authUser: User;
  orders: Order[];
  products: Product[];
}

export interface Order {
  userId: string;
  productId: string;
  address: string;
  billingAddress: string;
  message: string;
  orderDate: Date;
  status: string;
  productPic: Media;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  productPic: Media;
}
export interface Media {
  filename: string;
}
