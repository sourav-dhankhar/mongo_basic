
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log("we are connected");
// });

const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

const Kitten = mongoose.model('Kitten', kittySchema);

//A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:


//Here we are creating a object name sourav of class kitten
const sourav = new Kitten({ name: 'sourav dhankhar' });
// console.log(sourav.name); // 'Silence'
const sourav1 = new Kitten({ name: 'sourav dhankhar1' });
// sourav.speak();


sourav.save(function (err, sourav) {
    if (err) return console.error(err);
    // sourav.speak();
  });
  sourav1.save(function (err, sourav1) {
    if (err) return console.error(err);
    // sourav1.speak();
  });

  Kitten.find({name:"sourav dhankhar"},function (err,kittens ) {
    if (err) return console.error(err);
    console.log(kittens);
  })