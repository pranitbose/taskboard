const getJwtFromAuthHeader = (authHeader: string): string =>
  authHeader.startsWith("Bearer")
    ? authHeader.split("Bearer")[1].trim()
    : authHeader.split("Bearer")[0].trim();

export { getJwtFromAuthHeader };
