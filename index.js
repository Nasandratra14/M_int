var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);
gpio.setup(11, gpio.DIR_OUT);




app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){ 
 	res.render('index',{status:"Tsindrio ny bouton raha hanova ny etat-ny Jiro !!"});
});

app.get('/', function(req, res){ 
  res.render('index',{statuss:"Tsindrio ny bouton raha hanova ny etat-ny Ventilateur!!"});
});

app.post('/led/on', function(req, res){
gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Cool!! Mirehatra ny Jiro ;) "});
    });

});


app.post('/led/off', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Ohh!! Maty ny Jiro :( "});
    });

});

//spine

app.post('/vent/on', function(req, res){
  gpio.write(11, true, function(err) {
          if (err) throw err;
          console.log('Written True to pin');
    console.log(path.join(__dirname, 'public'));
    return res.render('index', {statuss: "Cool!! Mandeha ny Ventilateur ;) "});
      });
  
  });
  
  
  app.post('/vent/off', function(req, res){
  gpio.write(11, false, function(err) {
          if (err) throw err;
          console.log('Written False to pin');
    console.log(path.join(__dirname, 'public'));
    return res.render('index',{statuss: "Ohh!! Maty ny Ventilateur :( "});
      });
  
  });

  
app.listen(80, function () {
  console.log('Simple LED Control Server Started on Port: 80!')
})
