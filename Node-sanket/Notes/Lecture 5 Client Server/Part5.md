# Client Server Architecture

- Extremely important

## Server

- A hardware of software that provides a service to another computer program on a diff machine.

## Api conventions

### Advantages

- The people using api do not need to know about the internal logic of the aPI.
- Good to follow, not necessary

### Types

- REST(Important)
  - Representational state transfer
  - Rules
    - Everything(real life entity) is expected to be in the form of a resource.
      - Resource refers to movies and city in case of bookmyshow
        - <www.bookmyshow.com/bengaluru/drishyam-2>
    - Inside rest
      - (All of these are just conventions , internally may or may not)
      - GEt => used to retrieve info aboyt an resource.
      - Delete ==> should give a feeling of Deleting a resouce. 
      - PATCH ==> MAKE partial update to resource
      - put ==> make complete update to the resource
      - post ==> to create side updates
    - **Get vs Post**
      - Data
        - inside get, data is sent through urls only
        - inside post, you do not directly send data inside url. It is sent in request body's payload
- SOAP
- gRPC(important)
  - Represented in form of cities
  - <www.bookmyshow.com/get-movies-by-city>
  - Gives Huge performance bonuses.
  - Gpay uses gRPC

## Extras

- HTML only supports get and post
- js supports all http protocol.
