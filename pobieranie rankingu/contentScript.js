function psr(s,fz,ap){fetch(location.href.slice(0,19)+`/ranking/get?page=`+(s||1)+`&per_page=`+25).then(r=>r.json()).then(d=>fz(cd(d),ap)).catch(r=>fz(-1,ap))}
function cd(d){if(typeof d!="object"){return -1}if(d.status!="success"){return -1}return( d.rankings||{}).data||-1}
function u(d,ap)
{
	if(!d|| !Array.isArray(d)){return setTimeout(()=>{psr(ap.s,u,ap)},pp+2107)}
	for(let w=0;w<d.length;w++){if(d[w].points==0){break}zr[d[w].rank]={p:d[w].points,n:d[w].model.name,k:d[w].model.color,id:d[w].model.id,a:d[w].model.avatar_url.small,s:d[w].model.slug,u:d[w].model.url};oe=d[w].points}
	if((oe!=-1&&(oe<1||zr.length>=7701))||0){return zapisz()}
	ap.s++
	setTimeout(()=>{psr(ap.s,u,ap)},pp+1770)
	console.clear()
	console.log("zapisanych pozycji jest już: "+(zr.length-1))
	console.log("zapisane pozycje kończą się użytkownikiem "+zr[zr.length-1].n)
	console.log("liczba jego plusów wynosi: "+oe)
}
function zapisz()
{
	let s=["",""]
	for (let a=1 ; a<zr.length ; a++)
	{
		s[0]+=a+".\t"+zr[a].n+":\t"+zr[a].p+"\r\n"
		let k=""
		for (let b=1 ; b<5 ; b++){if (["","#666666","#8BD82B","#DE2221","F0FF0a"][b]==zr[a].k){k=",k:"+b;break}}
		let aw=``
		if (zr[a].a!="https://i1.jbzd.com.pl/users/default.jpg"){aw=`,a:`+JSON.stringify(zr[a].a.slice(35))}
		s[1]+=`{n:`+JSON.stringify(zr[a].n)+`,s:`+JSON.stringify(zr[a].s)+`,p:`+zr[a].p+`,id:`+zr[a].id+`,u:`+JSON.stringify(zr[a].u.slice(31))+k+aw+`},`
	}
	zapiszStringa(s[0],"ranking-tekst "+dzisiejszaData())
	s[1]=usunZnaki(s[1],["<",">"])
	s[1]="<!DOCTYPE html><html><head><title>ranking JBZD dnia "+dzisiejszaData()+"</title><meta charset=\"utf-8\"/>\r\n<style type=\"text/css\">\r\n	.pozycja {width: 500px; background: #313131; padding: 7px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white;}\r\n	.rank {display: inline-block; width: 57px; font-weight: 700;}\r\n	.rank::befor{content: \"	\"}\r\n	.rank::after{content: \".\"}\r\n	.nick {display: inline-block; width: 327px;}\r\n	.avatar1 {display: inline-block; margin: 0 17px;}\r\n	.avatar2 {border-radius: 47%;}\r\n	.plusy {display: inline-block; color: #f0cc00; font-weight: 700;}\r\n	.plusy::before {content: \"+ \"}\r\n</style>\r\n<script type=\"text/javascript\">\r\nlet d=["+s[1]+"]\r\nlet s=\"\"\r\nfor(let a=0 ; a<d.length ; a++){s+=pozycja(a+1,d[a])}\r\ndocument.write(s)\r\nfunction pozycja(nr,d)\r\n{\r\n	let a=`https://i1.jbzd.com.pl/users/small/`+(d.a||\"30J8yZ0ma3oxyVtQJVxIYtxRhGFITNRX.jpg\");if (!d.a){a=`https://i1.jbzd.com.pl/users/default.jpg`}\r\n	setTimeout(()=>{document.getElementById(\"u\"+nr).innerHTML='<img class=\"avatar2\" src=\"'+a+' \"width=\"25\" height=\"25\">'},nr*50+3000)\r\n	return '<a href=\"https://jbzd.com.pl/uzytkownik/'+d.u+'\" class=\"pozycja\"><div class=\"rank\" style=\"color:'+([\"\",\"#666666\",\"#8BD82B\",\"#DE2221\",\"F0FF0a\"][d.k]||\"white\")+'\">'+nr+'</div><div class=\"avatar1\" id=\"u'+nr+'\"></div><div class=\"nick\">'+d.n+' &nbsp; <span style=\"opacity:0.07;\">'+(d.s||\"\")+' &nbsp '+(d.id||\"\")+'</span></div><div class=\"plusy\">'+(d.p||\"?\")+'</div></a>'\r\n}\r\n</script><body id=\"boody\" style=\"font-family: Open Sans,sans-serif; background-color: #252525; color:white; font-size: 14px;\"></body></html>\r\n"
	//s[1]="<!DOCTYPE html><html><head><title>ranking JBZD dnia "+dzisiejszaData()+"</title><meta charset=\"utf-8\"/>\r\n<style type=\"text/css\">\r\n	.pozycja {width: 500px; background: #313131; padding: 7px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white;}\r\n	.rank {display: inline-block; width: 57px; font-weight: 700;}\r\n	.rank::befor{content: \"\t\"}\r\n	.rank::after{content: \".\"}\r\n	.nick {display: inline-block; width: 327px;}\r\n	.avatar {display: inline-block; border-radius: 47%; margin: 0 17px;}\r\n	.plusy {display: inline-block; color: #f0cc00; font-weight: 700;}\r\n	.plusy::before {content: \"+ \"}\r\n</style>\r\n<script type=\"text/javascript\">\r\nlet d=["+s[1]+"];let s=``;for (let a=0 ; a<d.length ; a++){s+=pozycja(a+1,d[a])};document.write(s)\r\nfunction pozycja(nr,d){let a=`https://i1.jbzd.com.pl/users/small/`+(d.a||\"30J8yZ0ma3oxyVtQJVxIYtxRhGFITNRX.jpg\");if (!d.a){a=`https://i1.jbzd.com.pl/users/default.jpg`};return '<a href=\"https://jbzd.com.pl/uzytkownik/'+d.u+'\" class=\"pozycja\"><div class=\"rank\" style=\"color:'+([\"\",\"#666666\",\"#8BD82B\",\"#DE2221\",\"F0FF0a\"][d.k]||\"white\")+'\">'+nr+'</div><img class=\"avatar\" src=\"'+a+'\"width=\"25\" height=\"25\"><div class=\"nick\">'+d.n+' &nbsp; <span style=\"opacity:0.07;\">'+(d.s||\"\")+' &nbsp '+(d.id||\"\")+'</span></div><div class=\"plusy\">'+(d.p||\"?\")+'</div></a>'}\r\n</script><body id=\"boody\" style=\"font-family: Open Sans,sans-serif; background-color: #252525; color:white; font-size: 14px;\"></body></html>"
	zapiszStringa(s[1],"ranking-html "+dzisiejszaData()+" (dopisz zamiast tego po kropce html)")
	let zapis=localStorage.getItem("rankingJBZD")
	zapis=JSON.parse(zapis||"[]")||[]
	zapis[zapis.length]={nazwa:"ranking-html "+dzisiejszaData(),dane:s[0]}
	localStorage.setItem("rankingJBZD",JSON.stringify(zapis))
}
function zapiszStringa(string,nazwa)
{
  (function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});
    var blob = new Blob([string], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, nazwa+'.txt');
}
function dzisiejszaData()
{
  let tym=new Date
  let string=""
  string+=tym.getDate().toString().padStart(2, '0')+" "
  string+=["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"][tym.getMonth()]+" "
  string+=tym.getFullYear().toString().padStart(2, '0')+"r. godzina "
  string+=tym.getHours().toString().padStart(2, '0')+""
  //string+=tym.getMinutes().toString().padStart(2, '0')+""
  return string
}
function usunZnaki(tekst,znaki)
{
	let s=""
	for (let a=0 ; a<tekst.length ; a++)
	{
		let q=1
		for (let b=0 ; b<znaki.length ; b++){if (tekst[a]==znaki[b]){q=0;break}}
		if (q){s+=tekst[a]}
	}
	return s
}
function uruchom()
{
	opcje.innerHTML=`<li><div class="ranking-models-name">trwa pobieranie rankingu <span id="procent"></span></div></li>`
	opcje.innerHTML+=`<li><div class="ranking-models-name">ilość zapisanych pozycji: <span id="iloscPozycji"></span></div></li>`
	opcje.innerHTML+=`<li><div class="ranking-models-name">ostatnio zapisany użytkownik:</div></li>`
	opcje.innerHTML+=`<li><a href=""><div class="ranking-models-rank"><span class="icon ion-trophy"></span>\n                        <span id="pozycja"></span>.\n                    </div> <div class="ranking-models-avatar"><img id="awatar" src="https://i1.jbzd.com.pl/users/default.jpg" alt=""></div> <div id="nick" class="ranking-models-name">na początku był chaos</div> <div class="ranking-models-points"><span class="icon icon-spear"></span>\n                        <span id="plusy"></span>\n                    </div></a></li>`
	opcje.innerHTML+=`<li style="opacity:0;"><div class="ranking-models-name">-------</div></li>`
	iloscPozycji=document.getElementById(`iloscPozycji`)
	pozycja=document.getElementById(`pozycja`)
	awatar=document.getElementById(`awatar`)
	nick=document.getElementById(`nick`)
	plusy=document.getElementById(`plusy`)
	procent=document.getElementById(`procent`)
	u(0,{s:1})
	setTimeout(()=>{prezentacja(1)},2000)
}
function prezentacja(nr)
{
	if (!zr[nr]){return setTimeout(()=>{prezentacja(nr)},120)}
	iloscPozycji.innerHTML=(zr.length-1)
	procent.innerHTML=(Math.floor((zr.length/7701)*1000)/10)+"%"
	pozycja.innerHTML=nr
	awatar.src=zr[nr].a
	nick.innerHTML=zr[nr].n
	plusy.innerHTML=zr[nr].p
	setTimeout(()=>{prezentacja(nr+1)},120)
}
function porownanie()
{
	zapis=localStorage.getItem("rankingJBZD")
	zapis=JSON.parse(zapis||"[]")||[]
	if (zapis.length<2){return alert("nie ma w pamięci dwóch rankingów do porównania")}
	opcje.innerHTML=`<li><div class="ranking-models-name">wybierz dwa rankingi do porównania</div></li>`
	for (let a=0 ; a<zapis.length ; a++)
	{
		opcje.innerHTML+=`<li id="wybor:`+a+`"><div class="ranking-models-name">`+zapis[a].nazwa+`</div></li>`
	}
	opcje.innerHTML+=`<li id="pokazPorownanie"><div class="ranking-models-name">pokaż porównanie</div></li>`
	document.getElementById("pokazPorownanie").onclick=pokazPorownanie
	for (let a=0 ; a<zapis.length ; a++)
	{
		document.getElementById("wybor:"+a).onclick = new Function("zapis["+a+"].wybrany=Math.abs((zapis["+a+"].wybrany||0)-1);if(zapis["+a+"].wybrany){document.getElementById('wybor:"+a+"').style.background='#c03e3f'}else{document.getElementById('wybor:"+a+"').style.background='#313131'}")
	}
}
function pokazPorownanie()
{
	let ilosc=0
	for (let a=0 ; a<zapis.length ; a++)
	{
		ilosc+=(zapis[a].wybrany||0)
		if (ilosc>2){return alert("zaznacz tylko dwa rankingi")}
	}
	if (ilosc!=2){return alert("wybierz dwa rankingi do porównania")}
	const styleElement = document.createElement('style');
	styleElement.innerHTML = `
		.pozycja {min-height: 2.27em; min-width: 52.7em; background: #313131; padding: 4px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white; float: left;}
		.pozycjaRecesywna {min-height: 2.27em; min-width: 52.7em; background: #313131; padding: 4px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em;}
		.znacznik1 {min-width: 3.57em; min-height: 2.27em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}
		.znacznik2 {min-width: 2.37em; min-height: 2.27em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}
		.znacznik3 {min-width: 3.57em; min-height: 2.27em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}
		.nick {color:gold;}`
	document.head.appendChild(styleElement);
	let rs=0
	let rn=0
	for (let a=0 ; a<zapis.length ; a++)
	{
		if(zapis[a].wybrany)
		{
			if (!rs){rs=wczytajRanking(zapis[a].dane)}
			else if (!rn){rn=wczytajRanking(zapis[a].dane)}
		}
		else if (rn){break}
	}
	pokaz(test(rs,rn))
}
function wczytajRanking(r)
{
	if (!r){console.log("coś poszło nie tak");return alert("coś poszło nie tak")}
	let rr=[]
	let rrr=""
	for (let a=0 ; a<r.length ; a++)
	{
		if (r[a]=="\n"){rr[rr.length]=rrr;rrr=""}
		else {rrr+=r[a]}
	}
	rr[rr.length]=rrr
	r=rr;rr=[];rrr={}
	for (let a=0 ; a<r.length ; a++)
	{
		rrr=r[a].match(/(?<pozycja>\d+)\.\t(?<nick>.*):\t(?<plusy>\d+)/i)
		if (rrr && typeof rrr=="object")
		{
			rrr=rrr.groups
			if (Number(rrr.pozycja)>0)
			{
				if (rrr.nick && rrr.plusy)
				{
					rr[Number(rrr.pozycja)]={nick:rrr.nick||"nieodczytany",plusy:Number(rrr.plusy)||0}
				}
			}
		}
	}
	for (let a=0 ; a<rr.length ; a++){if (!rr[a]){rr[a]={nick:"pozycja uszkodzona",plusy:0}}}
	return rr
}
function test(r1,r2)
{
	if(!r1||!r2){console.log("coś poszło nie tak");return alert("coś poszło nie tak")}
	let raport=[]
	let nrRaportu=0
	for (let a=1 ; a<Math.floor(Math.min(r1.length,r2.length)*0.77) ; a++)
	{
		nrRaportu=(a*2)-1
		if (!raport[nrRaportu]){raport[nrRaportu]={}}
		raport[nrRaportu].nick=r1[a].nick
		raport[nrRaportu].pozycja=a
		raport[nrRaportu].zmianaPozycji=0
		raport[nrRaportu].zmianaSasiadow=0
		raport[nrRaportu].przeskok=0
		if (r1[a].nick==r2[a].nick)
		{
			raport[nrRaportu].zmianaSasiadow=czyZmianaSasiadow(a,a)
			raport[nrRaportu].zmianaPlosow=((r2[a]||{}).plusy||0)-((r1[a]||{}).plusy||0)
		}
		else
		{
			let t=1
			for (let b=-7 ; b<8 ; b++)
			{
				if (a+b<1){continue}
				if ((r1[a]||{}).nick==(r2[a+b]||{}).nick)
				{
					if ((r2[a]||{}).nick==(r1[a+b]||{}).nick)
					{
						if (raport[nrRaportu-1]){raport[nrRaportu-1].wcisnalSie=0}
						raport[nrRaportu].wymianaPozycji=[a+b,(r1[a+b]||{}).nick]
						raport[nrRaportu].zmianaPozycji=b
					}
					else
					{
						raport[nrRaportu].zmianaPozycji=b
					}
					t=0
					raport[nrRaportu].zmianaPlosow=((r2[a+b]||{}).plusy||0)-((r1[a]||{}).plusy||0)
					raport[nrRaportu].zmianaSasiadow=czyZmianaSasiadow(a,a+b)
					raport[nrRaportu].przeskok=czyPrzeskok(a,a+b)
					if (Math.abs(b)>1)
					{
						if (!raport[((a+b)*2)-1]){raport[((a+b)*2)-1]={}}
						if (((a+b)*2)-2<0){}
						else if (!(raport[((a+b)*2)-2]||{}).wcisnalSie)
						{
							raport[((a+b)*2)-1].pojawilSie=[(r1[a]||{nick:"nie wiem"}).nick,a]
						}
					}
				}
			}
			if (t)
			{
				//nie znaleziono w obrębie starej pozycji
				for (let b=1 ; b<r2.length ; b++)
				{
					if ((r1[a]||{}).nick==(r2[b]||{}).nick)
					{
						if ((r2[a]||{}).nick==(r1[b]||{}).nick)
						{
							raport[nrRaportu].wymianaPozycji=[b,(r1[b]||{}).nick]
							raport[nrRaportu].zmianaPozycji=b-a
						}
						else
						{
							raport[nrRaportu].zmianaPozycji=b-a
						}
						t=0
						raport[nrRaportu].zmianaPlosow=((r2[b]||{}).plusy||0)-((r1[a]||{}).plusy||0)
						raport[nrRaportu].zmianaSasiadow=czyZmianaSasiadow(a,b)
						raport[nrRaportu].przeskok=czyPrzeskok(a,b)
						if (!raport[(b*2)-1]){raport[(b*2)-1]={}}
						if ((b*2)-2<0){}
						else if (!(raport[(b*2)-2]||{}).wcisnalSie){raport[(b*2)-1].pojawilSie=[(r1[a]||{nick:"nie wiem"}).nick,a]}
					}
				}
				if (t)
				{
					//nie znaleziono w nowym rankingu
					raport[nrRaportu].zanik=1
				}
			}
		}
		if (true)
		{
			let t=1
			for (let b=0 ; b<r1.length ; b++)
			{
				if ((r2[a]||{}).nick==(r1[b]||{}).nick)
				{
					t=0
					if (t&&(r1[a-1]||{}).nick==(r2[a-1]||{}).nick&&(r1[a+1]||{}).nick==(r2[a+1]||{}).nick)
					{
						raport[nrRaportu].pojawilSie=[(r2[a]||{}).nick,b]
					}
				}
			}
			if (t)
			{
				raport[nrRaportu].nowy=(r2[a]||{}).nick
			}
		}
		//obsługa pozycji wcześniej
		if (((r1[a]||{nick:"!"}).nick!=(r2[a]||{nick:"?"}).nick)&&(((r1[a-1]||{nick:"!"}).nick==(r2[a-1]||{nick:"?"}).nick&&(r1[a]||{nick:"!"}).nick==(r2[a+1]||{nick:"?"}).nick)||((a>1&&(r1[a-1]||{nick:"!"}).nick==(r2[a-2]||{nick:"?"}).nick&&(r1[a]||{nick:"!"}).nick==(r2[a]||{nick:"?"}).nick))))
		{
			let t=1
			for (let b=1 ; b<r1.length ; b++)
			{
				if ((r1[b]||{}).nick==(r2[a]||{}).nick)
				{
					raport[nrRaportu-1]={wcisnalSie:[(r2[a]||{}).nick,b,(r1[a]||{nick:"nieznany"}).nick]}
					raport[nrRaportu].pojawilSie=0
					raport[nrRaportu].nowy=0
					t=0
				}
			}
			if (t)
			{
				raport[nrRaportu-1]={wcisnalSieNowy:[(r2[a]||{}).nick,0,(r1[a]||{nick:"nieznany"}).nick]}
				raport[nrRaportu].pojawilSie=0
				raport[nrRaportu].nowy=0
			}
		}
	}
	return raport
	function czyZmianaSasiadow(p1,p2)
	{
		let zmiana=[1,1]
		if ((r1[p1-1]||{nick:"-"}).nick==(r2[p2-1]||{nick:"-"}).nick){zmiana[0]=0}
		else if ((r1[p1-2]||{nick:"-"}).nick==(r2[p2-2]||{nick:"-"}).nick){zmiana[0]=0.5}
		else
		{
			if ((r1[p1-1]||{nick:"-"}).nick==(r2[p2-2]||{nick:"-"}).nick){zmiana[0]-=0.25}
			if ((r1[p1-2]||{nick:"-"}).nick==(r2[p2-1]||{nick:"-"}).nick){zmiana[0]-=0.25}
		}
		//
		if ((r1[p1+1]||{nick:"-"}).nick==(r2[p2+1]||{nick:"-"}).nick){zmiana[1]=0}
		else if ((r1[p1+2]||{nick:"-"}).nick==(r2[p2+2]||{nick:"-"}).nick){zmiana[1]=0.5}
		else
		{
			if ((r1[p1+1]||{nick:"-"}).nick==(r2[p2+2]||{nick:"-"}).nick){zmiana[1]-=0.25}
			if ((r1[p1+2]||{nick:"-"}).nick==(r2[p2+1]||{nick:"-"}).nick){zmiana[1]-=0.25}
		}
		return (zmiana[0]+zmiana[1])/2
	}
	function czyPrzeskok(pozycjaStart,pozycjaKoniec)
	{
		let t=1
		if (pozycjaStart>pozycjaKoniec)
		{
			let tym=pozycjaKoniec
			pozycjaKoniec=pozycjaStart
			pozycjaStart=tym
			t=-1
		}
		let przeskok=0
		for (let a=pozycjaStart+1 ; a<pozycjaKoniec ; a++)
		{
			if ((r1[a]||{}).nick==(r2[a]||{}).nick){przeskok+=t}
			else {return 0}
		}
		return przeskok
	}
}
function pokaz(raport)
{
	console.clear()
	console.log("oto raport:")
	console.log(raport)
	let s=""
	for (let a=0 ; a<raport.length ; a++)
	{
		if (raport[a])
		{
			if (raport[a].pozycja<(raport.length*0.97) || /7/.test(raport[a].pozycja+""))
			{
				s+=`<div class="znacznik2">`+(raport[a].pozycja||" ")+`</div>`
				let t=stringPojawieniaSieIzaniku(raport[a].nowy||raport[a].wcisnalSieNowy,raport[a].zanik)
				if (!t){t=stringCiekawostki(raport[a].wymianaPozycji,raport[a].przeskok,raport[a].wcisnalSie||raport[a].wcisnalSieNowy,raport[a].zmianaPlosow||0)}
				s+=t
				s+=stringZmianaPozycji(raport[a].zmianaPozycji,raport[a].zmianaSasiadow,raport[a].zanik,raport[a].zmianaPlosow||0)
				s+=`<div class="`+["pozycjaRecesywna","pozycja"][a%2]+`">`+stringInformacji(raport[a])+`</div>`
				s+=`<div style="clear:both;"></div>`
			}
		}
	}
	document.getElementsByClassName(`main page`)[0].innerHTML=s
	document.getElementsByClassName(`main page`)[0].style.minWidth="977px"
	if (prompt("jeżeli chcesz zapisać porównanie w HTML wpisz drukowanymi TAK")=="TAK")
	{
		s=`<!DOCTYPE html><html><head><title>zmiany w rankingu z dnia `+dzisiejszaData()+`</title><meta charset="utf-8"/><style type="text/css">.pozycja {min-height: 1.7em; min-width: 44em; background: #313131; padding: 4px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white; float: left;}.pozycjaRecesywna {min-height: 1.7em; min-width: 44em; background: #313131; padding: 4px; align-items: center; display: flex; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em;}.znacznik1 {min-width: 1.9em; min-height: 1.7em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}.znacznik2 {min-width: 2.1em; min-height: 1.7em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}.znacznik3 {min-width: 2.6em; min-height: 1.7em; background: #313131; padding: 4px; margin:2px; text-decoration: none; color:white; float: left; border-radius: 0.7em; text-align: center;}.nick {color:gold;}</style><body id="boody" style="font-family: Open Sans,sans-serif; background-color: #252525; color:white; font-size: 10px;"><div style="position:relative; left:50%; margin-left:-300px;">`+s+`,</div></body></html>`
		zapiszStringa(s,"zmiany w rankingu z dnia "+dzisiejszaData()+"(żeby działało zamiast tego dopisz po kropce html)")
	}
	function stringZmianaPozycji(zmiana,zmianaSasiadow,zanik,zmianaPlosow)
	{
		if (zanik){return `<div class="znacznik3"></div>`}
		let s=""
		if (zmiana>0)
		{
			if (Math.abs(zmiana)>15){s+=`<div style="background:#750000;" class="znacznik3">▼`+Math.abs(zmiana)+`</div>`}
			else if (Math.abs(zmiana)>5){s+=`<div style="background:#751b1b;" class="znacznik3">▼`+Math.abs(zmiana)+`</div>`}
			else 
			{
				if (zmianaSasiadow<0.4){s+=`<div style="background:#4d2f2f;" class="znacznik3">▼`+Math.abs(zmiana)+`</div>`}
				else {s+=`<div style="background:#752f2f;" class="znacznik3">▼`+Math.abs(zmiana)+`</div>`}
			}
		}
		else if (zmiana<0)
		{
			if (Math.abs(zmiana)>15 && zmianaPlosow>0){s+=`<div style="background:#2fa707;" class="znacznik3">▲`+Math.abs(zmiana)+`</div>`}
			else if (Math.abs(zmiana)>5 && zmianaPlosow>0){s+=`<div style="background:#467f00;" class="znacznik3">▲`+Math.abs(zmiana)+`</div>`}
			else
			{
				if (zmianaSasiadow<0.4&&zmianaPlosow==0){s+=`<div style="background:#464f2f;" class="znacznik3">▲`+Math.abs(zmiana)+`</div>`}
				else {s+=`<div style="background:#577525;" class="znacznik3">▲`+Math.abs(zmiana)+`</div>`}
			}
		}
		else if (zmianaSasiadow && zmianaPlosow>0)
		{
			if (zmianaSasiadow>0.85){s+=`<div style="background:#897539;" class="znacznik3">●</div>`}
			else if (zmianaSasiadow>0.4){s+=`<div style="background:#615739;" class="znacznik3">●</div>`}
			else {s+=`<div style="background:#4f4939;" class="znacznik3">●</div>`}
		}
		else {s+=`<div class="znacznik3"></div>`}
		return s
	}
	function stringPojawieniaSieIzaniku(nowy,zanik)
	{
		if (nowy)
		{
			if (zanik){return `<div style="background:#f7ed00; color:black;" class="znacznik1">✖✚</div>`}
			return `<div style="background:#9dff25; color:black;" class="znacznik1">✚</div>`
		}
		if (zanik){return `<div style="background:#ff2525; color:black;" class="znacznik1">✖</div>`}
		return 0
	}
	function stringCiekawostki(wymiana,przeskok,wcisnalSie,zmianaPlosow)
	{
		if (false)//(wymiana){return`<div style="background:#0089b1;" class="znacznik1">▲▼</div>`}
		if (false)//(przeskok)
		{
			if (przeskok>0){return`<div style="background:#39757f;" class="znacznik1">▼`+Math.abs(przeskok)+`</div>`}
			else {return`<div style="background:#39757f;" class="znacznik1">▲`+Math.abs(przeskok)+`</div>`}
		}
		if (wcisnalSie){return`<div style="background:#39757f;" class="znacznik1">►</div>`}
		if (zmianaPlosow<0){return`<div style="background:#4d00b1;" class="znacznik1">➴`+Math.abs(zmianaPlosow)+`</div>`}
		if (zmianaPlosow>19){return`<div style="background:gold;" class="znacznik1">➹`+(zmianaPlosow)+`</div>`}
		if (zmianaPlosow>9){return`<div style="background:#00b1ff;" class="znacznik1">➶`+(zmianaPlosow)+`</div>`}
		if (zmianaPlosow>2){return`<div style="background:#0089b1;" class="znacznik1">➶`+(zmianaPlosow)+`</div>`}
		if (zmianaPlosow>0){return`<div style="background:#39757f;" class="znacznik1">➶`+(zmianaPlosow)+`</div>`}
		return `<div class="znacznik1"></div>`
	}
	function stringInformacji(dane)
	{
		//return JSON.stringify(dane)
		if (dane.wymianaPozycji)
		{
			return nick(dane.nick)+" wymienił się z "+nick(dane.wymianaPozycji[1])+" lądując na pozycji: "+(dane.pozycja+dane.zmianaPozycji)+"."
		}
		if (dane.zanik)
		{
			if (dane.nowy)
			{
				return nick(dane.nick)+" znika a na jego miejce pojawia się nowy w rankingu: "+nick(dane.nowy)
			}
			else if (dane.pojawilSie)
			{
				return nick(dane.nick)+" znika a na jego miejce pojawia się: "+nick(dane.pojawilSie[0])+" z pozycji: "+dane.pojawilSie[1]+"."
			}
			else {return nick(dane.nick)+" znika"}
		}
		if (dane.przeskok)
		{
			if (dane.nowy)
			{
				if (dane.przeskok>0)
				{
					if (dane.przeskok==1){return nick(dane.nick)+" spada przeskakując pozycję ustępując miejsca nowemu: "+nick(dane.nowy)}
					if (dane.przeskok<5){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycje ustępując miejsca nowemu: "+nick(dane.nowy)}
					if (dane.przeskok<22){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycji ustępując miejsca nowemu: "+nick(dane.nowy)}
					return nick(dane.nick)+" spada przeskakując kilkadziesiąt pozycji: "+Math.abs(dane.przeskok)+" ustępując miejsca nowemu: "+nick(dane.nowy)
				}
				else if (dane.przeskok<0)
				{
					if (dane.przeskok==-1){return nick(dane.nick)+" przeskakuje jedną pozycję ustępując miejsca nowemu: "+nick(dane.nowy)}
					if (Math.abs(dane.przeskok)<5){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycje ustępując miejsca nowemu: "+nick(dane.nowy)}
					if (Math.abs(dane.przeskok)<22){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycji ustępując miejsca nowemu: "+nick(dane.nowy)}
					return nick(dane.nick)+" przeskoczył kilkadziesiąt pozycji: "+Math.abs(dane.przeskok)+" ustępując miejsca nowemu: "+nick(dane.nowy)
				}
			}
			if (dane.pojawilSie)
			{
				if (dane.przeskok>0)
				{
					if (dane.przeskok==1){return nick(dane.nick)+" spada przeskakując pozycję ustępując miejsca: "+nick(dane.pojawilSie[0])}
					if (dane.przeskok<5){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycje ustępując miejsca: "+nick(dane.pojawilSie[0])}
					if (dane.przeskok<22){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycji ustępując miejsca: "+nick(dane.pojawilSie[0])}
					return nick(dane.nick)+" spada przeskakując kilkadziesiąt pozycji: "+Math.abs(dane.przeskok)+" ustępując miejsca: "+nick(dane.pojawilSie[0])
				}
				else if (dane.przeskok<0)
				{
					if (dane.przeskok==-1){return nick(dane.nick)+" przeskakuje pozycję ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])+" z pozycji: "+dane.pojawilSie[1]}
					if (Math.abs(dane.przeskok)<5){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycje ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
					if (Math.abs(dane.przeskok)<22){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycji ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
					return nick(dane.nick)+" przeskoczył wiele pozycji: "+Math.abs(dane.przeskok)+" ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])
				}
			}
			else
			{
				if (dane.przeskok>0)
				{
					if (dane.przeskok==1){return nick(dane.nick)+" spada przeskakując jedną pozycję"}
					if (dane.przeskok<5){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycje"}
					if (dane.przeskok<22){return nick(dane.nick)+" spada przeskakując "+Math.abs(dane.przeskok)+" pozycji"}
					return nick(dane.nick)+" spada przeskakując kilkadziesiąt pozycji: "+Math.abs(dane.przeskok)
				}
				else if (dane.przeskok<0)
				{
					if (dane.przeskok==-1){return nick(dane.nick)+" przeskakuje jedną pozycję"}
					if (Math.abs(dane.przeskok)<5){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycje"}
					if (Math.abs(dane.przeskok)<22){return nick(dane.nick)+" przeskakuje "+Math.abs(dane.przeskok)+" pozycji"}
					return nick(dane.nick)+" przeskoczył kilkadziesiąt pozycji: "+Math.abs(dane.przeskok)
				}
			}
		}
		if (dane.nowy)
		{
			if (dane.zmianaPozycji>0)
			{
				if (dane.zmianaPozycji==1){return nick(dane.nick)+" spada ustępując miejsca nowemu: "+nick(dane.nowy)}
				if (dane.zmianaPozycji<5){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycje ustępując miejsca nowemu: "+nick(dane.nowy)}
				if (dane.zmianaPozycji<22){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycji ustępując miejsca nowemu: "+nick(dane.nowy)}
				return nick(dane.nick)+" spada o wiele pozycji ustępując miejsca nowemu: "+nick(dane.nowy)
			}
			else if (dane.zmianaPozycji<0)
			{
				if (dane.zmianaPozycji==-1){return nick(dane.nick)+" idzie w górę ustępując miejsca nowemu: "+nick(dane.nowy)}
				if (Math.abs(dane.zmianaPozycji)<5){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycje ustępując miejsca nowemu: "+nick(dane.nowy)}
				if (Math.abs(dane.zmianaPozycji)<22){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycji ustępując miejsca nowemu: "+nick(dane.nowy)}
				return nick(dane.nick)+" leci w górę o wiele pozycji ustępując miejsca nowemu: "+nick(dane.nowy)
			}
		}
		if (dane.pojawilSie)
		{
			if (dane.zmianaPozycji>0)
			{
				if (dane.zmianaPozycji==1){return nick(dane.nick)+" spada ustępując miejsca: "+nick(dane.pojawilSie[0])+" z pozycji: "+dane.pojawilSie[1]}
				if (dane.zmianaPozycji<5){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycje ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
				if (dane.zmianaPozycji<22){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycji ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
				return nick(dane.nick)+" spada o wiele pozycji ustępując miejsca: "+nick(dane.pojawilSie[0])
			}
			else if (dane.zmianaPozycji<0)
			{
				if (dane.zmianaPozycji==-1){return nick(dane.nick)+" idzie w górę ustępując miejsca: "+nick(dane.pojawilSie[0])+" z pozycji: "+dane.pojawilSie[1]}
				if (Math.abs(dane.zmianaPozycji)<5){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycje ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
				if (Math.abs(dane.zmianaPozycji)<22){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycji ustępując miejsca użytkownikowi: "+nick(dane.pojawilSie[0])}
				return nick(dane.nick)+" leci w górę o wiele pozycji ustępując miejsca: "+nick(dane.pojawilSie[0])
			}
		}
		if (true)
		{
			if (dane.zmianaPozycji>0)
			{
				if (dane.zmianaPozycji==1){return nick(dane.nick)+" spada "}
				if (dane.zmianaPozycji<5){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycje"}
				if (dane.zmianaPozycji<22){return nick(dane.nick)+" spada o "+Math.abs(dane.zmianaPozycji)+" pozycji"}
				return nick(dane.nick)+" spada o kilkadziesiąt pozycji: "+Math.abs(dane.zmianaPozycji)
			}
			else if (dane.zmianaPozycji<0)
			{
				if (dane.zmianaPozycji==-1){return nick(dane.nick)+" idzie w górę"}
				if (Math.abs(dane.zmianaPozycji)<5){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycje"}
				if (Math.abs(dane.zmianaPozycji)<22){return nick(dane.nick)+" leci w górę o "+Math.abs(dane.zmianaPozycji)+" pozycji"}
				return nick(dane.nick)+" leci w górę o kilkadziesiąt pozycji: "+Math.abs(dane.zmianaPozycji)
			}
		}
		if (dane.wcisnalSie)
		{
			return "przed: "+nick(dane.wcisnalSie[2]||"nie wiem")+" wcisnął się "+nick(dane.wcisnalSie[0]||"nie wiem")+" z pozycji: "+(dane.wcisnalSie[1]||"nieznanej")
		}
		if (dane.wcisnalSie)
		{
			return "przed: "+nick(dane.wcisnalSie[2]||"nie wiem")+" wcisnął się "+nick(dane.wcisnalSie[0]||"nie wiem")+" z pozycji: "+(dane.wcisnalSie[1]||"nieznanej")
		}
		if (dane.wcisnalSieNowy)
		{
			return "przed: "+nick(dane.wcisnalSieNowy[2]||"nie wiem")+" wcisnął się nowy w rankingu: "+nick(dane.wcisnalSieNowy[0]||"nie wiem")
		}
		if (true)
		{
			if (dane.zmianaSasiadow>0.85&&dane.zmianaPlosow>0){return nick(dane.nick)+" utrzymuje pozycję mimo zmiany sąsiadów"}
			else if (dane.zmianaSasiadow>0.4&&dane.zmianaPlosow>0){return nick(dane.nick)+" utrzymuje pozycję"}
			else {return nick(dane.nick)+" zostaje"}
		}
		return JSON.stringify(dane)
		function nick(n)
		{
			return `&nbsp;<b><span class="nick">`+n+`</span></b>&nbsp;`
		}
	}
}
function dodawanie()
{
	let t={dane:prompt("wklej dane w odpowiednim formacie"),nazwa:prompt("wpisz nazwę tego rankingu")}
	if (!t.nazwa||!t.dane){return alert("błędne dane")}
	let zapis=localStorage.getItem("rankingJBZD")
	zapis=JSON.parse(zapis||"[]")||[]
	zapis[zapis.length]=t
	localStorage.setItem("rankingJBZD",JSON.stringify(zapis))
}
if (/https:\/\/jbzd\..+\/ranking/.test(window.location.href))
{
	oe=-1
	zr=[72]
	pp=1500
	pole=document.getElementsByClassName(`ranking-models`)[0]
	pole.innerHTML=`<ul id="opcje"><li id="pobierz"><div class="ranking-models-name">pobierz ranking</div></li><li id="porownanie"><div class="ranking-models-name">porównaj rankingi</div></li><li id="dodawanie"><div class="ranking-models-name">dodaj ranking wcześniejszy</div></li></ul>`+pole.innerHTML
	opcje=document.getElementById(`opcje`)
	pobierz=document.getElementById(`pobierz`).onclick=uruchom
	document.getElementById(`porownanie`).onclick=porownanie
	document.getElementById(`dodawanie`).onclick=dodawanie
}