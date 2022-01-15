const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "thái",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thái",
  description: "Ảnh thái",
  commandCategory: "Random-img",
  usages: "thái",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  var link = [
  "https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/yWcXSzc/image.png",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/rvzjzRC/z2905318689282-5a014093fc024602a35f08066a6eec555.jpg",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
"https://i.ibb.co/WGSwhZy/image.png",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
   var callback = () => api.sendMessage({body:`Ảnh Thái Văn Meo\nSố Ảnh: 3\n`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
        };
