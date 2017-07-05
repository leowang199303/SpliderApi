/*
 * cnode社区列表
 * @Author: ecitlm
 * @Date:   2017-05-23 17:59:30
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-05-26 21:43:28
 */
const express = require('express')
const http = require('http')
const cheerio = require("cheerio")
const request = require('request')
const app = express()


function list(req, res) {
  var res = res;
  var req = req;
  var page = parseInt(req.query.page) || 1;
  let host = 'https://cnodejs.org';
  var url = host + '/?tab=all&page=' + page;
  console.log(url)
  request({
    url: url,
    encoding: null
  }, function(error, response, body) {
    var links = [];
    if (response && response.statusCode == 200) {
      $ = cheerio.load(body);
      $('#topic_list .cell').each(function(idx, element) {
        var $element = $(element);
        links.push({
          // 文章标题
          title: $element.find('.topic_title').attr('title'),
          // 文章路径
          url: host + $element.find('.topic_title').attr('href'),
          // 作者名称
          userName: $element.find('.user_avatar img').attr('title'),
          // 作者连接
          userUrl: host + $element.find('.user_avatar').attr('href'),
          // 作者头像
          userImg: $element.find('.user_avatar img').attr('src'),
          // 标签
          tab: $element.find('.topic_title_wrapper').find('span').text(),
          // 回复数
          countOfReplies: $element.find('.count_of_replies').text() * 1,
          // 点击数
          countOfVisits: $element.find('.count_of_visits').text() * 1,
          // 爬取时间戳
          timestamp: Date.parse(new Date()),
        });
      });
      console.log('-----------------------------success-----------------------------');
      console.log(links)
      res.send({
        msg: "success",
        data: links,
        code: 1
      })
    } else {
      res.send({
        msg: "糟糕!!! 网络好像有点问题",
        code: 0
      })
    }
  });

}

app.get('/', function(req, res) {
  if (isNaN(req.query.page)) {
    res.send({
      msg: "请正确填写page参数 int类型",
      code: 0,
    });
    return false;
  }
  list(req, res)
});
module.exports = app;
