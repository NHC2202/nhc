 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["em là bot cute ặ", "Ơi ơi bot nghe !!", "Rồi kêu gì nói lẹ", "Chơi bê đê hong", "Kêu quài -.-", "Ú mai gót", "1+1=3 nha", "Ếch ộp ếch ộp🐸", "Tiếc quá cậu đã bị ban","tớ có mấy câu này á cứ kêu tớ không biết mày thiểu năng à ?", "Em đây~~~~", "Admin seen kìa em iu", "Tớ mệt òi nha!", "Dễ thương không có trong danh sách của cậu", "Ultr?", "Có giấy súc không?","Dùng callad đi kêu tớ có con cặc gì đâu?", "Đừngg sướng lắm anh ơi", "Rên với em nhé a á á á", "ớ ớ ớ ớ á á á á", "Con chim bé uwu", "Vl con này thích tớ mn ạ", "Đụ với anh nè em", "Tớ báo công an", "Xin lỗi :((( ", "4 nháy 1 đêm chịu nổi k" ,"Êyyyyyyyyyy đồ nồn lừng", "Spam 5 lần 60 giây thì bị ban 2 ngày(mãi mãi)", "Đang cho bạn con cu", "Đút tutu thôi em đau :'(", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Gì đó thánh bú liếm","Con lồn kêu quài mày", "Lên giường k em??","Quá ghê gớm....🌚😳 Và đây là Folontilô!😱😱 Folontilô ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!! *music🤯 Thẹn thùng nhìn em quay gót đi mãi😞😞💔 Anh đứng chết lặng trong mưa😭😭 Dù rằng bên😊😊 em đã có ai Nhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...","admin đã nói :mày là con dthw"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bye")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Hả bot đây nè :3", threadID);
  };

  if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("️Nói jz con lợn này, ý con lợn là bot là cục cưng của con lợn hả? còn lâuu", threadID);
  };
  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

   if ((event.body.toLowerCase() == "Bot lồn")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "180520022")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Đoàn để được hỗ trợ\nLink fb nè: https://www.facebook.com/uid", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "000000")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Đoàn để được hỗ trợ\nLink fb nè: https://www.facebook.com/uid", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":>")) {
    return api.sendMessage("OwO 😠", threadID);
  };
  
  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == ":))))")) {
    return api.sendMessage("Chít Chít🐰", threadID);
  };

  if ((event.body.toLowerCase() == "cmm") || (event.body.toLowerCase() == "Cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "ngu") || (event.body.toLowerCase() == "Ngu")) {
    return api.sendMessage("Ngu cái lồn mẹ mày ", threadID);
  };

  if ((event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "Bot lồn")) {
    return api.sendMessage("Chửi con đĩ mẹ mày", threadID);
  };

  if ((event.body.toLowerCase() == "dcm bot") || (event.body.toLowerCase() == "Dcm bot")) {
    return api.sendMessage("Dcm là con đĩ mẹ mày đó", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "Chào")) {
    return api.sendMessage("Hello honey ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "Hi mn")) {
    return api.sendMessage("Xin chào zợ iu nhó❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu ai") || (event.body.toLowerCase() == "Bot yêu ai")) {
    return api.sendMessage("Bot iu mỗi admin của bot thoi❤️", threadID);
  };

  if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "Hello")) {
    return api.sendMessage("Chào bạn nhó ❤️", threadID);
  };

 if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("🐸 Ộp Ộp", threadID);
  };

  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("🐸🐸🐸 ", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "Kkk")) {
    return api.sendMessage("Muhoaahhhhhhh 🐰🐰", threadID);
  };
  
  if ((event.body.toLowerCase() == "info") || (event.body.toLowerCase() == "Info")) {
    return api.sendMessage("!cmd load info", threadID);
  };
  
  if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("🐰 Chítt❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "Bot ngu")) {
    return api.sendMessage("NGu con đĩ mẹ mày", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HaHa")) {
    return api.sendMessage("Cười cc", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "Kkk")) {
    return api.sendMessage("Cười cái l gì mà cười", threadID);
  };

  if ((event.body.toLowerCase() == "ũmg") || (event.body.toLowerCase() == "Ũmg")) {
    return api.sendMessage("Ũ kon cặc", threadID);
  };

  if ((event.body.toLowerCase() == "spam") || (event.body.toLowerCase() == "Spam")) {
    return api.sendMessage("!spamban", threadID);
  };

  if ((event.body.toLowerCase() == "/") || (event.body.toLowerCase() == "#")) {
    return api.sendMessage("Lệnh của bố mày là / nhấn cái lồn gì v ?", threadID);
  };

  if ((event.body.toLowerCase() == "hảo") || (event.body.toLowerCase() == "Hảo")) {
    return api.sendMessage("Đb hảo hoài : )", threadID);
  };

  if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("🐰🐰 Chípp", threadID);
  };

  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("Chípyy 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == "=)))))")) {
    return api.sendMessage("Chúp Chúp 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "=))))))") || (event.body.toLowerCase() == ":vv")) {
    return api.sendMessage("Chút Chút 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "Rồi")) {
    return api.sendMessage("Biết cl gì mà rồi", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "Ừa")) {
    return api.sendMessage("Ừa ừa cái gì, dạ đi cho cây kẹo 🍭", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("Ngu kêu dạ cũng dạ hả?, thử nói đéo đi", threadID);
  };

  if ((event.body.toLowerCase() == "đéo") || (event.body.toLowerCase() == "Đéo")) {
    return api.sendMessage("con đĩ mắc dại này phả trị lại mới được", threadID);
  };


  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "Hát đi bot")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };

  if ((event.body.toLowerCase() == "ad") || (event.body.toLowerCase() == "Ad")) {
    return api.sendMessage("Gọi admin bot làm gì đấy, có thắc mắc thì nt qua fb admin đi: https://www.facebook.com/uid", threadID);
  };

  if ((event.body.toLowerCase() == "chửi nó đi bot") || (event.body.toLowerCase() == "Chửi nó đi bot")) {
    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);
  };

  if ((event.body.toLowerCase() == "hăi") || (event.body.toLowerCase() == "Hăi")) {
    return api.sendMessage("l mẹ hăi là cc j nứng hả :)", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "Chào cậu")) {
    return api.sendMessage("Hí chào bạn ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == "-,-")) {
    return api.sendMessage("️🐰 :33", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "Tt đi nào mng")) {
    return api.sendMessage("️Hong tương tác xíu qtv kick hết bây giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "Ờ")) {
    return api.sendMessage("️Ờ cái lồn", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "Nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu trân hong") || (event.body.toLowerCase() == "Bot yêu trân hong")) {
    return api.sendMessage("️iu con cặc", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "Admin m là ai vậy bot")) {
    return api.sendMessage("️Admin tao tên Đoàn có gì dùng lệnh -ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "Flop quá")) {
    return api.sendMessage("️Ra tương tác kh xíu qtv kick hết bây giờ cđ ơi", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "Clmm bot")) {
    return api.sendMessage("️Chửi cái đb m hả con lợn này : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "Bot cc")) {
    return api.sendMessage("️Bố m ban cho m khỏi dùng bây giờ : )", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "Cc bot")) {
    return api.sendMessage("️Nói tiếng nữa bố cho ăn ban : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "Bot dthw quá")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };
  
  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "Đm")) {
    return api.sendMessage("️Thích loạn luân hay gì mà đm hoài vậy", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "Bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "Bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "im đi tao tắt mày giờ") || (event.body.toLowerCase() == "Im đi tao tắt mày giờ")) {
    return api.sendMessage("Huhu nín liền nèê :<<< 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "Bot cút đi")) {
    return api.sendMessage("Mày cút rồi bố mày cút :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "Bot chửi cái lon gì")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "Bot có buồn ko")) {
    return api.sendMessage("Mng không chửi bot là bot vui lắm rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "Bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "Bot đi ngủ đi")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "Bot ăn cơn chưa")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "Bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin là ai z") || (event.body.toLowerCase() == "Admin là ai z")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/uid ", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "Bot làm thơ đi")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("Đừng chửi thề , mình méc Qtv đóa :)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }