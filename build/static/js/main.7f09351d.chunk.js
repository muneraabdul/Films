(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(8),l=a.n(r),s=(a(16),a(1)),o=a(2),c=a(4),m=a(3),d=a(5),p=(a(17),function(e){var t="https://image.tmdb.org/t/p/w1280/".concat(e.films.backdrop_path),a="https://image.tmdb.org/t/p/w780/".concat(e.films.poster_path);var i=function(e){return void 0===e.films.id?n.a.createElement("div",{className:"film-detail"},n.a.createElement("p",null,n.a.createElement("i",{className:"material-icons"},"subscriptions"),n.a.createElement("span",null,"No film selected"))):n.a.createElement("div",{className:"film-detail is-hydrated"},n.a.createElement("figure",{className:"film-backdrop"},n.a.createElement("img",{src:t,alt:""}),n.a.createElement("h1",{className:"film-title"},e.films.title)),n.a.createElement("div",{className:"film-meta"},n.a.createElement("h2",{className:"film-tagline"},e.films.tagline),n.a.createElement("p",{className:"film-detail-overview"},n.a.createElement("img",{src:a,className:"film-detail-poster",alt:e.films.title}),e.films.overview)))}(e);return n.a.createElement("div",{className:"film-details"},n.a.createElement("h1",{className:"section-title"},"DETAILS"),i)}),h=function(e){return n.a.createElement("div",null,n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/"+e.poster,alt:""}))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){e.stopPropagation(),console.log("Handling Fave click!"),a.props.onFaveToggle()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.isFave?"remove_from_queue":"add_to_queue";return n.a.createElement("div",{className:"film-row-fave "+e,onClick:this.handleClick},n.a.createElement("p",{className:"material-icons"},"add_to_queue"))}}]),t}(i.Component),u=function(e){return n.a.createElement("div",{className:"film-row",onClick:e.onDetailsClick},n.a.createElement(h,{poster:e.film.poster_path}),n.a.createElement("div",{className:"film-summary"},n.a.createElement(f,{onFaveToggle:e.onFaveToggle,isFave:e.isFave}),n.a.createElement("h1",null,e.film.title),n.a.createElement("p",null,e.film.release_date.split("-")[0])))},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={filter:"all",films:a.props.films},a.handleFilterClick=function(e){a.setState({filter:e}),console.log("Setting filter to "+e),"all"===e?a.setState({films:a.props.films}):"faves"===e&&a.setState({films:a.props.faves})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.films.map(function(t){return n.a.createElement(u,{film:t,key:t.id,isFave:e.props.faves.includes(t),onFaveToggle:function(){return e.props.onFaveToggle(t)},onDetailsClick:function(){return e.props.onDetailsClick(t)}})}),a="all"===this.state.filter?"is-active":"",i="faves"===this.state.filter?"is-active":"";return n.a.createElement("div",{className:"film-list"},n.a.createElement("h1",{className:"section-title"},"FILMS"),n.a.createElement("div",{className:"film-list-filters "},n.a.createElement("div",{className:"film-list-filter "+a,onClick:function(){return e.handleFilterClick("all")}},"ALL",n.a.createElement("span",{className:"section-count"},this.props.films.length)),n.a.createElement("div",{className:"film-list-filter "+i,onClick:function(){return e.handleFilterClick("faves")}},"FAVES",n.a.createElement("span",{className:"section-count"},this.props.faves.length))),t)}}]),t}(i.Component),g=a(9);a.n(g).a.config();var w={api_key:"4a233d97969ada411a3f8610b43fc29e",films:[{id:346364,title:"It",poster_path:"/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",backdrop_path:"/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",overview:"In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",release_date:"2017-09-05"},{id:343668,title:"Kingsman: The Golden Circle",poster_path:"/pKESfn2Pdy0b7drvZHQb7UzgqoY.jpg",backdrop_path:"/uExPmkOHJySrbJyJDJylHDqaT58.jpg",overview:"When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",release_date:"2017-09-20"},{id:339403,title:"Baby Driver",poster_path:"/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",backdrop_path:"/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",overview:"After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",release_date:"2017-06-28"},{id:335984,title:"Blade Runner 2049",poster_path:"/cbRQVCia0urtv5UGsVFTdqLDIRv.jpg",backdrop_path:"/zfWPeRgYpRjPZLGwwkfnTfaFnNh.jpg",overview:"Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",release_date:"2017-10-04"},{id:381283,title:"mother!",poster_path:"/qmi2dsuoyzZdJ0WFZYQazbX8ILj.jpg",backdrop_path:"/uuQpQ8VDOtVL2IO4y2pR58odkS5.jpg",overview:"A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",release_date:"2017-09-13"},{id:374720,title:"Dunkirk",poster_path:"/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg",backdrop_path:"/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",overview:"The miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26th and June 4th 1940, during the Battle of France in World War II.",release_date:"2017-07-19"},{id:415842,title:"American Assassin",poster_path:"/o40BAqdTQHiN3cUfpgieDUYI71z.jpg",backdrop_path:"/puKZWmBIpuEMwGCn2hZkublG1rO.jpg",overview:"Following the murder of his fianc\xe9e, Mitch Rapp trains under the instruction of Cold War veteran Stan Hurley. The pair then is enlisted to investigate a wave of apparently random attacks on military and civilian targets.",release_date:"2017-09-14"},{id:390043,title:"The Hitman's Bodyguard",poster_path:"/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",backdrop_path:"/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",overview:"The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",release_date:"2017-08-16"},{id:316154,title:"The Bad Batch",poster_path:"/7o14VaMphEIzPwzeW6FP3A6zb4W.jpg",backdrop_path:"/aQ06MnEDLh9X3ZOtY21UD2XB197.jpg",overview:"In a desert wasteland in Texas, a muscled cannibal breaks one important rule: don\u2019t play with your food.",release_date:"2017-06-23"}]},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={films:w.films,faves:[],current:{}},a.handleDetailsClick=function(e){console.log("Fetching details for"+e);var t="https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=").concat(w.api_key,"&append_to_response=videos,images&language=en");fetch(t).then(function(e){e.json().then(function(e){a.setState({current:e}),console.log(e)})})},a.handleFaveToggle=function(e){var t=a.state.faves.slice(),i=a.state.faves.indexOf(e);-1===i?(t.push(e),console.log("Adding ".concat(e," to faves..."))):(t.splice(i,1),console.log("Removing".concat(e," from faves...."))),a.setState({faves:t})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"film-library"},n.a.createElement(v,{films:this.state.films,faves:this.state.faves,onFaveToggle:this.handleFaveToggle,onDetailsClick:this.handleDetailsClick}),n.a.createElement(p,{films:this.state.current}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.7f09351d.chunk.js.map