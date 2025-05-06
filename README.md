# Lab 5 - Starter

## Students from Group 8

- Chanbin Na
- Phyo Thant

---

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   No because the process of sending a message includes a lot of parts. It is impossible to check if the other user gets the message or not with the unit testing. The process includes buffering the sender's input to the network and routing that message to another user. For this feature, it's better to focus on the whole workflow, to see if the message gets routed to the other user or not.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

   Yes beacuse the 'max message length' feature is simple feature compares to the message, and also does not rely on other part of the applications. As it is simple function that we can test on development environment that doesn't interact with any networks or other components, it is more suitable for unit testing.

---

Expose Link: https://chanbinna.github.io/Lab5_Starter/expose.html
Explore Link: https://chanbinna.github.io/Lab5_Starter/explore.html
