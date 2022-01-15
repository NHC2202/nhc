module.exports.config = {
  name: "bích",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh bích",
  commandCategory: "random-img",
  usages: "bích",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/DwMkYfQ/becba86b82e348bd11f2.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/nkddyKt/image.png",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
"https://i.ibb.co/4fvY5qw/c1cfcf916beba6b5fffa.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
   var callback = () => api.sendMessage({body:`Ảnh Pig nè!!!\nSố Ảnh: 3\n`,attachment: fs.createReadStream(__dirname + "/cache/2.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/2.jpg")).on("close",() => callback());
        };