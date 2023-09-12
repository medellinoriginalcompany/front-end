// Variáveis devem começar com letra maiúscula devido a API em GO

export type User = {
  ID: number,
  FullName: string,
  BirthDate: string,
  CPF: string,
  Number: string,
  BillingAddress: string,
  Address1: string,
  Email: string,
  Password?: string,
}