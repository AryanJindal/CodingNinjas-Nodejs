# Address Classes

WHen a router needs to send a packet, it must know the subnet of the destination address to be able to consult its routing-table to forward the packet.
<br>
It was proposed to use the high order bits of address to encode the length of subnet identifier.

- for any network we have two reserved IP addresses.
  - X.0.0.0 ==> Net IP
  - X.255.255.255 ==> Broadcast IP
- We have 5 classes
  - **A**
    - The first bit is always zero.
    - Therefore we will be having 2^31 addresses.
    - The first 8 bit octet represents the network ID.
      - Since 1st bit is already zero, therefore we can have at max 2^7 network ids.
        - that is from 0.0.0.0 to 127.255.255.255
      - and 2^24-2 hosts in class A as starting one is reserved for NET Ip and last one for the broadcast IP.
    - The rest of the bits represent the host ID.
    - The mask for class A is 255.0.0.0
      - Masks help to detect which IP belongs to which network ID of class A.
      - We will simple do the AND operation of IP address with (255.0.0.0)
    - X.0.0.0 ==> Net IP
    - X.255.255.255 ==> Broadcast IP
  - **B**
    - The first two bit are always 10
      - 2^30 addresses possible.
    - so, IP's possible are 128.0.0.0 to 191.255.255.255
    - First two octets will tell us about the network ID.
      - And rest about the host
      - 2^14 network IP's (2^6 from first and 2^8 from second octet)
    - No of Hosts ==> 2^16.
    - X.Y.0.0 ==> Net IP
    - X.y.255.255 ==> Broadcast IP
    - Default mask : 255.255.0.0
      - Suppose IP is 18.3.180.2
        - Network ID ==> 18.3.0.0
  - **C**
    - The first bits are always 110.
      - then 192.0.0.0 to 223.255.2555.255
      - 2^29 unique IP's
    - FIrst 3 octets will represent the network ID
      - 2^21 unique networks.
    - Mask : 255.255.255.0
    - X.y.z.0 => net ID
    - x.y.z.255 => broadcast ID
    - 2^8-2 host ids
  - **D**
    - Not allocated to general scenario
    - The first bits are always 1110.
    - Range : 224-239
    - No of ips => 2^28
    - no network or host here
  - **E**
    - The first bits are always 1111.
    - Reserved for military purposes
    - Range : 240-255

## Disadvantages of Classful IP Addressing

- Wastage of IP addresses.
  - As each network has 2^24-2 hosts which is pretty huge and leads to wastage of many IP's.
- Maintainance and time consuming.
- More prone to errors.

## Subnetting in Classful Addressing

- Dividing a network to a small netwrk is called sub-net
- NO efffect to be done on the network ID.
- To check if a packet belongs to an network , simply check the first octet
  - Based on it , allot the class
  - Based on class, get the mask
  - Check if the mask result same as NET id
- To set the subnet we use `x` bits from the hosts bits.
  - 2^x subnets.
    - Now each subnet will have 2^(8-x) hosts.
  - Subnet mask will be NetworkID-part + (***x bits on***)
  - 

