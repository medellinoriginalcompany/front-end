// Tipo Produto deve ser em PascalCase
export type Product = {
  ID: number,
  Name: string,
  Description: string,
  oldPrice?: string,
  Price: string,
  Percentage: string,
  Stock: string,
  Discount?: number,
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