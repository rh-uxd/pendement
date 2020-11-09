// https://segment.com/docs/connections/spec/track/
export function trackButton(ev) {
  if (window.analytics) {
    window.analytics.track('Clicked button', {
      pathname: location.pathname,
      text: ev.target.innerText
    });
  }
}

// https://segment.com/docs/connections/spec/page/
export function trackPage(pathname) {
  if (window.analytics) {
    window.analytics.page(pathname);
  }
}

export function trackUser(username, email) {
  if (window.analytics) {
    window.analytics.identify(username, { email });
  }
}

