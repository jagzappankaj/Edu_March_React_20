(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{10:function(e,i,t){e.exports=t(23)},15:function(e,i,t){},23:function(e,i,t){"use strict";t.r(i);var a=t(0),u=t.n(a),o=t(6),r=t.n(o),n=t(1),l=t(2),s=t(4),m=t(3),p=t(5),c=(t(15),function(e){function i(e){var t;return Object(n.a)(this,i),(t=Object(s.a)(this,Object(m.a)(i).call(this,e))).state={title:"REACT APP",keyword:"User Text Here"},t}return Object(p.a)(i,e),Object(l.a)(i,[{key:"inputChanges",value:function(e){this.setState({keyword:e.target.value?e.target.value:"USER TEXT HERE"}),this.props.userText(e.target.value)}},{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("div",{className:"logo"},this.state.title),u.a.createElement("center",null,u.a.createElement("input",{onChange:this.inputChanges.bind(this)}),u.a.createElement("p",null,this.state.keyword)),u.a.createElement("hr",null))}}]),i}(a.Component)),d=t(7),v=t(9),g=t.n(v),q=function(e){console.log(e);var i=e.datalist.map((function(e){return u.a.createElement(g.a,{height:200,throttle:500,key:e.id},u.a.createElement("div",null,u.a.createElement("h3",null,e.title),u.a.createElement("p",null,e.feed),u.a.createElement("img",{src:e.imageUrl})))}));return u.a.createElement("div",null,i)},h=function(e){function i(){var e;return Object(n.a)(this,i),(e=Object(s.a)(this,Object(m.a)(i).call(this))).state={news:d,filtered:d},e}return Object(p.a)(i,e),Object(l.a)(i,[{key:"filterNews",value:function(e){var i=this.state.news.filter((function(i){return i.title.toLowerCase().indexOf(e.toLowerCase())>-1||i.feed.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({filtered:i})}},{key:"render",value:function(){var e=this;return u.a.createElement(a.Fragment,null,u.a.createElement(c,{userText:function(i){e.filterNews(i)}}),u.a.createElement(q,{datalist:this.state.filtered}))}}]),i}(a.Component);r.a.render(u.a.createElement(h,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":2,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":3,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":4,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":5,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":6,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":7,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":8,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":9,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":10,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":11,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":12,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":13,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":14,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":15,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":16,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"},{"id":17,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"https://i.ibb.co/TrR7jkM/hammer.png"},{"id":18,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.bbe8ced5.chunk.js.map