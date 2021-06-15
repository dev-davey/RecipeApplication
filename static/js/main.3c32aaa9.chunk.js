(this["webpackJsonprecipe-api"]=this["webpackJsonprecipe-api"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(21),r=s.n(c),n=(s(27),s(11)),h=s(12),l=s(15),d=s(14),o=(s(28),s(38)),j=s(39),p=s(40),u=s(41),b=s(42),O=s(13),x=s(0),m=function(e){return Object(x.jsx)("div",{className:"col-sm-4 mt-3 mb-3",children:Object(x.jsxs)(o.a,{style:{width:"100%",textAlign:"center"},children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("h5",{children:e.title})}),Object(x.jsxs)(p.a,{children:[Object(x.jsx)(u.a,{variant:"top",src:e.imageLocation}),Object(x.jsx)(b.a,{className:"mt-2",children:Object(x.jsx)("h5",{children:e.category})}),Object(x.jsx)(O.b,{to:"/recipe/".concat(e.id),children:Object(x.jsx)("button",{className:"btn btn-outline-secondary recipeButton",children:" Recipe"})})]})]})})},D=function(e){var t=e.data.map((function(e){return Object(x.jsx)(m,{id:e.idMeal,imageLocation:e.strMealThumb,title:e.strMeal,category:e.strArea},e.idMeal)}));return Object(x.jsx)("div",{className:"row",children:t})},g=(s(35),s(4)),f=function(e){var t=e.embedId;return Object(x.jsx)("div",{className:"video-responsive",children:Object(x.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},v=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(n.a)(this,s),a=t.call(this,e),console.log(a.props.match.params.id),a.state={recipeData:""},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({recipeData:t.meals})})).catch((function(e){console.log("apiCall did not work",e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"text-center recipeContainer container",children:[Object(x.jsx)("div",{className:"recipeHeader",children:Object(x.jsx)("h1",{children:"The Recipe"})}),this.state.recipeData?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:this.state.recipeData[0].strMeal}),Object(x.jsx)("img",{className:"mb-4 recipeImg",src:this.state.recipeData[0].strMealThumb}),Object(x.jsxs)("div",{className:"instructions",children:[Object(x.jsx)("h5",{children:"Instructions"}),Object(x.jsx)("p",{children:this.state.recipeData[0].strInstructions})]}),Object(x.jsx)("h5",{children:"Ingredients"}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure1," ",this.state.recipeData[0].strIngredient1]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure2," ",this.state.recipeData[0].strIngredient2]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure3," ",this.state.recipeData[0].strIngredient3]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure4," ",this.state.recipeData[0].strIngredient4]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure5," ",this.state.recipeData[0].strIngredient5]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure6," ",this.state.recipeData[0].strIngredient6]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure7," ",this.state.recipeData[0].strIngredient7]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure8," ",this.state.recipeData[0].strIngredient8]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure9," ",this.state.recipeData[0].strIngredient9]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure10," ",this.state.recipeData[0].strIngredient10]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure11," ",this.state.recipeData[0].strIngredient11]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure12," ",this.state.recipeData[0].strIngredient12]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure13," ",this.state.recipeData[0].strIngredient13]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure14," ",this.state.recipeData[0].strIngredient14]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure15," ",this.state.recipeData[0].strIngredient15]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure16," ",this.state.recipeData[0].strIngredient16]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure17," ",this.state.recipeData[0].strIngredient17]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure18," ",this.state.recipeData[0].strIngredient18]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure19," ",this.state.recipeData[0].strIngredient19]}),Object(x.jsxs)("li",{children:[this.state.recipeData[0].strMeasure20," ",this.state.recipeData[0].strIngredient20]})]}),Object(x.jsx)("h5",{className:"mt-5",children:"Watch Instructional Video Below"}),Object(x.jsx)(f,{embedId:this.state.recipeData[0].strYoutube.slice(this.state.recipeData[0].strYoutube.indexOf("=")+1,this.state.recipeData[0].strYoutube.length)})]}):Object(x.jsx)("div",{})]})}}]),s}(a.Component),I=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).apiCall=function(e){fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){return e.json()})).then((function(e){a.setState({data:e.meals})})).catch((function(e){console.log("apiCall did not work",e)}))},a.handleInputChange=function(e){a.setState({foodType:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.apiCall(a.state.foodType)},a.state={data:"",foodType:""},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.apiCall("")}},{key:"render",value:function(){return Object(x.jsx)(O.a,{basename:"/RecipeApplication",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(g.a,{exact:!0,path:"/",component:s,children:[Object(x.jsx)("div",{className:"heading",children:Object(x.jsx)("h1",{className:"text-center",children:"Welcome To The Recipe App"})}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(x.jsx)("input",{type:"text",name:"foodType",placeholder:"Search A Food Type",onChange:this.handleInputChange,className:"searchBox"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Search"})]}),this.state.data?Object(x.jsx)(D,{data:this.state.data}):Object(x.jsx)("div",{})]}),Object(x.jsx)(g.a,{path:"/Recipe/:id",component:v})]})})}}]),s}(a.Component),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),M()}},[[36,1,2]]]);
//# sourceMappingURL=main.3c32aaa9.chunk.js.map