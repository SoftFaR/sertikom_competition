// Bootstrap page based on the entry HTML. Each entry point uses the same shared data demo.
(function initializeSertikomPrototype() {
  const role = window.SERTIKOM_START_ROLE;
  if (role && roleInfo[role]) {
    if (window.SERTIKOM_START_APP_PAGE) appState.activePage = window.SERTIKOM_START_APP_PAGE;
    // Direct links from the presentation menu skip the first-login modal; normal login still shows it.
    if (window.SERTIKOM_START_APP_PAGE) {
      try { sessionStorage.setItem('sertikom-first-' + role, '1'); } catch (error) {}
    }
    loginAs(role);
    if (window.SERTIKOM_START_APP_PAGE) { appState.activePage = window.SERTIKOM_START_APP_PAGE; render(); }
    return;
  }
  render();
})();
