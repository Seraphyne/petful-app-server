# Petful App 
By Renata D.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7ffaccd0-2860-460d-b1c9-c334d37bcb37/deploy-status)](https://app.netlify.com/sites/petful-adoption/deploys)

## 📌 Summary:

Petful operates on a FIFO (first-in, first-out) basis. Given a queue of dogs and a queue of cats, users adopt the first available pet. As a new adopter, add your name to the waiting list and watch as each available pet gets adopted. When it's your turn to adopt your pet, click the adopt button to dequeue that pet and complete the adoption process!


## 📌🔗 Links:

* Live: [Petful Live App](https://petful-adoption.netlify.app/)
* Railway: [API](https://web-production-bd73.up.railway.app/)
* Petful Client: [Github](https://github.com/Seraphyne/petful-app-client)
* Petful Server: [Github](https://github.com/Seraphyne/petful-app-server)

## 📌💻 Technology Used

#### Front-End: 

![](https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=css&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=sucess)

#### Back-End: 

![](https://img.shields.io/badge/Code-Node-informational?style=flat&logo=node&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Express-informational?style=flat&logo=express&logoColor=white&color=sucess)

#### Deployment:

![](https://img.shields.io/badge/Railway-informational?style=flat&logo=railway&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Netlify-informational?style=flat&logo=netlify&logoColor=white&color=sucess)

## 📌📄 API Documentation

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| GET    | /api/cats          | Get the first cat in the queue                                 |
| DELETE | /api/cats          | Dequeues the first cat in the queue                            |
| GET    | /api/cats/morecats | Reloads the cats in the queue when there are no more available |
| GET    | /api/cats/allcats  | Get all cats next in the queue                                 |
| GET    | /api/dogs          | Get the first dog in the queue                                 |
| DELETE | /api/dogs          | Dequeues the first dog in the queue                            |
| GET    | /api/dogs/moredogs | Reloads the dogs in the queue when there are no more available |
| GET    | /api/dogs/alldogs  | Get all dogs next in the queue                                 |

## 📌📇 Contact:

LinkedIn: [Contact](https://www.linkedin.com/in/renatafd/?locale=en_US)