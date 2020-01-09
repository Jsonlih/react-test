import dva from 'dva';
import './index.css';
import './assets/css/common.less'

// import createHistory from 'history/createBrowserHistory';
let createHistory = require("history").createHashHistory
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/test1').default);
app.model(require('./models/test2').default);

// 4. Router
app.router(require('./router').default);


// 5. Start
app.start('#root');

window._dvaapp = app
