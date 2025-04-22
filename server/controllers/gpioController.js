
const { Gpio } = require('onoff');

const turnOnPin = (req, res) => {
    const pin = parseInt(req.body.pin, 10);
  
    try {
      const gpio = new Gpio(pin, 'out');
      gpio.writeSync(1); // 1 = HIGH (turn on)
      gpio.unexport();
      res.json({ success: true, message: `Pin ${pin} turned ON` });
    } catch (err) {
      console.error(`Failed to turn on pin ${pin}:`, err.message);
      res.status(500).json({ success: false, message: 'GPIO error' });
    }
  };
  
  const turnOffPin = (req, res) => {
    const pin = parseInt(req.body.pin, 10);
  
    try {
      const gpio = new Gpio(pin, 'out');
      gpio.writeSync(0); // 0 = LOW (turn off)
      gpio.unexport();
      res.json({ success: true, message: `Pin ${pin} turned OFF` });
    } catch (err) {
      console.error(`Failed to turn off pin ${pin}:`, err.message);
      res.status(500).json({ success: false, message: 'GPIO error' });
    }
  };
  
  module.exports = { turnOnPin, turnOffPin };