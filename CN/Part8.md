# Email : SMTP

- SMTP : Simple Mail Transfer Protocol
- One more protocol named `POP3` is used in combination with SMTP
  - One is used to send emails stored in the user's inbox
  - Other is used to retrieve smails sent to a user
- SMTP also uses TCp protocol from transport layer.
- SMTP `port : 25`
- `Mail clients gives the actual UI` for end-user to send and recieve mails.
  - Mail clients are like g-mail , outlook

## How SMTP works??

- When Email is sent
  - Sent to SMTP's server using SMTP protocol.
    - Like G-mail uses the gmail's SMTP server at the backend
    - Also, the SMTP server is configured in the mail clients
  - The SMTP server places the email on a message queue
  - The SMTP server initiates a connection with the reciever's SMTP server and conducts and initiates `SMTP handshake.`
    - But if both have same server, then this is not required
  - Then finally, it sends the email to receiptents SMTP server.
  - The email is downloaded from receiver's SMTP server and then the client sees the mail.
- `SMTP is a push protocol` that is it can only send response email
- `POP3/IMAP is a pull protocol` is going to be used to download the email.
- in any case, the email is not delievered then delivred back to the sender, with a message that email not delievered.
- **What if the receiver's smtp server is offline?**
  - The senders SMTP server tries again and again after some delta minutes. There is a set threshhold after which it stops sending the email and marks as not delievered.