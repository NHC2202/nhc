const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "hùng",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz (fix lại by Nguyên)",
  description: "Ảnh hùng",
  commandCategory: "Random-img",
  usages: "hùng",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  var link = [
  "https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
"https://i.ibb.co/tP5yqMy/H.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Ảnh hùng\nSố Ảnh: ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
     }
   };
