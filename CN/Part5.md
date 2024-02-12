# HTTP

- Hypertext Transfer Protocol
- `Hypertext`
  - Document having another document linked to each other
- `Web-Objects` ==> web-pages are the main objects that contain other objects like images, mp3 files.
  - Every object have an url
- `URL` ==> uniform web-locator.
  - Has three parts
    - Protocol(http)
    - Host name(swiggy.com)
    - location of file/object (/restaurant/11035)
      - Plus arguements
    - ![url parts](/images/image-2.png)
- Defines the whole procedure on how the client and server will interact.
- ![alt text](/images/image-3.png)
- Http is a stateless protocol
  - Servers donot store any information of the client
  - If same client request for the same object again and again, then serbver will sent it again and again
- Depends on TCP connection to establish a http connection.
  - Then request is sent
  - Then we get a response
- `Payload` It is like a data package need to be sent.

## Types of HTTP connections

- Types
  - `persistent`
    - Web-sockets are an example
  - `Non-persistent`
    - breaks as soon as one life cycle of an Http completes

## Http requests and response messages

- `Headers` are like some extra peice of information, we need to send to fulfill an request
- Any http message are plain ASCII text
- It has
  - Host
  - `Method`
  - `Status code`
  - Refferer policy
  - `Version`
  - `URL`
  - `Request Header`
  - `Response Header`

### http requests

- Request Url
- Request method
- Status Code
- Remote address of the IP
- headers
  - method
  - content length
  - accepted encoding
  - accepted methods
  - agent
- date and time

## Mutliple Http Methods

- Have some conventions
- Reading these will provide us with an birds eye overview

### GET

- Used to request some data

### Head

- It is like `get` but without reponse body

### POST

- Put some data on the server
  - Causing a change in state or side effect on the server.
- Can also be used to request the data (But not recommended.)

### PUT

- Updating data(complete object) on server

### PATCH

- update partial data on the server

### DELETE

- Deletes an object at a given URL

## HTTP status codes

- Informational Response(100-199)
  - 100 ==> continue
- Successful Response(200-299)
  - 200 ==> OK
  - 201 ==> created
  - 202 ==> Accepted
  - 204 ==> No-content
- Redirections messages(300-399)
- Client error message (400-499)
  - 400 ==> Bad request
  - 403 Forbidden
  - 404 Not found
- Server Error response(500-599)

## More peices of information

- **UserAgent**
  - Specifes the client.
  - Server has different web pages that exist for different devices.
- **Accept Language**
  - Specifies the preferred language
- **Connection**
  - For non-persistent it is `close`
