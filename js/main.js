const cardData = [
  {
    id: 1,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "7 000₽",
    h3: "8 000₽",
  },
  {
    id: 2,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 3,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 4,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 5,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 6,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 7,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
  {
    id: 8,
    h4: "Вариативный замок Golden Soft <br /> для отеля",
    h3: "6 000₽",
    h3: "8 000₽",
  },
];
const continer = document.querySelector(".cards");

const post = () => {
  cardData.map((postData) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card");
    postElement.innerHTML = `
         
    <div class="card">
    <div class="rasm">
      <img src="./img/топ.png" alt="" />
    </div>
    <div class="rasm-text">
      <div class="stars">
        <img src="./img/рейтинг.png" alt="" />
        (12) отзывов
      </div>
      <h4>
        Вариативный замок Golden Soft <br />
        для отеля
      </h4>
      <div class="pr">
        <h3>7 000₽</h3>
        <h3
          style="
            text-decoration-line: line-through;
            color: rgb(69, 79, 91);
          "
        >
          8 000₽
        </h3>
      </div>
    </div>
  </div>
     
    `;
    continer.appendChild(postElement);
  });
};
post();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
