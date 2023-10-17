// Variáveis devem começar com letra maiúscula devido a API em GO

export type User = {
  ID: number,
  FullName: string,
  BirthDate: string,
  CPF: string,
  Phone: string,
  BillingAddress: string,
  Address1: string,
  Email: string,
  Password?: string,
}