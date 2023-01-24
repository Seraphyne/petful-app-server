const Queue = require("../queues/queue-constructor");

class DogsService {
  constructor() {
    this.dogQueue = new Queue();

    let dogs = [
      {
        imageURL:
          "https://www.pawmygosh.com/wp-content/uploads/2016/06/dog-bubbles1.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription:
          "A golden retriever chasing and trying to eat bubbles.",
        name: "Zeus",
        sex: "Male",
        age: 3,
        breed: "Golden Retriever",
        story: "Owner passed away",
      },
      {
        imageURL:
          "https://www.publicdomainpictures.net/pictures/280000/nahled/dog-alaskan-malamute-animal-pet.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A black, tan, and white Malamute sitting.",
        name: "Spark",
        sex: "Female",
        age: 1,
        breed: "Malamute",
        story: "Born at the shelter",
      },
      {
        imageURL:
          "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/05151036/bringing-home-a-pug.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A pug with crazy eyes.",
        name: "Rusty",
        sex: "Male",
        age: 2,
        breed: "Pug",
        story: "Owners moved due to Covid",
      },
      {
        imageURL:
          "https://thehappypuppysite.com/wp-content/uploads/2018/12/beaglepupflower.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A baby beagle eating a little flower.",
        name: "Gus",
        sex: "Male",
        age: 0,
        breed: "Beagle",
        story: "Found in an alley",
      },
      {
        imageURL:
          "https://thehappypuppysite.com/wp-content/uploads/2018/01/Toy-Poodle-HP-long.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription:
          "A poodle looking at the camera as if she's hoping for treats.",
        name: "Lucy",
        sex: "Female",
        age: 2,
        breed: "Poodle",
        story: "Played too much Fortnite",
      },
      {
        imageURL:
          "https://cdn.britannica.com/59/234759-050-DA4F2DCF/Akita-dog-Japan.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "An Akita looking attentive.",
        name: "Ben",
        sex: "Male",
        age: 2,
        breed: "Akita",
        story: "Abandoned on the streets",
      },
      {
        imageURL:
          "https://www.thesprucepets.com/thmb/fUjsndUFAfOAnTkrxs3JpXrKPjY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/78328278-56a26a565f9b58b7d0c9fb68.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A Schnauzer who wants to get your attention.",
        name: "Dexter",
        sex: "Male",
        age: 3,
        breed: "Schnauzer",
        story: "Born at the shelter",
      },
      {
        imageURL:
          "https://www.dogster.com/wp-content/uploads/2019/11/GettyImages-1147284752-768x512.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A Pinscher sitting.",
        name: "Coco",
        sex: "Female",
        age: 4,
        breed: "Pinscher",
        story: "On COD curfew.",
      },
      {
        imageURL:
          "https://www.pumpkin.care/wp-content/uploads/2021/03/BorderCollie-Hero-1.jpg?auto=compress&cs=tinysrgb&dpr=1&w=600",
        imageDescription: "A Border Collie who wants to play.",
        name: "Belle",
        sex: "Female",
        age: 4,
        breed: "Border Collie",
        story: "Failed to pay mortgage due to Covid",
      },
      {
        imageURL:
          "https://www.espree.com/sites/default/files/2019-10/BichonFrise.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imageDescription: "A Bichon Frise that wants to get some treats.",
        name: "Peanut",
        sex: "Male",
        age: 6,
        breed: "Bichon Frise",
        story: "Born at the shelter",
      },
    ];

    dogs.map((dog) => {
      this.dogQueue.enqueue(dog);
    });
  }

  deleteDog() {
    let adoptedDog = this.dogQueue.dequeue();
    this.dogQueue.enqueue(adoptedDog); //add dog back into queue so that dog "stock" does not run out
    return adoptedDog;
  }

  getDogs() {
    return this.dogQueue.display();
  }
}

module.exports = DogsService;
