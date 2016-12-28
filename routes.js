module.exports = (app) => {
  
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: './'
    });
   
  })

  app.get('/canaryislands', (req, res) => {
    res.sendFile('canaryislands.html', {
      root: './'
    });
 
  })

  app.get('/capeverde', (req, res) => {
    res.sendFile('capeverde.html', {
      root: './'
    });

  })

  app.get('/straitofmagellan', (req, res) => {
    res.sendFile('straitofmagellan.html', {
      root: './'
    });
 
  })

  app.get('/guam', (req, res) => {
    res.sendFile('guam.html', {
      root: './'
    });
   
  })

  app.get('/Philippines', (req, res) => {
    res.sendFile('Philippines.html', {
      root: './'
    });

  })
  app.use((req, res)=> {
    res.send('Magellan never set foot here!');
  })
}


        
