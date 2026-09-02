export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderDetails = {
  customerName?: string;
  pickupTime?: string;
  notes?: string;
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export function generateWhatsAppMessage(
  items: OrderItem[],
  details: OrderDetails = {},
) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = items.map(
    (item) =>
      `• ${item.name} x${item.quantity} — ${formatRupiah(item.price * item.quantity)}`,
  );

  return [
    "Halo RealV Coffee! Saya ingin memesan:",
    "",
    ...lines,
    "",
    `Total: ${formatRupiah(total)}`,
    details.customerName ? `Nama: ${details.customerName}` : "",
    details.pickupTime ? `Waktu ambil: ${details.pickupTime}` : "",
    details.notes ? `Catatan: ${details.notes}` : "",
    "",
    "Mohon konfirmasi pesanan saya. Terima kasih!",
  ]
    .filter(Boolean)
    .join("\n");
}

export const formatPrice = formatRupiah;
