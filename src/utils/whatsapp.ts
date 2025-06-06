export const createWhatsAppLink = () => {
  const phoneNumber = '551129376455';
  const message = encodeURIComponent('Gostaria de conhecer o InsideChat');
  return `https://wa.me/${phoneNumber}?text=${message}`;
};