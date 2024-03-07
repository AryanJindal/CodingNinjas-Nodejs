# Bit Torrent

It is an application

## Key Points

1) Protocol for Peer to peer file sharing. A Bit torrent client is an application that uses this protocol
2) Follows an hybrid architecture instead of P2P .
3) Data is directly downloaded and uploaded by peers
   1) First peer downloads a file and as soon as it gets downloaded, it will start uploading it so that other peers can also access the same.
4) Allows easy exchange of large files
5) A bit torrent client requests files from multiple clients in parallel.
6) Small chunks of data is called `peices`
7) If a client downloads a peice successfully, bit torrent tells other clients that "ok, this client has this peice of data dowmloaded. SO, they can download it too."
8) These collection of collaborating clients is called `Swarms`.
   1) That is bit torrent keeps a collection of which client has downloaded a file
   2) And which client is requesting for the same.

## Torrent File

- Client joins a swarn by downloading a `.torrent` file that tells the following info:
  - Info about the file to be downloaded
    - Size of file
    - Size of it's peices
    - How it starts intertacting other files
  - Info about the `trackers`
    - Tracker acts as a Server that tracks who is participating in the swarm.
- When a client joins a swarm, it requests a list of clients from the trackers, and starts communication with these clients over TCP(initially as a "Leecher" because client doesnt have any file,so it just downloads initially, therefore called leecher)
- When the size of the swarm increases, we can start using something like trackless torrents that use `DHT(Distributed Hash Table)`
  - It is Distributed co-ordination mechanism
  - Information on swarm across many nodes

## Question : What exactly bit torrent does?

1) It breaks up file into N peices.
   - For throughput peices are large : 256kB to 1MB
     - For Latency, broken into subpeices
   - This is to ensure that TCP stream transferring the file is long lived enough that its congestion window can grow to reasonable size
2) Peice also ensures Integrity.
   - A torrent contains SHA-1 hash of one peice.
  
### Story Time

- HBO released rome
- Got uploaded to Torrent with very large swarns
- So, people started to download it .
- It is observed that very very fast peers provided peices with incorrect hash
- Noe client download ==> Hash Wrong ==> So re-download it
- Initially seemed like a network error
  - But there is a theory that HBO was regulating these peers with wrong hash so that no one can download it
- `Therefore now a days, we can nowadays block any client if we want`

## Underhood Mechanism

### Rarest First Policy

- Peers exchange what peices they have
- Peers download the rarest piece  among all the peers first
- If any peice is unavailable in all peers no one can download it.
- If very few peers have the peice, it becomes bottleneck for the download

### TFT Policy

- Reason for Bit-torrent Success
- Also known as `Tit-for-Tat` policy.
- `You send the data to peers, who send you the data`
- The peers who contribute can download faster
  - Leading to creation of incentives ro send peices to peers
  - Also known as `Seeding`.
  - Choking
    - Initally most pairs are choked
    - Suppose `x` has y pairs. It will check download speed of all the peices. the top p pairs which are having the top-most download and upload rate corresponding to that.
    - The p will be unchocked to request and respond data.
- Use your uplink capacity to be divided equally into  `p` pairs
  
## Bit -tyrant

- Increase the throughput by 70%.
- You can give access to not only p but also some more.
- It ensures that each peer uses uplink capacity exactly equal to just what they need. So new peers will be allowed to add to room 
