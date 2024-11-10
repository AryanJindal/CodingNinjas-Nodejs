# Server
- Server is hardware or software app
- Client is someone who is accessing our server
-  Clients make a socket connection with the server, and get the data. After that the socket connection gets closed.
-  Requests to servers are called `Incoming Connections`
-  Data is sent generally using TCP/Ip or UDP
-  Server `listens` for the connection.
-  The data is sent in form of chunks known as `packets`.
-  `Stream` means a connection. `Buffer` means sending data into smaller chunks.
-  We can create as many as Http servers as we want. 
-  PORT defines from which server , we want to access the data  or write the data.
   -  like
      -  102.209.1.3:3000
      -  `3000` is the port number here
      -  they are genreally of 4 digits
-  domain name maps to an IP address and a port number.
   -  But if we even add a path over there, then we are now associated with an API
   -  like `www.x.com` is an Domain name
   -  but `www.x.com/y/z` 
      -  here y will define the port maybe
      -  z will define the further path for teh API
   - Basically, what i am saying is
     - I can map www.x.com to like port 3000
     - and www.x.xom/db to port 3001
     - www.x.xom/files to port 3002
     - Every port is having an unique server to it
 - Generally bigger companies do not deploy there whole application to one server/computer.
   - They keep db on a db server
   - different server for files
   - a cdn for images maybe

## Sockets vs Web Sockets

**Sockets** and **WebSockets** both enable communication between client and server but are used for different purposes and operate differently.

Here’s a breakdown of their differences:

### 1. Protocol

- **Socket (TCP Socket)**: Sockets generally refer to a communication endpoint using the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). TCP sockets create a dedicated, persistent connection between two devices over the internet or a network. This connection ensures reliable, ordered data transmission between the devices. TCP sockets don’t inherently know about the internet; they just provide an endpoint for communication between applications.
  
- **WebSocket**: WebSocket is a protocol built on top of TCP and designed specifically for real-time web applications. It provides full-duplex communication channels over a single, long-lived connection between a client (typically a web browser) and a server. WebSockets operate over HTTP/HTTPS and then upgrade to a WebSocket connection, allowing them to bypass the stateless nature of HTTP for real-time communication.

### 2. Use Cases

- **Socket**: Typically used in backend systems where reliable, low-level data transmission is required. Examples include database connections, file transfers, and low-level network applications.

- **WebSocket**: Specifically designed for real-time web applications. It’s widely used for applications like live chat, gaming, real-time notifications, and other cases where bidirectional communication is needed between the client and server in a web environment.

### 3. Communication Model

- **Socket**: Operates on a request-response model where the server listens for incoming connections. Each connection is independent, and there’s no built-in way for the server to "push" data to the client unless the client requests it.

- **WebSocket**: Works on a persistent, bidirectional model where data can be sent by either the client or server at any time after the connection is established. This model makes WebSockets ideal for real-time, low-latency applications.

### 4. Connection Lifecycle

- **Socket**: Establishing a TCP connection requires a three-way handshake (SYN, SYN-ACK, ACK) which can be a bit slower due to the initial setup. Sockets may also require re-establishing connections if they are terminated due to inactivity.

- **WebSocket**: Initially establishes a connection over HTTP, which is then upgraded to WebSocket. Once the WebSocket connection is open, it remains open until explicitly closed, making it lightweight for real-time interactions.

### 5. Compatibility

- **Socket**: More low-level and suitable for non-browser environments, as they require explicit management by the developer. Typically used in languages like C, Java, or Python on server-side applications.

- **WebSocket**: Supported by most modern web browsers, making it easier to use in web applications and accessible via JavaScript on the client side. Most major web servers also support WebSocket connections.

### Summary Table

| Feature              | Socket (TCP Socket)                   | WebSocket                           |
|----------------------|---------------------------------------|-------------------------------------|
| Protocol             | TCP or UDP                            | Built on TCP, upgrades from HTTP    |
| Use Case             | Backend applications, file transfer   | Real-time web apps (chat, games)    |
| Communication        | Request-Response                      | Full-duplex (bidirectional)         |
| Connection Lifecycle | Connection reset per session          | Persistent connection               |
| Compatibility        | General-purpose, backend applications | Browser-friendly, real-time apps    |

### Example Use Cases

- **Socket**: A client-server application where the client downloads files from the server, such as FTP.
- **WebSocket**: A live chat application where messages are instantly pushed from the server to the client without polling. 

WebSocket provides a specialized, streamlined way to achieve real-time communication in web applications, while general TCP sockets offer a broader range of network communication options across diverse applications.


## Creating the server

```js

// We will use http module to create the web servers

const http = require("http");

//creating a server which will repond with hello world to every call
const server = http.createServer(function(request, response){
    if(request.url === "/"){
        response.end("Welcome to the home page");
    }else if(request.url === "/getSecretData"){
        response.end("Your secret data is here");
    }else{
        response.end("Hello World");
    }
});

server.listen(7777); //the server willmlistem for requests on this port(7777)
```

### Server using Express
