# Clusters with express app

Clusters creates child process that run simultaneously and share the same port number. This means we can handle multiple requests at the same time.

## Advantages

- Increases app performance by working concurrently over CPUs cores
- Easy to implement, no need external packages

## Disadvantages

- Makes impossible to work with sessions

## Read More

- [Node.js Cluster and Express](https://rowanmanning.com/posts/node-cluster-and-express/)
- [Improving Node.js Application Performance With Clustering](https://blog.appsignal.com/2021/02/03/improving-node-application-performance-with-clustering.html)
