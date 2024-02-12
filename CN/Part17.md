# IPv6

## Goals of IPv4

- Stitch Many networks together
- 32 bit address
- **Disadvantages**
  - People we running out of addresses when internet boomed
  - General utilization was about 35%.

## Lets welcome IPv6

- Work started in 1996
- Basic protocol published in 1998
- Became relevant in 2004

## Address Structure

- **128 bit Address**
  - That is roughly 21 addess/inch sq. of the world
- Seprated into 2 parts
  - Subnet Prefix
  - Host suffix

- Uses 8 octet and can be seprated using hexadecomals as 8 blocks of 16 bits.
- Can omit single blocks by using `::` if it has only 0's.
- Use bracket in the URL
  - `http://[2001:470:8060:1::9]:80`
    - http is protcol
    - brackets have ipv6 addrss
    - 80 is the port

- **Address assignment**
  - Similar to that of IPv4 and depends on  regional interent .
    - IPv6/n 
      - n is bits for subnet prefix.
  - ![alt text](/images/image-12.png)
    - Add hexadecimal `0xfffe` in the middle
    - ![alt text](/images/image-13.png)