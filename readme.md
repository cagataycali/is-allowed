# Am I Allowed To Redirect


```bash
npm i is-allowed
```

**Single domain & tld**

```javascript
const domain = "https://google.com";
const redirect = new Redirect(domain);
redirect.isAllowed("/") // true
redirect.isAllowed("/test") // true
```

**Multiple domain & tld**

```javascript
const domain = "https://google.com";
const redirect = new Redirect(domain, ['com', 'de', 'fr', 'ru']);
redirect.isAllowed("/") // true
redirect.isAllowed("https://google.ru/test") // true
```

**Also supports subdomains.**

```javascript
const domain = "https://google.com";
const redirect = new Redirect(domain, ['com', 'de', 'fr', 'ru']);
redirect.isAllowed("https://subdomain.google.ru/test") // true
```

