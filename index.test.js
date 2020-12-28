const Redirect = require("./index");

test("Could handle w/o tlds", () => {
  const domain = "https://google.com";
  const redirect = new Redirect(domain);
  expect(redirect.isAllowed("/")).toBe(true);
  expect(redirect.isAllowed("/test")).toBe(true);
  expect(redirect.isAllowed("http://google.com/test")).toBe(true);
  expect(redirect.isAllowed("http://google.de")).toBe(false);
  expect(
    redirect.isAllowed(
      "javascript:javascript:onerror=alert%3Bthrow%20document.cookie"
    )
  ).toBe(false);
});

test("Could handle tlds", () => {
  const domain = "https://google.com";
  const tlds = ["com", "de"];
  const redirect = new Redirect(domain, tlds);
  expect(redirect.isAllowed("google.de")).toBe(false);
  expect(redirect.isAllowed("https://google.de")).toBe(true);
  expect(redirect.isAllowed("https://google.de/test")).toBe(true);
  expect(redirect.isAllowed("https://test.subdomain.google.de/test")).toBe(true);
});
