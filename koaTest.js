const koa = require('koa');
const app = new koa();

app.use(function*(next) {
    const start = new Date();
    yield next;
    const ms = new Date - start;
    console.log('test' + ms);
})

app.use(function*(){
    this.body = 'hello world22'
})

app.listen(3000)