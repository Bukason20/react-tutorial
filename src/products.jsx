import Pie from "./assets/images/pie.jpg";
import Cake from "./assets/images/cake.jpg";
import Sauce from "./assets/images/chef.jpg";

const products = [
  {
    id: 1,
    name: "Pie",
    description: "This is an italian pie made in Nigeria",
    img: Pie,
    inStock: true,
  },
  {
    id: 2,
    name: "Cake",
    description: "This is an american cake made in Nigeria",
    img: Cake,
    inStock: false,
  },
  {
    id: 3,
    name: "Sauced Meal",
    description: "This is a chinese sauced meal made in Nigeria",
    img: Sauce,
    inStock: true,
  },
];

export default products;
