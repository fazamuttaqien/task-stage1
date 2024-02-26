class Testimonial {
  #quote = ""; //  # => membuat property menjadi private
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get ShowTestimonials() {
    return `
    <div class="cards_item">
        <div class="card">
        <div class="card_image">
            <img
            src="${this.image}"
            alt="card_image"
            />
        </div>
        <p class="quote">"${this.quote}"</p>
        <p class="author">- ${this.author}</p>
        </div>
    </div>
    `;
  }
}

class Author extends Testimonial {
  #author = "";
  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

const user1 = new Author(
  "Robert Downey Jr.",
  "Mantap sekali jasanya",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
);

const user2 = new Author(
  "Scarlett Johansson",
  "Keren lah pokoknya",
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
);

const user3 = new Author(
  "Mark Ruffalo",
  "Wuhuu keren lah!",
  "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
);

const user4 = new Author(
  "Chris Evans",
  "Mantap sekali jasanya",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
);

const user5 = new Author(
  "Chris Hemsworth",
  "Keren lah pokoknya",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
);

let data = [user1, user2, user3, user4, user5];
let dataForHTML = "";

for (let i = 0; i < data.length; i++) {
  dataForHTML += data[i].ShowTestimonials;
}

document.getElementById("cards").innerHTML = dataForHTML;
