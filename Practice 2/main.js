class Media {
  constructor(name, writerName, price) {
    this.name = name;
    this.writerName = writerName;
    this.price = price;
  }
}

class Film extends Media {
  constructor(name, writerName, price, width) {
    super(name, writerName, price);
    this.width = width
  }
}

class Book extends Media {
  constructor(name, writerName, price, pages) {
    super(name, writerName, price);
    this.pages = pages
  }
}

const film = new Film('Squied Game', 'Lee byun', 200000,200)
console.log(film)
const book = new Book('little Prince', 'faeze gholami', 2000,20)
console.log(book)
