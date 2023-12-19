new Vue({
el: "#app",
data:{
currentPage: 'home'
},
components:{
 home:{
  template: "<p>Home</p>"
 },
  Aboutus:{
  template: "<p>About Us</p>"
 },
  Contact:{
  template: "<p>Contact</p>"
 },
}
});
 
new Vue({
el: "#app",
data:{
currentPage: 'home'
},
methods:{
  switchTo: function(page){
 this.currentPage= page;
  }
},
components:{
 home:{
template:`<div>
<h2>Home<h2>
"<p>{{homeData}}</p>"
</div>`,
 data:function(){
  return{
  homeData: 'my home data'
   }
  }
 },
aboutus:{
template:`<div>
<h2>AboutUs<h2>
"<p>{{aboutusData}}</p>"
</div>`,
data:function(){
  return{
  aboutusData:
   'About data'
   }
  }
 },
  contact:{
  template: `<div><h3>Contact Us</h3> "<p>Contact</p>"
 <form method="POST" submit.prevent>
<label>Your name</label>
<input type="text" v-model="contactData.name">
<textarea type="msg" v-model="contactData.msg"></textarea>
<button type="submit">Send</button></form></div>`,
 data:function(){
 return{
 contactData:{name:'', msg:''}
  },
 }
}
});
