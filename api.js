window.addEventListener('load', ()=>{
"use strict";
let year, month, date, url, xhr, res;
year = new Date().getFullYear();
month = new Date().getMonth()+1;
date = new Date().getDate();
url = "https://api3.adsterratools.com/publisher/db5da897145c936dcf8a88f70198dd1b/stats.json?domain=1593216&country=ng&placement=16398057&start_date=2021-08-11&finish_date="+year+"-"+month+"-"+date+"&group_by=date";
xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = ()=> {
   if (xhr.readyState === 4) {
      res = xhr.responseText;
      document.querySelector("#stats").innerHTML = res;
   }};
xhr.send();
});