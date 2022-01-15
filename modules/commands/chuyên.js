const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "chuyên",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz (fix lại by Nguyên)",
  description: "Ảnh chuyên",
  commandCategory: "Random-img",
  usages: "chuyên",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  var link = [
  "httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/g42kS73/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"httphttps://i.ibb.co/X2xLq8K/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
"https://i.ibb.co/g42kS73/image.png",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
   var callback = () => api.sendMessage({body:`Ảnh Chuyên siu nhân!!!\nSố Ảnh: 3\n`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
        };
