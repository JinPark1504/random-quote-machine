(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,o){e.exports=o(26)},20:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(7),i=o.n(r),s=o(8),u=o(9),l=o(14),h=o(10),c=o(3),d=o(13),m=(o(20),o(4)),y=o(11),w=o(12),b={quote:["Don't cry because it's over, smile because it happened.","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Be yourself; everyone else is already taken.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","A room without books is like a body without a soul.","Be the change that you wish to see in the world.","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","No one can make you feel inferior without your consent.","If you tell the truth, you don't have to remember anything.","But man is not made for defeat. A man can be destroyed but not defeated.","Learning never exhausts the mind."],author:["Dr. Seuss","Marilyn Monroe","Oscar Wilde","Albert Einstein","Marcus Tullius Cicero","Mahatma Gandhi","J.K. Rowling","Eleanor Roosevelt","Mark Twain","Ernest Hemingway","Leonardo da Vinci"]},k=0,f="",q="",v=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={idx:0,quote:"",author:""},o.handleClick=o.handleClick.bind(Object(c.a)(o)),o.random_quote=o.random_quote.bind(Object(c.a)(o)),o}return Object(d.a)(t,e),Object(u.a)(t,[{key:"random_quote",value:function(){var e=Math.random();k=Math.floor(e*b.quote.length),this.state.idx===k&&this.random_quote();var t=document.querySelector("body");this.setState({idx:k,quote:b.quote[k],author:b.author[k]}),f="hsl("+Math.floor(360*e)+",100%,20%)",q="hsl("+Math.floor(360*e)+",100%,97%)",console.log("color: "+f),t.style.setProperty("background-color",f)}},{key:"handleClick",value:function(){this.random_quote()}},{key:"render",value:function(){return""===this.state.quote&&this.random_quote(),n.a.createElement("div",{id:"quote-box",style:{color:f,backgroundColor:q}},n.a.createElement("p",{id:"text"},n.a.createElement(m.a,{icon:y.a})," ",this.state.quote),n.a.createElement("p",{id:"author"},"- ",this.state.author),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{id:"new-quote",onClick:this.handleClick,style:{color:q,backgroundColor:f}},"New quote"),n.a.createElement("a",{id:"tweet-quote",href:'https://twitter.com/intent/tweet?hashtags=quotes&text="'+this.state.quote+'" '+this.state.author,target:"_blank",rel:"noopener noreferrer",style:{color:q,backgroundColor:f}},n.a.createElement(m.a,{icon:w.a,size:"2x"}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.a7829220.chunk.js.map