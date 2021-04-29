export function getAuthority(str) {
  const authorityString = typeof str === 'undefined' ? sessionStorage.getItem('authority') : str;
  let authority = null;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
}
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return sessionStorage.setItem('authority', JSON.stringify(proAuthority));
}