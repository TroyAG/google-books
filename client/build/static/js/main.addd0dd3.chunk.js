(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,i){e.exports=i(69)},39:function(e,t,i){},69:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),o=i(6),r=(i(39),i(17)),l=i(28),s=i(29),c=i(32),u=i(30),h=i(33),f=i(3),v=function(e){var t,i,a=e.type,o=e.query,r=e.queryObject;return n.a.createElement("nav",{"aria-label":"Book search form",id:"book-form"},n.a.createElement("header",null,n.a.createElement("img",{src:"assets/img/icon-128x128.png",alt:"logo"}),n.a.createElement("h1",null,"Google book Search")),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r({type:t.value,query:i.value})}},n.a.createElement("select",{"aria-label":"Drop-down list for book search category",defaultValue:a,ref:function(e){return t=e}},n.a.createElement("option",{onClick:function(){},value:"q=intitle:"},"Title"),n.a.createElement("option",{onClick:function(){},value:"q=inauthor:"},"Author"),n.a.createElement("option",{onClick:function(){},value:"q=subject:"},"Subject")),n.a.createElement("input",{"aria-label":"Book search box",type:"text",defaultValue:o,ref:function(e){return i=e},placeholder:"Enter search terms",autoFocus:!0}),n.a.createElement("input",{type:"submit",value:"Search"})))},d=i(2),b=function(e){var t=e.data,i=e.visibility,a=e.addFavorite,o=e.removeFavorite;return i.highlight?n.a.createElement("section",{id:"book-highlight","aria-label":"Area showing information about book selected from list"},n.a.createElement("h2",null,t.title),n.a.createElement("h3",null,t.authors?n.a.createElement("span",null,"by"):null,t.authors),n.a.createElement("span",null,function(e){var t,i=[];if(e)for(t=0;t<5;t++)i.push(n.a.createElement(d.d,{key:t}));for(t=0;t<Math.floor(e);t++)i.splice(t,1,n.a.createElement(d.b,{key:t}));return t<e&&i.splice(t,1,n.a.createElement(d.c,{key:t+1})),i}(t.rating)," ",t.ratingsCount?n.a.createElement("span",null,"(",t.ratingsCount,")"):null),n.a.createElement("p",null,n.a.createElement("img",{src:t.thumbnail,alt:t.title}),t.description),n.a.createElement("div",null,n.a.createElement("span",null,t.publisher),n.a.createElement("span",null,t.publishedDate)),n.a.createElement("hr",null),n.a.createElement("div",null,i.favorites?n.a.createElement("button",{style:{background:"white",border:"white",color:"red"},onClick:function(){o(t)}},n.a.createElement(d.a,null)," Remove"):n.a.createElement("button",{onClick:function(){a(t)}},n.a.createElement(d.b,null)," Favorite"),t.price?n.a.createElement("a",{href:t.purchase}," Buy $",t.price):null)):null},g=i(31),m=i.n(g),p=function(e){var t=e.rowNumber,i=e.title,a=(e.author,e.rating),o=e.highlight;return n.a.createElement("div",{onClick:function(){o({highlight:t}),m.a.animateScroll.scrollTo(200)}},n.a.createElement("span",null,i),n.a.createElement("span",null,function(e){var t,i=[],a=0;if(e)for(t=0;t<5;t++)i.push(n.a.createElement(d.d,{key:a})),a++;for(t=0;t<Math.floor(e);t++)i.splice(t,1,n.a.createElement(d.b,{key:a})),a++;return t<e&&(i.splice(t,1,n.a.createElement(d.c,{key:a+1})),a++),i}(a)))},y=function(e){var t=e.data,i=e.highlight;return e.visibility&&null!==t[0]?n.a.createElement("section",{id:"book-list","aria-label":"List of books returned from search"},t.map(function(e,t){return n.a.createElement(p,{key:t,rowNumber:t,title:e.title,author:e.authors,rating:e.rating,highlight:i})})):null},k=function(e){var t=e.data,i=e.highlight;return e.visibility?n.a.createElement("section",{id:"favorites","aria-label":"List of books added to favorites"},t.map(function(e,t){return n.a.createElement(p,{key:t,rowNumber:t,title:e.title,author:e.authors,rating:e.rating,highlight:i})})):null},E=i(16),j=function(e){var t=e.setVisibility,i=e.visibility,a={color:"#BDBDBD"};return n.a.createElement("nav",{"aria-label":"App navigation",id:"app-nav"},n.a.createElement("span",null,i.favorites?n.a.createElement(d.b,{style:a}):n.a.createElement(d.b,{onClick:function(){return console.log(i),void t({highlight:!1,booklist:!1,favorites:!0})}})),n.a.createElement("span",null,i.favorites?n.a.createElement(E.a,{onClick:function(){t({highlight:!1,booklist:!0,favorites:!1})}}):n.a.createElement(E.a,{style:a})))},w=i(9),I=i.n(w),O=i(10),S=i.n(O),F=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={items:[null],queryObject:{type:"q=intitle:",query:"lord+of+the"},highlight:0,visibility:{highlight:!1,booklist:!1,favorites:!1},favorites:[null]},i.updateQuery=i.updateQuery.bind(Object(f.a)(Object(f.a)(i))),i.updateHighlight=i.updateHighlight.bind(Object(f.a)(Object(f.a)(i))),i.addFavorite=i.addFavorite.bind(Object(f.a)(Object(f.a)(i))),i.updateFavoriteHighlight=i.updateFavoriteHighlight.bind(Object(f.a)(Object(f.a)(i))),i.updateVisibility=i.updateVisibility.bind(Object(f.a)(Object(f.a)(i))),i.removeFavorite=i.removeFavorite.bind(Object(f.a)(Object(f.a)(i))),i}return Object(h.a)(t,e),Object(s.a)(t,[{key:"fetchQuery",value:function(){var e=this;this.serverRequest=fetch("https://www.googleapis.com/books/v1/volumes?"+this.state.queryObject.type+this.state.queryObject.query).then(function(e){return e.json()}).then(function(t){t.items.forEach(function(t,i){var a={};"undefined"!=typeof t.volumeInfo.title?a.title=t.volumeInfo.title:a.title=null,"undefined"!=typeof t.volumeInfo.authors?a.authors=t.volumeInfo.authors[0]:a.authors=null,"undefined"!=typeof t.volumeInfo.averageRating?a.rating=t.volumeInfo.averageRating:a.rating=null,"undefined"!=typeof t.volumeInfo.ratingsCount?a.ratingsCount=t.volumeInfo.ratingsCount:a.ratingsCount=null,"undefined"!=typeof t.volumeInfo.publisher?a.publisher=t.volumeInfo.publisher:a.publisher=null,"undefined"!=typeof t.volumeInfo.publishedDate?a.publishedDate=t.volumeInfo.publishedDate:a.publishedDate=null,"undefined"!=typeof t.volumeInfo.description?a.description=t.volumeInfo.description:a.description=null,"undefined"!=typeof t.volumeInfo.imageLinks&&"undefined"!=typeof t.volumeInfo.imageLinks.thumbnail?a.thumbnail=t.volumeInfo.imageLinks.thumbnail.replace(/http:/i,"https:"):a.thumbnail=null,"undefined"!=typeof t.saleInfo.listPrice?a.price=t.saleInfo.listPrice.amount:a.price=null,"undefined"!=typeof t.saleInfo.buyLink?a.purchase=t.saleInfo.buyLink:a.price=null,"undefined"!=typeof t.volumeInfo.description?a.description=t.volumeInfo.description:a.description=null,e.setState(e.state.items.splice(i,1,a))})}).catch(function(e){console.error("There was an error fetching data",e)})}},{key:"componentDidMount",value:function(){var e=this;(S.a.get("/api/favorites").then(function(t){console.log("Fetched from mongo",t.data),e.setState({favorites:t.data})}).catch(function(e){console.error(e)}),window.navigator.onLine)||(setTimeout(function(){alert("You appear to be offline. Your favorites are still avaiable to you")},1),I.a.open("favorites",1,function(e){e.createObjectStore("favorites")}).catch(function(e){console.error("IndexedDB:",e)}).then(function(e){return e.transaction("favorites").objectStore("favorites").getAll()}).then(function(t){e.setState({favorites:t,visibility:{highlight:!1,booklist:!1,favorites:!0}})}))}},{key:"updateQuery",value:function(e){var t=this;this.setState({queryObject:{type:e.type,query:e.query},visibility:{highlight:!1,booklist:!0,favorites:!1}},function(){t.fetchQuery()})}},{key:"updateHighlight",value:function(e){this.setState({highlight:e.highlight,visibility:{highlight:!0,booklist:!0,favorites:!1}})}},{key:"updateFavoriteHighlight",value:function(e){this.setState({highlight:e.highlight,visibility:{highlight:!0,booklist:!1,favorites:!0}})}},{key:"addFavorite",value:function(e){var t=this;this.setState({items:this.state.items.filter(function(e,i){return i!==t.state.highlight}),visibility:{highlight:!1,booklist:!1,favorites:!0},favorites:[].concat(Object(r.a)(this.state.favorites),[e])}),I.a.open("favorites",1,function(e){e.createObjectStore("favorites")}).catch(function(e){console.error("IndexedDB:",e)}).then(function(t){t.transaction("favorites","readwrite").objectStore("favorites","readwrite").add(e,e.title)}).catch(function(e){console.error("IndexedDB:",e)}),S.a.post("/api/favorites",e).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"removeFavorite",value:function(e){var t=this.state.favorites;t.splice(this.state.highlight,1),this.setState({visibility:{highlight:!1,booklist:!1,favorites:!0},favorites:Object(r.a)(t)}),I.a.open("favorites",1,function(e){e.createObjectStore("favorites")}).catch(function(e){console.error("IndexedDB:",e)}).then(function(t){t.transaction("favorites","readwrite").objectStore("favorites","readwrite").delete(e.title)}).catch(function(e){console.error("IndexedDB:",e)}),S.a.delete("/api/favorites/".concat(e._id),e).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}},{key:"updateVisibility",value:function(e){this.setState({visibility:{highlight:e.highlight,booklist:e.booklist,favorites:e.favorites}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(v,{queryObject:this.updateQuery}),n.a.createElement(b,{data:this.state.visibility.favorites?this.state.favorites[this.state.highlight]:this.state.items[this.state.highlight],visibility:this.state.visibility,addFavorite:this.addFavorite,removeFavorite:this.removeFavorite}),n.a.createElement(y,{data:this.state.items,highlight:this.updateHighlight,visibility:this.state.visibility.booklist}),n.a.createElement(k,{data:this.state.favorites,highlight:this.updateFavoriteHighlight,visibility:this.state.visibility.favorites}),n.a.createElement(j,{setVisibility:this.updateVisibility,visibility:this.state.visibility}))}}]),t}(a.Component);window.React=n.a,Object(o.render)(n.a.createElement(F,null),document.getElementById("reactTarget")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").then(function(e){console.log("Hooray. Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Whoops. Service worker registration failed, error:",e)}),document.addEventListener("scroll",function(e){document.body.scrollHeight,document.body.scrollTop,window.innerHeight})}},[[34,2,1]]]);
//# sourceMappingURL=main.addd0dd3.chunk.js.map