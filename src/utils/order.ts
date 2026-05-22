let orderSequence = 1;

export function generateOrderNumber(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const sequence = String(orderSequence).padStart(4, '0');
  orderSequence += 1;

  return `DOPA${year}${month}${day}${sequence}`;
}
