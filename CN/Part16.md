# Classless Methodology

- No class
- Only blocks
  - Block IP
  - Host ID
- x.y.z.w/n
  - WHere n is number of bits to represent blocks.
  - This is used to caluclate the net ID
  - Tells how manyt bits are set in the mask.
  - Like 200.10.20.40/28
    - First 28 bits are set in the mask
    - Rest 4 are 0.
      - 2^4 hosts.
        - 1 is net Ip
        - 1 is host IP.
        - 14 unique hosts

## rules

- Addresses should be continuous
- No. of addresses in a block must be a power of 2.
- Fist address or network address should be divisible by the size of the block.


## Subnetting
Will be done in the similar manner as that of classful protocol.