const mainDishes = document.querySelector('#mainDishes');
const polishCousine = document.querySelector('#polishCousine');
const forKids = document.querySelector('#forKids');
const salads = document.querySelector('#salads');

const mainMenu = [
  {
    dish: "Pierś z kurczaka w panierce panko podana z frytkami, zestawem surówek i remuladą",
    imgSrc: "./assets/img/menu-2.webp",
    price: "25zł"
  },
  {
    dish: "Panierowana pierś z kurczaka z pieczarkami i serem zółtym podana z ziemniakami i zestawem surówek",
    imgSrc: "./assets/img/menu-3.webp",
    price: "27zł"
  },
  {
    dish: "Kotlet De Volaille podany z frytkami i zestawem surówek",
    imgSrc: "./assets/img/menu-4.webp",
    price: "32zł"
  },
  {
    dish: "Placek po węgiersku z zestawem surówek",
    imgSrc: "./assets/img/menu-5.webp",
    price: "29zł"
  },
  {
    dish: "Kotlet schabowy panierowany po polsku z ziemniakami i kapustą zasmażaną",
    imgSrc: "./assets/img/menu-6.webp",
    price: "35zł"
  }
];

const polishMenu = [
  {
    dish: "Pierogi ruskie",
    imgSrc: "./assets/img/menu-5.webp",
    price: "25zł"
  },
  {
    dish: "Pierogi z kapustą",
    imgSrc: "./assets/img/menu-4.webp",
    price: "27zł"
  },
  {
    dish: "Pierogi z mięsem",
    imgSrc: "./assets/img/menu-6.webp",
    price: "32zł"
  },
  {
    dish: "Pierogi z serem na słodko",
    imgSrc: "./assets/img/menu-3.webp",
    price: "29zł"
  }
];

const menuForKids = [
  {
    dish: "Pyszne kotleciki z kurczaka z frytkami i surówką",
    imgSrc: "./assets/img/menu-5.webp",
    price: "25zł"
  },
  {
    dish: "Pierogi z kapustą",
    imgSrc: "./assets/img/menu-5.webp",
    price: "27zł"
  }
];

const saladsMenu = [
  {
    dish: "Grecka inspiracja (sałata, ogórek, pomidor, ser typu feta, oliwki, sos winegret)",
    imgSrc: "./assets/img/menu-3.webp",
    price: "26zł"
  },
  {
    dish: "Sałatka z chrupiącym kurczakiem i sosem miodowo-majonezowym (sałata, korniszon, pomidorek koktajlowy, parmezan, kruszonka z boczku)",
    imgSrc: "./assets/img/menu-6.webp",
    price: "28zł"
  }
]

const createMenuPositions = (item) => {
  const menuColumn = document.createElement('div');
  menuColumn.classList.add('column--menu', 'margin-bottom');

  const listItem = document.createElement('li');
  listItem.classList.add('list__el');
  listItem.textContent = item.dish;

  const img = document.createElement('img');
  img.classList.add('image-box', 'image-box__image', 'image-box--small');
  img.src = item.imgSrc;
  img.alt = 'menu2';

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('text-color-green', 'text-font-large');
  priceSpan.textContent = item.price;

  menuColumn.appendChild(listItem);
  menuColumn.appendChild(img);
  menuColumn.appendChild(priceSpan);

  return menuColumn;
}

  mainMenu.forEach((item) => {
    const menuItemElement = createMenuPositions(item);
    mainDishes.appendChild(menuItemElement);
  });

  polishMenu.forEach((item) => {
    const menuItemElement = createMenuPositions(item);
    polishCousine.appendChild(menuItemElement);
  });

  menuForKids.forEach((item) => {
    const menuItemElement = createMenuPositions(item);
    forKids.appendChild(menuItemElement);
  });
  saladsMenu.forEach((item) => {
    const menuItemElement = createMenuPositions(item);
    salads.appendChild(menuItemElement);
  });

