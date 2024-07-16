export interface UserRegistrationCommand{
  email: string,
  password: string,
  firstName: string,
  lastName: string
}

export interface UserLoginCommand{
  email: string,
  password: string
}

export interface BuyProductCommand{
  productId: string;
  message: string;
  address: string;
  billingAddress: string;
}
