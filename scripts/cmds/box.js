const axios = require('axios'); 
const request = require('request'); 
const fs = require("fs"); 
 module.exports = { 
         config: { 
                 name: "box", 
                 aliases: ["box"], 
                 version: "1.0", 
                 author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **// 
                 countDown: 5, 
                 role: 1, 
                 shortDescription: "set admin/change group photo,emoji,name", 
                 longDescription: "", 
                 category: "admin", 
                 guide:  { 
                         vi: "{pn} [admin,emoji,image,name]", 
                         en: "{pn} name <name> to change box mame\n{pn} emoji <emoji> to change box emoji\n{pn} image <reply to image> to chnge box image\n{pn} add [@tag] to add group admin \n{pn} del [@tag]  to remove group admin \n{pn} info to see group info" 
                 } 
         }, 
         onStart: async function ({ message, api, event, args, getText }) {
   const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]); 
         const axios = require('axios'); 
         const request = require('request'); 
         const fs = require("fs"); 
          if (args.length == 0) return api.sendMessage(`You can use:\n?box emoji [icon]\n\n?box name [box name to change]\n\n?box image [rep any image that needs to be set as box image]\n\n? box admin [tag] => it will give qtv to the person tagged\n\n?box info => All information of the group ! 
 `, event.threadID, event.messageID);   
         if (args[0] == "name") { 
 var content = args.join(" "); 
 var c = content.slice(4, 99) || event.messageReply.body; 
 api.setTitle(`${c } `, event.threadID); 
  } 
         if (args[0] == "emoji") { 
 const name = args[1] || event.messageReply.body; 
 api.changeThreadEmoji(name, event.threadID)   
  } 
 if (args[0] == "add") { 
   if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true); 
   else { 
     for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, true) 
   return;  
     } 
 } 
 else if (args[0] == "del") { 
 if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true); 
   else { 
     for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, false) 
   return;  
     } 
 } 
 if (args[0] == "image") {   
 if (event.type !== "message_reply") return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID); 
         if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID); 
         if (event.messageReply.attachments.length > 1) return api.sendMessage(`Please reply only one audio, video, photo!`, event.threadID, event.messageID); 
          var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/assets/any.png"), event.threadID, () => fs.unlinkSync(__dirname + "/assets/any.png"));         
       return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/assets/any.png')).on('close',() => callback()); 
       }; 
 if (args[0] == "info") { 
                 var threadInfo = await api.getThreadInfo(event.threadID); 
                 let threadMem = threadInfo.participantIDs.length; 
         var gendernam = []; 
         var gendernu = []; 
         var nope = []; 
         for (let z in threadInfo.userInfo) { 
                 var gioitinhone = threadInfo.userInfo[z].gender; 
  
                 var nName = threadInfo.userInfo[z].name; 
  
                 if (gioitinhone == 'MALE') { 
                         gendernam.push(z + gioitinhone); 
                 } else if (gioitinhone == 'FEMALE') { 
                         gendernu.push(gioitinhone); 
                 } else { 
                         nope.push(nName); 
                 } 
         } 
         var nam = gendernam.length; 
         var nu = gendernu.length; 
         let qtv = threadInfo.adminIDs.length; 
         let sl = threadInfo.messageCount; 
         let icon = threadInfo.emoji; 
         let threadName = threadInfo.threadName; 
         let id = threadInfo.threadID; 
         var listad = ''; 
         var qtv2 = threadInfo.adminIDs; 
         for (let i = 0; i < qtv2.length; i++) { 
 const infu = (await api.getUserInfo(qtv2[i].id)); 
 const name = infu[qtv2[i].id].name; 
                 listad += '•' + name + '\n'; 
         } 
         let sex = threadInfo.approvalMode; 
         var pd = sex == false ? 'Turn off' : sex == true ? 'turn on' : 'Kh'; 
         var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕'; 
          var callback = () => 
                                 api.sendMessage( 
                                         { 
                                                 body: `Box name: ${threadName}\nID Box: ${id}\n${pdd} Approve: ${pd}\nEmoji: ${icon}\n-Information:\nTotal ${threadMem} member\n👨‍🦰Male: ${nam} member \n👩‍🦰Female: ${nu}member\n\n🕵️‍♂️With ${qtv} Administrators include:\n${listad}\nTotal number of messages: ${sl} tin.`, 
                                                 attachment: fs.createReadStream(__dirname + '/assets/any.png') 
                                         }, 
                                         event.threadID, 
                                         () => fs.unlinkSync(__dirname + '/assets/any.png'), 
                                         event.messageID 
                                 ); 
                         return request(encodeURI(`${threadInfo.imageSrc}`)) 
                                 .pipe(fs.createWriteStream(__dirname + '/assets/any.png')) 
                                 .on('close', () => callback()); 
  
         }           
   } 
 };