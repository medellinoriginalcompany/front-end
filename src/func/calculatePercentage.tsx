// Calcular porcentagem de desconto

function calculatePercentage(price: number | undefined, discountedPrice: number | undefined) {
  return Math.round((price! - discountedPrice!) / price! * 100)
};

export default calculatePercentage;