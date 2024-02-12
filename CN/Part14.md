# Internet Protocol : IPv4

- IP is the network layer protocol.

## Assumptions used to Design

1) IP should provide an unreliable connectionless service.
   1) This will make sure that the different packets can go through diffferent routes.
2) Must have a 32 bit size address
   1) X.y.z.w
      1) X ==> 8 bits
      2) y ==> 8 bits
      3) z ==> 8 bits
      4) w ==> 8 bits
3) IP hosts should be able to exchange variable length packets as well.

## Address Assignment

- **Need**
  - There are a lot of address possible and a lot of hosts.
  - SO , how to assign an address to a particular host.
- **Way**
  - Naive Force
    - FCFS 
      - Whenever someone comes, just assign them a new IP address.
    - Disadvantage
      - Each router should maintain routes to each IP.
        - therefore , we have to store about 2^32 IP addresses in the router.
  - `Subnetting`
    - One soln is that the routers should maintain routes towards "Blocks and Address" & not towards individual hosts. for this blocks of IP addresses are assigned to ISP's.
      - The ISP's assign sub-blocks of the assigned address space us a hierarichal manner.
      - These sub blocks are called `subnets.`.
    - A typical subnet groups all the hosts that are part of same enterprise. An enterprise network is usually composed of serveral LAN's interconnected by routers. A small block of IP address from the enterprise block is usually assigned to a LAN.
- **Two Parts of IP address**
  - Subnet IP
  - Host IP.