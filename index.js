const splitHost = domain => {
  const url = new URL(domain);
  return url.host.split(".");
}

const getBase = (url) => url[url.length - 2]
const getTLD = (url) => url[url.length - 1]

class Redirect {
  constructor(domain, tlds) {
    this.domain = domain;
    this.tlds = tlds || [getTLD(splitHost(domain))];
    this.base = getBase(splitHost(domain));
  }
  isAllowed(url) {
    // Starts with /
    if (url.startsWith('/')) {
      return true
    }
    // If the url starts with http or https,
    if (url.match(/^(https?:\/\/)/)) {
      // Check the url's origin
      // https://regex101.com/r/0j3dL3/3/
      const _url = new URL(url)
      const regexp = new RegExp(
        `(https?:\/\/)?.*\.${this.base}.(${this.tlds.join("|")})$`
      );
      return Boolean(_url.origin.match(regexp));
    }

    return false
  }
}

module.exports = Redirect;
