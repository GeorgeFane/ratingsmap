(this.webpackJsonpRatingsMap=this.webpackJsonpRatingsMap||[]).push([[0],{166:function(t){t.exports=JSON.parse('{"apikey":"14f8eef1"}')},168:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(14),s=n.n(i),o=n(16),c=n(51),u=n(52),l=n(61),h=n(66),p=n(65),d=n(56),f=n.n(d),b=n(219),j=n(222),m=n(87),g=n(171),v=n(215),O=n(117),x=n(5),k=n(34),w=n(214),y=n(57),S=n(82),C=n(110),R=n(12),N=n(216),E=n(217),I=n(218),M=n(11),G=Object(C.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(k.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(k.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(R.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(k.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function B(t){var e=G();return Object(M.jsx)("div",{className:e.root,children:Object(M.jsx)(w.a,{children:Object(M.jsxs)(v.a,{children:[Object(M.jsx)(y.a,{color:"inherit",href:"https://georgefane.github.io/",children:Object(M.jsx)(N.a,{})}),Object(M.jsx)(g.a,{variant:"h6",className:e.title,children:"RatingsMap"}),Object(M.jsxs)("div",{className:e.search,children:[Object(M.jsx)("div",{className:e.searchIcon,children:Object(M.jsx)(E.a,{})}),Object(M.jsx)("form",{onSubmit:t.onSubmit,children:Object(M.jsx)(S.a,{value:t.text,onChange:t.onChange,placeholder:"Search Show",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})]}),Object(M.jsx)(y.a,{color:"inherit",href:"https://github.com/GeorgeFane/ratingsmap",target:"_blank",children:Object(M.jsx)(I.a,{})})]})})})}var L=n(166).apikey,D="darkGreen darkGreen green goldenRod darkGoldenRod indianRed fireBrick fireBrick fireBrick fireBrick fireBrick".split(" "),J="https://www.omdbapi.com/";function P(t,e){var n={apikey:L,i:t,Season:e};return f.a.get(J,{params:n})}var A=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).setText=function(t){console.log(t),a.setState({text:t})},a.state={text:"",rows:[],show:{},seasons:[]},a.onChange=a.onChange.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(t){t.preventDefault();var e=t.target.value;console.log(e),this.setState({text:e})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault(),function(t){var e={apikey:L,s:t};return f.a.get(J,{params:e}).then((function(t){return t.data.Search||[]}))}(this.state.text).then((function(t){e.setState({rows:t})}))}},{key:"handleSelect",value:function(t){var e=this;(function(t){var e={apikey:L,i:t};return f.a.get(J,{params:e}).then((function(t){return t.data||[]}))})(t).then((function(t){e.setState({show:t}),function(t,e){for(var n=[],a=0;a<e;a++)n.push(P(t,a+1));return f.a.all(n).then(f.a.spread((function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map((function(t){return t.data}))})))}(e.state.show.imdbID,Number(e.state.show.totalSeasons)).then((function(t){e.setState({seasons:t})}))}))}},{key:"ImageGridList",value:function(){var t=this;return this.state.rows.length?Object(M.jsx)(b.a,{container:!0,justify:"left",spacing:2,children:this.state.rows.filter((function(t){return"N/A"!==t.Poster})).map((function(e){return Object(M.jsx)(b.a,{item:!0,onClick:function(){return t.handleSelect(e.imdbID)},children:Object(M.jsx)("img",{src:e.Poster,alt:e.Title,width:144})})}))}):(j.a,this.state.rows.map((function(t){return Object(M.jsx)(j.a,{component:"div",display:"inline",children:Object(M.jsx)("img",{src:t.Poster,alt:t.Title,width:99})})})))}},{key:"process",value:function(){var t=this.state.seasons;if(!t.length)return!1;var e=[],n=[];t.forEach((function(t){var a={};(t.Episodes||[]).forEach((function(t){a[t.Episode]=t.imdbRating})),e.push(a),n.push(Math.max.apply(Math,Object(o.a)(Object.keys(a).map(Number))))}));for(var a=Math.max.apply(Math,n),r=[{field:"id",headerName:"Season"}],i=1;i<a+1;i++)r.push({field:i,headerName:"E"+i});return e.forEach((function(t,e){return t.id=e+1})),{rows:e,columns:r}}},{key:"RatingsMap",value:function(){var t;if(!this.process())return Object(M.jsx)("div",{});var e=this.props.classes,n=this.state.seasons.map((function(t,e){var n={id:e};return t.Episodes.forEach((function(t){n[t.Episode]=t})),n}));console.log(n);for(var a=n.map((function(t){return Object.keys(t)})),r=(t=Array.prototype).concat.apply(t,Object(o.a)(a)),i=Math.max.apply(Math,Object(o.a)(r.filter((function(t){return"id"!==t})).map((function(t){return parseInt(t)})))),s=function(t){return Object(M.jsx)(m.a,{title:Object(M.jsx)(g.a,{component:"pre",children:JSON.stringify(t.value,null,4)}),children:Object(M.jsx)(g.a,{children:t.value?t.value.imdbRating:null})})},c=[{field:"id",headerName:"Season"}],u=0;u<i;u++)c.push({field:u+1,renderCell:s});return console.log(c),Object(M.jsx)(O.a,{rows:n,columns:c,autoHeight:!0,className:e.root,getCellClassName:function(t){if("id"!==t.field)return D[10-parseInt(t.value?t.value.imdbRating:null)]}})}},{key:"render",value:function(){var t=this.props.classes;return Object(M.jsxs)("div",{children:[Object(M.jsx)(B,{text:this.state.text,onChange:this.onChange,onSubmit:this.onSubmit}),Object(M.jsx)(v.a,{}),Object(M.jsxs)("div",{className:t.root,children:[this.ImageGridList(),Object(M.jsx)("br",{}),this.RatingsMap()]})]})}}]),n}(r.a.Component),T=Object(x.a)((function(t){var e={padding:t.spacing(3)};return D.forEach((function(t){e["& ."+t]={backgroundColor:t}})),{root:e}}))(A);s.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(T,{})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.2be20de4.chunk.js.map