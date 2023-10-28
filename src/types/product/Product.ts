// Tipo Produto deve ser em PascalCase
export type Product = {
  ID: number,
  Name: string,
  Description: string,
  DiscountedPrice?: number,
  Price: number,
  Stock: string,
  Banner: string,
  Category: {
    ID: number,
    Name: string,
    Description: string,
  },
  Size?: string,
  Color?: string,
  Type?: {
    ID: number,
    Name: string,
    Description: string,
  },

}