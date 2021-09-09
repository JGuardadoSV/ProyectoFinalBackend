import App from './app.js'


App.listen(App.get('puerto'),()=>console.log("Servidor en línea " + App.get('puerto')) );