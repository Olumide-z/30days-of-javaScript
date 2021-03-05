const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

//destructuring constant array
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//destructuring countries array
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

//destructuring rect object
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)