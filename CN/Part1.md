# Terminologies of CN

## Protocols

Network protocols are a set of sules and regulations setup to communicate and share information over a network

- `Example`
  - Http
  - udp
  - tcp
  - SMTP

## Packets

- In order to share the data, we cant send big chunk of data over it
- So , the data should be divided in smaller data chunks known as packets

## Address

- Sending messages over the network requires the destination details of the end system
This detail uniquely indentifies the end system and known as address.

## Ports

- Suppose, adress specifies the society where the parcel is required to be sent
- Now, to make sure the parcel is sent to only corresponding person(Application in our case) person suppose jethalal, not bhide. I have to specify the port.

- **Any machine could be running many network apps, in order to distinguish these apps for receiving messages , we use port/port numbers.**

`Socket = IP-address + Port`

- Every process is going to have a unique `16-bit` port number. i.e. from `0-65535`
  - `0-1023 ==> Well known ports`
    - Reserved for specific applications
    - For example => port 80 is for HTTP
    - port 443 ==> https
  - `1024 - 49152` ==> registered ports
    - They are used by specific , potentially propeirty apps/process that are known but not system defined.
    - system defined can be http, https
    - propeirty apps
      - nodejs
      - sql server uses the port 1433,
      - mongoDb ==> 27017
  - `49152 - 65535` ==> dynamic ports
    - ports for future purpose
    - even end users can use it
