const characters2   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result2  = '';
let charactersLength2 = characters2.length;

for(let i = 0; i<(Math.random() * charactersLength2); i++){
    result2+=characters2.charAt(Math.floor(Math.random()* charactersLength2))
}
console.log(result2);

//generating hexadecimal codes
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())

//generating rgb code

function getRandomRgb() {
    
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (var i = 0; i < 10; i++) {
    var num = Math.round(0xffffff * Math.random());
  }
  console.log(getRandomRgb());

