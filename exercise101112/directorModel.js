//Använd sedan denna method i en .js-fil där du hämtar ut data från din directors-collection

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var directorSchema = new Schema({
  name:{
    firstName: {
      type: String,
      required: 'director must have a title',
      unique: true
    },
    lastName: {
      type: String,
      unique: true
    }
  }
});
//I din model ska du nu skapa en method (dvs funktion) som pusslar ihop för- och efternamn och
//returnerar det fulla namnet.
directorSchema.methods.fullName = function() {
     fullName = this.name.firstName + " " + this.name.lastName;
     return fullName;
}
// directorSchema.virtual('fullname').get(function(){
//   fullName = this.name.firstName + " " + this.name.lastName;
//   return fullName;
// })
//Mongoose 还有一个super featrue-- virtual property
//该属性是直接设置在Schema上的. 但是,需要注意的是,VR 并不会真正的存放在db中. 他只是一个提取数据的方法.
//经过测试, 使用methods实现的返回,比VR 要慢几十倍
module.exports = mongoose.model('Director', directorSchema)
//Model才是操作数据库最直接的一块内容. 我们所有的CRUD就是围绕着Model 展开的.
//mongoose.model里面定义的第一个参数,比如’Director’,
//并不是数据库中的, collection. 他只是collection的单数形式, 实际上在db中的collection是’Directors’.
