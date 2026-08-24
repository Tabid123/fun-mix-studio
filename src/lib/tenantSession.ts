/** Clears any locally saved tenant selection (used on logout / failed sign-in). */
export const clearTenantSelection = () => {
  try {
    localStorage.removeItem('active_tenant_id');
    localStorage.removeItem('public_tenant_slug');
  } catch {
    /* ignore */
  }
};
