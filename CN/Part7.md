# Cookies

- Mainly concerned about privacy
- HTTP is a stateless protocol and a lot of times a user session is required.
  - Suppose, server wants to know which session is going on
  - Or which user is logged in
  - Here comes the concept of cookies

## How cookies work??

- Cookies are unique identifier strings
- These are set by the server through http header.
- As soon as a cookies is stoerd, it is sent along with subsequent http responses to the same server.
  - This allows server to know, who is contacting it and hence serve the content accordingly.

## set-cookie header

- when a server wants to set a cookie, it includes `set-cookies : value` in the http response.
  - This value is stored in the cookie file of the browser
  - It will include
    - Value of the cookie
    - When it was set
    - When it is going to be expired
- `Sharing cookie might lead to breach of privacy`
  - So, now what will happen is like i search on amazon , some site might use its cookies to show me adds relevant to my amazon search history
