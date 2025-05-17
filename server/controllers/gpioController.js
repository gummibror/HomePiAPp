
const { Gpio } = require('onoff');

const pin = 529; // fysiska pin 17 har nummer 529 i raspbians kernels schema
const led = new Gpio(pin, 'out'); // Use  physical GPIO pin 17

const turnOnPin = (req, res) => {
    //const pin = parseInt(req.body.pin, 10);
 
    try {
      
      led.writeSync(1); // 1 = HIGH (turn on)
      
      res.json({ success: true, message: `Pin ${pin} turned ON` });
    } catch (err) {
      console.error(`Failed to turn on pin ${pin}:`, err.message);
      res.status(500).json({ success: false, message: 'GPIO error' });
    }
  };
  
  const turnOffPin = (req, res) => {
    //const pin = parseInt(req.body.pin, 10);
  
    try {
    
      led.writeSync(0); // 0 = LOW (turn off)
    
      res.json({ success: true, message: `Pin ${pin} turned OFF` });
    } catch (err) {
      console.error(`Failed to turn off pin ${pin}:`, err.message);
      res.status(500).json({ success: false, message: 'GPIO error' });
    }
  };

  process.on('SIGINT', () => {
    led.unexport();
    process.exit();
  });
  
  module.exports = { turnOnPin, turnOffPin };