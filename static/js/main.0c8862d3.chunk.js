(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),u=(a(16),a(2)),o=a(1),s=a(4),c=a(3),m=a(5),h=(a(18),a(6));function d(e){return r.a.createElement("button",{className:"pellet pellet-"+e.size+" tower-"+e.towerSize+(e.clicked?" clicked":"")+(e.ghost?" ghost":"")+(e.invalid?" invalid":""),onClick:e.onClick},e.size)}var p=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderPellet",value:function(e){var t=this;return this.props.value.includes(e)?r.a.createElement(d,{size:e,towerSize:this.props.value.length,clicked:this.props.clickedId===e,onClick:function(){return t.handleClick(e)}}):null}},{key:"renderPlacable",value:function(e){return this.props.clicked||null===e?null:r.a.createElement(d,{size:e,towerSize:this.props.value.length+1,clicked:!1,ghost:!0,invalid:f(e,this.props.value)})}},{key:"render",value:function(){var e=this,t=this.props.value.map(function(t){return e.renderPellet(t)});return r.a.createElement("div",{className:"tower",onClick:function(){return e.props.onClick()}},this.renderPlacable(this.props.clickedId),t,r.a.createElement("div",{className:"tower-name"},"Tour ",this.props.idTower))}},{key:"handleClick",value:function(e){this.props.onPelletClick(e)}}]),t}(n.Component),v=4,g=3;function E(e){return e&&e.length===v}function f(e,t){return t.length>0&&e>Math.min.apply(Math,Object(h.a)(t))}function C(e,t){var a=Array.apply(null,Array(e));return(a=a.map(function(e,t){return[]}))[0]=Array.apply(null,Array(t)),a[0]=a[0].map(function(e,t){return t}),[[0,1,2,3],[],[]]}var b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={towers:C(g,v),clickedIdTower:null,clickedIdPellet:null,nbClick:0,time:0,loader:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"saveSate",value:function(){var e="user="+this.props.user+"&step="+this.state.nbClick+"&state="+JSON.stringify(this.state.towers),t=new XMLHttpRequest;t.open("GET","https://unrepented-apportio.000webhostapp.com/saver_step_hanoi.php?"+e),t.send()}}]),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"renderTower",value:function(e){var t=this;return r.a.createElement(p,{idTower:e,value:this.state.towers[e],clicked:null!==this.state.clickedIdTower&&this.state.clickedIdTower===e,clickedId:this.state.clickedIdPellet,win:E(this.state.towers[g-1]),onPelletClick:function(a){return t.handlePelletClick(e,a)},onClick:function(){return t.handleClick(e)}})}},{key:"handleClick",value:function(e){if(null!==this.state.clickedIdPellet){var t=this.state.towers.slice();if(!f(this.state.clickedIdPellet,t[e])){t[e].splice(0,0,this.state.clickedIdPellet);var a=t[this.state.clickedIdTower].indexOf(this.state.clickedIdPellet);t[this.state.clickedIdTower].splice(a,1),this.setState({towers:t,clickedIdTower:null,clickedIdPellet:null}),e!==this.state.clickedIdTower&&(this.setState(function(e,t){return{nbClick:e.nbClick+1,loader:0}}),this.saveSate(),E(this.state.towers[g-1])&&this.props.next(this.state.nbClick+1,this.state.time))}}}},{key:"handlePelletClick",value:function(e,t){null!==this.state.clickedIdTower&&this.state.clickedIdTower===e&&null!==this.state.clickedIdPellet&&this.state.clickedIdPellet===t?this.setState({clickedIdTower:null,clickedIdPellet:null}):null!==this.state.loader||null!==this.state.clickedIdPellet||E(this.state.towers[g-1])||t!==Math.min.apply(Math,Object(h.a)(this.state.towers[e]))||this.setState({clickedIdTower:e,clickedIdPellet:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board container"},r.a.createElement("div",null,"D\xe9placement(s) = ",this.state.nbClick),E(this.state.towers[g-1])?r.a.createElement("div",null,"F\xe9licitation !"):"",this.renderTower(0),this.renderTower(1),this.renderTower(2),null!==this.state.loader?this.renderLoader(this.props.loaderId):"")}},{key:"renderLoader",value:function(e){return-1===e?null:0===e?r.a.createElement("div",{className:"important"},"Sauvegarde ..."):r.a.createElement("div",null,"Sauvegarde ",r.a.createElement("progress",{value:this.state.loader,max:"100"},this.state.loader))}},{key:"tick",value:function(){null===this.state.loader&&this.setState(function(e,t){return{time:e.time+.1}}),(this.state.loader>=100||-1===this.props.loaderId)&&this.setState({loader:null}),null!==this.state.loader&&this.setState(function(e,t){return{loader:e.loader+10/t.timer}})}}]),t}(n.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"instruction container"},r.a.createElement("h2",null,"Informations"),r.a.createElement("p",null,"Bonjour, ",r.a.createElement("br",null),r.a.createElement("br",null),"Nous allons vous pr\xe9senter le jeu des tours de Hano\xef ",r.a.createElement("br",null),r.a.createElement("br",null),"Votre t\xe2che consiste \xe0 r\xe9soudre le probl\xe8me en r\xe9alisant le moins de d\xe9placement possible. Le r\xe9sultat du jeu sera sauvegard\xe9 ",r.a.createElement("b",null,"anonymement")," afin de r\xe9aliser des statistiques. ",r.a.createElement("br",null),r.a.createElement("br",null),"Cette \xe9tude ne vous prendra pas plus de 2 minutes."),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h2",null,"R\xe8gle du jeu"),r.a.createElement("br",null),r.a.createElement("p",null,"Le but du jeu est de d\xe9placer enti\xe8rement la pile initiale sur la derni\xe8re tour.",r.a.createElement("ul",null,r.a.createElement("li",null,"Vous ne pouvez bouger que le disque en haut de la pile"),r.a.createElement("li",null,"Vous ne pouvez bouger qu\u2019un disque \xe0 la fois"),r.a.createElement("li",null,"Seul un petit disque peut \xeatre plac\xe9 sur un plus gros disque"))),r.a.createElement("br",null),r.a.createElement("a",{onClick:function(){return e.props.next()},className:"btn"},"D\xe9marrer l'\xe9tude"))}}]),t}(n.Component);function _(e){return r.a.createElement("div",{className:"congratulation container"},r.a.createElement("p",null,"F\xe9licitation vous avez r\xe9solu le probl\xe8me. ",r.a.createElement("br",null),r.a.createElement("br",null),"Pour toute questions sur cette \xe9tude, merci de contacter Guillaume Gronier, chercheur en UX Design (guillaume.gronier@gmail.com)",r.a.createElement("br",null),r.a.createElement("br",null),"Pour toute questions concernant l'application, rendez-vous sur ",r.a.createElement("a",{href:"https://github.com/flololan/tours_de_hanoi",rel:"noopener noreferrer",target:"_blank"},"GitHub ",r.a.createElement("i",{className:"fab fa-github",title:"GitHub du projet"}))),r.a.createElement("br",null),r.a.createElement("h3",null,"Partager"),r.a.createElement("div",{id:"share-buttons"},r.a.createElement("a",{href:"http://www.facebook.com/sharer.php?u=https://flololan.github.io/tours_de_hanoi/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://simplesharebuttons.com/images/somacro/facebook.png",alt:"Facebook"})),r.a.createElement("a",{href:"https://twitter.com/share?url=https://flololan.github.io/tours_de_hanoi/&hashtags=TourDeHanoi",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://simplesharebuttons.com/images/somacro/twitter.png",alt:"Twitter"})),r.a.createElement("a",{href:"http://reddit.com/submit?url=https://simplesharebuttons.com&title=Tours de hano\xef",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://simplesharebuttons.com/images/somacro/reddit.png",alt:"Reddit"}))))}var k=a(9),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={age:"-1",gender:"-1",rate_interest:"-1",rate_stimu:"-1",rate_visu:"-1",rate_complexity:"-1",rate_reactivity:"-1",evaluate_time:"-1",time_long:"-1",rate_focus:"-1",rate_raisonnable:"-1",rate_time_satis:"-1",rate_wait:"-1"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"save",value:function(){var e="user="+this.props.user+"&game_type="+this.props.gameType+"&clicks="+this.props.clicks+"&timer="+this.props.timer+"&age="+this.state.age+"&gender="+this.state.gender+"&rate_interest="+this.state.rate_interest+"&rate_stimu="+this.state.rate_stimu+"&rate_visu="+this.state.rate_visu+"&rate_complexity="+this.state.rate_complexity+"&rate_reactivity="+this.state.rate_reactivity+"&evaluate_time="+this.state.evaluate_time+"&time_long="+this.state.time_long+"&rate_focus="+this.state.rate_focus+"&rate_raisonnable="+this.state.rate_raisonnable+"&rate_time_satis="+this.state.rate_time_satis+"&rate_wait="+this.state.rate_wait,t=new XMLHttpRequest;return t.open("GET","https://flololan.000webhostapp.com/_saver_question_hanoi.php?"+e),t.send(),this.params}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Questions"},r.a.createElement("form",{onSubmit:function(){return e.handleSubmit()}},r.a.createElement("label",{htmlFor:"age"},"Quel est votre \xe2ge ? ",r.a.createElement("i",{className:"req"},"*")),r.a.createElement("input",{type:"number",name:"age",id:"age",min:"10",max:"99",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"gender"},"Etes-vous ? ",r.a.createElement("i",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"gender",value:"homme",onChange:function(t){return e.handleChange(t)}}),"Un homme ",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"gender",value:"femme",onChange:function(t){return e.handleChange(t)}}),"Une femme",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Globalement, avez-vous trouv\xe9 le jeu de la Tour de Hano\xef ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout int\xe9ressant"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_interest",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_interest",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait int\xe9ressant"),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout stimulant"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_stimu",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_stimu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait stimulant"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Globalement, comment avez-vous trouv\xe9 l\u2019application en ligne qui vous a permis de jouer ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout attrayante"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_visu",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_visu",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait attrayante"),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Tr\xe8s compliqu\xe9e \xe0 utiliser"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_complexity",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_complexity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tr\xe8s facile \xe0 utiliser"),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout r\xe9active"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_reactivity",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_reactivity",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tr\xe8s r\xe9active"),r.a.createElement("br",null),r.a.createElement("br",null),-1!==this.props.gameType?r.a.createElement("div",{className:"Attente"},r.a.createElement("label",{htmlFor:"evaluate_time"},"Combien de temps pensez-vous avoir attendu entre chaque coup ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("select",{name:"evaluate_time",id:"evaluate_time",required:!0,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{disabled:!0,hidden:!0,selected:!0},"Choisissez"),r.a.createElement("option",{value:"1"},"1s"),r.a.createElement("option",{value:"2"},"2s"),r.a.createElement("option",{value:"3"},"3s"),r.a.createElement("option",{value:"4"},"4s"),r.a.createElement("option",{value:"5"},"5s"),r.a.createElement("option",{value:"6"},"6s"),r.a.createElement("option",{value:"7"},"7s"),r.a.createElement("option",{value:"8"},"8s"),r.a.createElement("option",{value:"9"},"9s"),r.a.createElement("option",{value:"10"},"10s"),r.a.createElement("option",{value:"11"},"11s"),r.a.createElement("option",{value:"12"},"12s"),r.a.createElement("option",{value:"13"},"13s"),r.a.createElement("option",{value:"14"},"14s"),r.a.createElement("option",{value:"15"},"15s")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"time_long"},"Vous attendiez-vous \xe0 attendre plus ou moins longtemps entre chaque coup ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",value:"moins",name:"time_long",required:!0,onChange:function(t){return e.handleChange(t)}}),"Moins longtemps ",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",value:"plus",name:"time_long",onChange:function(t){return e.handleChange(t)}}),"Plus longtemps ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Vous \xeates-vous focalis\xe9(e) sur ce temps d'attente ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout focalis\xe9(e)"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_focus",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_focus",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Compl\xe8tement focalis\xe9(e)"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Avez-vous trouv\xe9 cette dur\xe9e d'attente raisonnable ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout raisonnable"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_raisonnable",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_raisonnable",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait raissonable"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Etes-vous satisfait de cette dur\xe9e d'attente ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout satisfait"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_time_satis",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_time_satis",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait satisfait"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Avez-vous trouv\xe9 cette dur\xe9e d'attente justifi\xe9e ? ",r.a.createElement("span",{className:"req"},"*")),r.a.createElement("br",null),r.a.createElement("div",{className:"rateInfo"},"Pas du tout justifi\xe9e"),r.a.createElement("input",{type:"radio",value:"1",name:"rate_wait",required:!0,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"2",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"3",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"4",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"5",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"6",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"radio",value:"7",name:"rate_wait",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("div",{className:"rateInfo"},"Tout \xe0 fait justifi\xe9e"),r.a.createElement("br",null)):null,r.a.createElement("button",{type:"submit",className:"btn"},"Valider mes r\xe9ponses")))}},{key:"handleChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(k.a)({},a,t)),this.setState(function(e,t){return{btnDisabled:-1===e.gender||-1===e.age||-1===e.preference}})}},{key:"handleSubmit",value:function(){this.save();this.props.next()}}]),t}(r.a.Component),I=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(s.a)(this,Object(c.a)(t).call(this,e));var n=Math.floor(3*Math.random()+1)-2;return a.state={instruction:!0,start:!1,questions:!1,congratulation:!1,game_type:n,time:-1,click:-1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleNext",value:function(e,t){this.state.instruction?this.setState({instruction:!1,start:!0}):this.state.start?this.setState({start:!1,questions:!0,time:t,click:e}):this.state.questions&&this.setState({questions:!1,congratulation:!0})}}]),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Game"},r.a.createElement("div",{className:"game-board"},this.state.instruction?r.a.createElement(y,{next:function(){return e.handleNext(0,0)}}):null,this.renderBoard(),this.state.questions?r.a.createElement(w,{gameType:this.state.game_type,user:this.props.user,timer:this.state.time,clicks:this.state.click,next:function(){return e.handleNext(0,0)}}):null,this.state.congratulation?r.a.createElement(_,null):null))}},{key:"renderBoard",value:function(){var e=this;return this.state.start?r.a.createElement(b,{loaderId:this.state.game_type,user:this.props.user,timer:2,next:function(t,a){return e.handleNext(t,a)}}):null}}]),t}(n.Component),N=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(s.a)(this,Object(c.a)(t).call(this,e));var n=(new Date).getTime();return a.state={user:n},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App "+this.props.theme},r.a.createElement("h1",null,"Tours de Hano\xef"),r.a.createElement(I,{user:this.state.user}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,{theme:"light"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.0c8862d3.chunk.js.map