// script.js

const products = [

  // Laptops
  {name:"ASUS TUF Gaming",category:"laptop",price:65000},
  {name:"HP Victus",category:"laptop",price:72000},
  {name:"Dell Inspiron",category:"laptop",price:55000},
  {name:"MacBook Air",category:"laptop",price:95000},
  {name:"Lenovo Legion",category:"laptop",price:88000},
  {name:"Acer Nitro 5",category:"laptop",price:70000},
  {name:"MSI GF63",category:"laptop",price:68000},
  {name:"ASUS VivoBook",category:"laptop",price:50000},
  {name:"HP Pavilion",category:"laptop",price:60000},
  {name:"Dell XPS",category:"laptop",price:120000},

  // Phones
  {name:"iPhone 15",category:"phone",price:80000},
  {name:"Samsung Galaxy S24",category:"phone",price:75000},
  {name:"OnePlus 12",category:"phone",price:65000},
  {name:"Redmi Note 13",category:"phone",price:18000},
  {name:"Realme Narzo",category:"phone",price:15000},
  {name:"Vivo V30",category:"phone",price:32000},
  {name:"Oppo Reno",category:"phone",price:28000},
  {name:"Google Pixel",category:"phone",price:70000},
  {name:"Nothing Phone",category:"phone",price:35000},
  {name:"Moto Edge",category:"phone",price:25000},

  // Headphones
  {name:"Sony WH1000XM5",category:"headphones",price:30000},
  {name:"Boat Rockerz",category:"headphones",price:2000},
  {name:"JBL Tune",category:"headphones",price:3500},
  {name:"AirPods Pro",category:"headphones",price:25000},
  {name:"Noise Headphones",category:"headphones",price:2500},
  {name:"Boult Audio",category:"headphones",price:1800},
  {name:"Realme Buds",category:"headphones",price:2200},
  {name:"OnePlus Buds",category:"headphones",price:5000},
  {name:"Skullcandy Crusher",category:"headphones",price:12000},
  {name:"Sennheiser HD",category:"headphones",price:15000},

  // Shoes
  {name:"Nike Air Max",category:"shoes",price:8000},
  {name:"Adidas Ultraboost",category:"shoes",price:10000},
  {name:"Puma Running Shoes",category:"shoes",price:4500},
  {name:"Reebok Sports",category:"shoes",price:4000},
  {name:"Campus Sneakers",category:"shoes",price:2000},
  {name:"Bata Formal Shoes",category:"shoes",price:2500},
  {name:"Woodland Boots",category:"shoes",price:5000},
  {name:"Skechers Go Walk",category:"shoes",price:6000},
  {name:"Converse Classic",category:"shoes",price:4500},
  {name:"ASICS Gel",category:"shoes",price:7000},

  // Watches
  {name:"Apple Watch",category:"watch",price:40000},
  {name:"Samsung Galaxy Watch",category:"watch",price:25000},
  {name:"Noise Smartwatch",category:"watch",price:3000},
  {name:"Boat Wave",category:"watch",price:2500},
  {name:"Titan Analog",category:"watch",price:5000},
  {name:"Fossil Gen 6",category:"watch",price:18000},
  {name:"Casio GShock",category:"watch",price:7000},
  {name:"FireBoltt Ninja",category:"watch",price:2200},
  {name:"Amazfit GTR",category:"watch",price:12000},
  {name:"Fitbit Versa",category:"watch",price:15000},

  // Cameras
  {name:"Canon EOS",category:"camera",price:55000},
  {name:"Sony Alpha",category:"camera",price:70000},
  {name:"Nikon D750",category:"camera",price:65000},
  {name:"Fujifilm XT4",category:"camera",price:90000},
  {name:"GoPro Hero",category:"camera",price:30000},
  {name:"DJI Pocket",category:"camera",price:25000},
  {name:"Canon M50",category:"camera",price:60000},
  {name:"Sony ZV-E10",category:"camera",price:75000},
  {name:"Nikon Z50",category:"camera",price:85000},
  {name:"Insta360",category:"camera",price:45000},

  // Tablets
  {name:"iPad Air",category:"tablet",price:60000},
  {name:"Samsung Tab S9",category:"tablet",price:55000},
  {name:"Lenovo Tab",category:"tablet",price:18000},
  {name:"Xiaomi Pad",category:"tablet",price:25000},
  {name:"Realme Pad",category:"tablet",price:17000},
  {name:"Honor Pad",category:"tablet",price:20000},
  {name:"Nokia Tablet",category:"tablet",price:16000},
  {name:"OnePlus Pad",category:"tablet",price:38000},
  {name:"Amazon Fire",category:"tablet",price:12000},
  {name:"Huawei MatePad",category:"tablet",price:30000},

  // TVs
  {name:"Sony Bravia",category:"tv",price:80000},
  {name:"Samsung Smart TV",category:"tv",price:70000},
  {name:"LG OLED",category:"tv",price:100000},
  {name:"Mi TV",category:"tv",price:30000},
  {name:"OnePlus TV",category:"tv",price:45000},
  {name:"TCL 4K TV",category:"tv",price:35000},
  {name:"Hisense Smart TV",category:"tv",price:32000},
  {name:"Vu GloLED",category:"tv",price:40000},
  {name:"Realme Smart TV",category:"tv",price:28000},
  {name:"Panasonic LED TV",category:"tv",price:50000},

  // Bags
  {name:"American Tourister Bag",category:"bag",price:3000},
  {name:"Skybags Backpack",category:"bag",price:2500},
  {name:"Wildcraft Hiking Bag",category:"bag",price:4000},
  {name:"Nike Gym Bag",category:"bag",price:3500},
  {name:"Puma Sports Bag",category:"bag",price:2800},
  {name:"Safari Travel Bag",category:"bag",price:5000},
  {name:"HP Laptop Bag",category:"bag",price:1500},
  {name:"Dell Backpack",category:"bag",price:1800},
  {name:"Adidas Backpack",category:"bag",price:3200},
  {name:"Tommy Hilfiger Bag",category:"bag",price:6000},

  // Speakers
  {name:"JBL Flip",category:"speaker",price:8000},
  {name:"Boat Stone",category:"speaker",price:2500},
  {name:"Sony Bluetooth Speaker",category:"speaker",price:6000},
  {name:"Marshall Speaker",category:"speaker",price:15000},
  {name:"Bose SoundLink",category:"speaker",price:18000},
  {name:"Mi Portable Speaker",category:"speaker",price:2000},
  {name:"Zebronics Speaker",category:"speaker",price:1500},
  {name:"Ultimate Ears Boom",category:"speaker",price:12000},
  {name:"Anker Soundcore",category:"speaker",price:5000},
  {name:"Philips Speaker",category:"speaker",price:3500}
];

function sendMessage() {

  const input = document.getElementById("userInput");

  const message = input.value.toLowerCase();

  const chatbox = document.getElementById("chatbox");

  if(message === "") {
    return;
  }

  chatbox.innerHTML += `
    <div class="user">
      <b>You:</b> ${message}
    </div>
  `;

  let recommendations = [];

  for(let i = 0; i < products.length; i++) {

    if(message.includes(products[i].category)) {

      recommendations.push(products[i]);
    }
  }

  let reply = "";

  if(recommendations.length > 0) {

    reply += "Here are some recommendations:<br><br>";

    recommendations.slice(0,5).forEach((item) => {

      reply += `
        ✅ <b>${item.name}</b><br>
        Category: ${item.category}<br>
        Price: ₹${item.price}<br><br>
      `;
    });

  } else {

    reply =
      "Sorry, I could not find matching products. Try searching for laptop, phone, shoes, watch, camera, tv, speaker, tablet, bag or headphones.";
  }

  chatbox.innerHTML += `
    <div class="bot">
      <b>AI:</b><br>${reply}
    </div>
  `;

  input.value = "";

  chatbox.scrollTop = chatbox.scrollHeight;
}