# node-http-and-worker

Node HTTP server and task worker

## A. When HTTP server is busy

- we can handle HTTP request and respond
- also, we can use a queue and send remaining tasks as messages
  - a worker can receive messages one by one, and process them

## B. When HTTP server is not so busy

- we can handle HTTP request and respond
- also, we can work on the remaining tasks in the background
  - e.g. using `setTimeout(work, 0)`
    - if there is an error, we can still use a queue
