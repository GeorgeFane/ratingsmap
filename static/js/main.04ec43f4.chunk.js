(this.webpackJsonpRatingsMap=this.webpackJsonpRatingsMap||[]).push([[0],{165:function(e){e.exports=JSON.parse('{"apikey":"14f8eef1"}')},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),s=n.n(i),c=n(112),o=n(16),l=n(66),u=n.n(l),h=n(88),d=n(50),p=n(51),j=n(52),b=n(65),f=n(64),g=n(56),m=n.n(g),x=n(89),O=n(171),v=n(223),w=n(233),k=n(118),y=n(4),S=n(29),C=n(222),N=n(57),R=n(82),I=n(110),B=n(12),M=n(224),E=n(225),G=n(226),D=n(9),J=Object(I.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(S.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function L(e){var t=J();return Object(D.jsx)("div",{className:t.root,children:Object(D.jsx)(C.a,{children:Object(D.jsxs)(v.a,{children:[Object(D.jsx)(N.a,{color:"inherit",href:"https://georgefane.github.io/",children:Object(D.jsx)(M.a,{})}),Object(D.jsx)(O.a,{variant:"h6",className:t.title,children:"RatingsMap"}),Object(D.jsx)(O.a,{variant:"body1",className:t.title,children:"Generate heatmaps for TV show ratings"}),Object(D.jsxs)("div",{className:t.search,children:[Object(D.jsx)("div",{className:t.searchIcon,children:Object(D.jsx)(E.a,{})}),Object(D.jsx)("form",{onSubmit:e.onSubmit,children:Object(D.jsx)(R.a,{value:e.text,onChange:e.onChange,placeholder:"Search Show",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})})]}),Object(D.jsx)(N.a,{color:"inherit",href:"https://github.com/GeorgeFane/ratingsmap",target:"_blank",children:Object(D.jsx)(G.a,{})})]})})})}var A=n(23),P=n(228),T=n(230),F=n(229),H=n(227),V=Object(I.a)((function(e){return{root:{display:"flex"},details:{width:151,height:151,display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151,height:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function Y(e){var t=V(),n=(Object(A.a)(),e.tile),a=n.Poster,r=n.Title,i=n.Year;return Object(D.jsx)(H.a,{children:Object(D.jsxs)(P.a,{className:t.root,children:[Object(D.jsx)(F.a,{className:t.cover,image:a,title:r+" cover"}),Object(D.jsx)("div",{className:t.details,children:Object(D.jsxs)(T.a,{className:t.content,children:[Object(D.jsx)(O.a,{children:r}),Object(D.jsx)(O.a,{color:"textSecondary",children:i})]})})]})})}var _=n(165).apikey,q="darkGreen darkGreen green goldenRod darkGoldenRod indianRed fireBrick fireBrick fireBrick fireBrick fireBrick".split(" "),z="https://www.omdbapi.com/";function K(e){var t={apikey:_,s:e,type:"series"};return m.a.get(z,{params:t}).then((function(e){return e.data.Search||[]}))}function Q(e){var t={apikey:_,i:e};return m.a.get(z,{params:t}).then((function(e){return e.data||[]}))}function U(e,t){var n={apikey:_,i:e,Season:t};return m.a.get(z,{params:n})}function W(e,t){for(var n=[],a=0;a<t;a++)n.push(U(e,a+1));return m.a.all(n).then(m.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.data}))})))}var X=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setText=function(e){console.log(e),a.setState({text:e})},a.state={text:"",rows:[],show:{},seasons:[]},a.onChange=a.onChange.bind(Object(j.a)(a)),a.onSubmit=a.onSubmit.bind(Object(j.a)(a)),a.onClick=a.onClick.bind(Object(j.a)(a)),a}return Object(p.a)(n,[{key:"onChange",value:function(e){e.preventDefault();var t=e.target.value;console.log(t),this.setState({text:t})}},{key:"onSubmit",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,K(this.state.text);case 3:n=e.sent,a={},this.setState({rows:n,show:a});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onClick",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return n=e.sent,a=[],this.setState({show:n,rows:a}),e.next=7,W(this.state.show.imdbID,Number(this.state.show.totalSeasons));case 7:r=e.sent,this.setState({seasons:r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"RatingsMap",value:function(){var e,t=this.props.classes,n=this.state.seasons;if(n.length){var a=n.map((function(e,t){var n={id:t+1};return e.Episodes.forEach((function(e){n[e.Episode]=e})),n}));console.log(a);for(var r=a.map((function(e){return Object.keys(e)})),i=(e=Array.prototype).concat.apply(e,Object(o.a)(r)),s=Math.max.apply(Math,Object(o.a)(i.filter((function(e){return"id"!==e})).map((function(e){return parseInt(e)})))),l=function(e){return Object(D.jsx)(x.a,{title:Object(D.jsx)(O.a,{component:"pre",children:JSON.stringify(e.value,null,4)}),children:Object(D.jsx)(O.a,{children:e.value?e.value.imdbRating:null})})},u=[{field:"id",headerName:"S\\E"}],h=0;h<s;h++)u.push({field:h+1,renderCell:l});console.log(u);var d={rows:a,columns:u,getCellClassName:function(e){if("id"!==e.field&&e.value){var t=parseInt(e.value.imdbRating);return q[10-t]}},autoHeight:!0,className:t.root};return Object(D.jsxs)("div",{children:[Object(D.jsx)(O.a,{children:"*First row is the first season, second row is the second season, etc"}),Object(D.jsx)(k.a,Object(c.a)({},d))]})}}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.rows;return console.log(n),Object(D.jsxs)("div",{children:[Object(D.jsx)(L,{text:this.state.text,onChange:this.onChange,onSubmit:this.onSubmit}),Object(D.jsx)(v.a,{}),Object(D.jsxs)("div",{className:t.root,children:[Object(D.jsx)(w.a,{container:!0,justify:"left",spacing:2,children:n.filter((function(e){return"N/A"!==e.Poster})).map((function(t){return Object(D.jsx)(w.a,{item:!0,onClick:function(){return e.onClick(t.imdbID)},children:Object(D.jsx)(Y,{tile:t})})}))}),this.RatingsMap()]})]})}}]),n}(r.a.Component),Z=Object(y.a)((function(e){var t={padding:e.spacing(3)};return q.forEach((function(e){t["& ."+e]={backgroundColor:e}})),{root:t}}))(X);s.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(Z,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.04ec43f4.chunk.js.map