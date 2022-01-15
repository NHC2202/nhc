module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "lat",
  description: "...",
  commandCategory: "Image",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://api.leanhtruong.net/v2/image.php?api_key=LEANHTRUONG=8VfABZhi9D7NoIU4jQPbwT2iIaPvTToshn41QJTZNiNkeMsCMV=APIKEY=PLANFREE&image=boy`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}