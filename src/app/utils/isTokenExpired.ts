export const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('expires_at');
  if (!expiresAt) return true;

  const expirationDate = new Date(expiresAt);
  const currentDate = new Date();

  return currentDate >= expirationDate;
};
