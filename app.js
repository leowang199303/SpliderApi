/*
 * @Author: ecitlm
 * @Date: 2017-06-19 14:50:54
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-06-29 17:43:10
 */

const express = require('express');
const http = require('http');
const app = express();
const router = express.Router();

// 设置响应头
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  //res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/**路由列表**/
const index = require('./index');
const classify = require('./routers/picture/classify');
const classify_tags_list = require('./routers/picture/classify_tags_list');
const list = require('./routers/picture/list');
const img_view = require('./routers/picture/img_view');
const daily_list = require('./routers/web_daily/daily_list');
const recommend_list = require('./routers/web_daily/recommend');
const one_day_list = require('./routers/web_daily/one_day_list');
const web_frame = require('./routers/web_frame/hot_frame');
const zhihu_news = require('./routers/zhihu_daily/zhihu_news');
const zhihu_news_detail = require('./routers/zhihu_daily/news_detail');
const huaban = require('./routers/picture/huaban');
const news_list = require('./routers/news_toutiao/news_list');
const news_detail = require('./routers/news_toutiao/news_detail');
const video_list = require('./routers/news_toutiao/video_list');
const music_list = require('./routers/music/music_list');
const joke_pic = require('./routers/joke/joke_pic');
const joke = require('./routers/joke/joke');
const post_test = require('./routers/untils/post_test');
const cnode = require('./routers/cnode_list');

app.use('/', index);
//图片列表
app.use('/huaban', huaban);
app.use('/classify', classify);
app.use('/classify_tags_list', classify_tags_list);
app.use('/list', list);
app.use('/img_view', img_view);


//前端日报
app.use('/daily_list', daily_list);
app.use('/recommend_list', recommend_list);
app.use('/one_day_list', one_day_list);
app.use('/web_frame', web_frame);

//知乎日报
app.use('/zhihu_news', zhihu_news);
app.use('/zhihu_news_detail', zhihu_news_detail);

//新闻头条
app.use('/news_list', news_list);
app.use('/news_detail', news_detail);
app.use('/video_list', video_list);

// 酷狗音乐
app.use('/music_list', music_list);


// 笑话
app.use('/joke_pic', joke_pic);
app.use('/joke', joke);

// cnode社区
app.use('/cnode_list', cnode_list)

app.use('/post_test', post_test);
app.use(router);
app.listen(3000);
console.log('程序启动,监听端口:' + 3000);
