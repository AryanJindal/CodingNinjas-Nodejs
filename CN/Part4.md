# Application Layer

## Roles

- Writing/Proving data off to the network
  - When sender wants to send the data to an application , the application latyer is the first one to put it inside the network.
- Responsible for reading data from user and writing data for the reciever
- Contains applications that helps user to interact on the network.
  - That is all the applications like socical media , games, API's and more are available on the application layer only
- Sometimes error handling and recovering can also be done
  - Like what kind of data is user allowed to put inside the network
  
## Where is exists

- Inside end systems
  - like mobile/laptop
  - Instant messaging
  - www
  - VoIP
  - Email
  - http/https

## Client server architecture

![alt text](/images/image.png)

- Two level architecture
  - Client Side
  - Server side

- `Servers` => These controls the access to a centralised resource or servicew such as a website/webapp
- `Client` => A client is a computing entity or application that actively initiates communication sessions with one or more servers within a network, typically for the purpose of accessing resources, services, or data provided by the servers. Clients send requests to servers, which in turn process these requests and return responses, thereby facilitating the exchange of information and functionality across the network.

## P2P architecture

- Peer to peer achitechture
- noting like client or server
- Mutliple end systems involved
  - Connected to each other
  - Decentralised in nature
  - Every end system helps  other end system to get the resource
- `Torrent` best example
  - Scalable  
- ![alt text](/images/image-1.png)

## Hybrid architecture

- Combination of client-server and p2p
- very less used
  - as p2p do not really workj well with client-server

<br>

- **A lot of application layer protocol depends on lower levbel protocols of transport layer**

