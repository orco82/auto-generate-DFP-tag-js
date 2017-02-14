function getRandomId() {
    return "ad-" + Date.now();
};

//create random gpt id for each slot on your page
var gptid1 = getRandomId();
var gptid2 = getRandomId()+1;
var gptid3 = getRandomId()+2;

//define all your slots on your page
googletag.cmd.push(function() {
    googletag.defineSlot('/xxxxxxxx/ad1', [728, 90], gptid1).addService(googletag.pubads());
    googletag.defineSlot('/xxxxxxxx/ad2', [300, 250], gptid2).addService(googletag.pubads());
    googletag.defineSlot('/xxxxxxxx/ad3', [600, 300], gptid3).addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});

// looking for <div id="ad1"></div> and replace it to DFP tag
if(document.getElementById("ad1")){
   document.getElementById('ad1').setAttribute('id', gptid1);
   var scr1 = document.createElement('script');
   var scrcon1 = document.createTextNode( "googletag.cmd.push(function() {googletag.display('" + gptid1 + "');});" );
   document.getElementById('' + gptid1 + '').appendChild(scr1);
   scr1.appendChild( scrcon1 );
}

// looking for <div id="ad2"></div> and replace it to DFP tag
if(document.getElementById("ad2")){
   document.getElementById('ad2').setAttribute('id', gptid2);
   var scr2 = document.createElement('script');
   var scrcon2 = document.createTextNode( "googletag.cmd.push(function() {googletag.display('" + gptid2 + "');});" );
   document.getElementById('' + gptid2 + '').appendChild(scr2);
   scr2.appendChild( scrcon2 );
}

// looking for <div id="ad3"></div> and replace it to DFP tag
if(document.getElementById("ad3")){
   document.getElementById('ad3').setAttribute('id', gptid3);
   var scr3 = document.createElement('script');
   var scrcon3 = document.createTextNode( "googletag.cmd.push(function() {googletag.display('" + gptid3 + "');});" );
   document.getElementById('' + gptid3 + '').appendChild(scr3);
   scr3.appendChild( scrcon3 );
}
