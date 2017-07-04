# SpliderApi

基于Node 的一个网络爬虫 API接口 包括前端开发日报、知乎日报、前端top框架排行、妹纸福利、搞笑视频、各类视频新闻资讯 热点详情接口数

[查看文档](https://ecitlm.github.io/SpliderApi/#/)

## 环境要求

需要 NodeJS+express

## 安装

```shell
$ git clone https://github.com/ecitlm/SpliderApi.git
$ npm install

### 运行
$ node app.js
```

服务器启动默认端口为3000 、启动之后就可以开启了接口服务了.

[menu]

## 1.前端开发日报接口

说明:获取前端开发博客日报列表、推荐列表、单日文章列表数据

### 1.1 最新前10天日报列表

**必选参数:** 无

**接口地址:** `/daily_list`

**调用例子:** `http://localhost:3000/daily_list`

返回数据(每次返回是10条数据,这里就不全部列出来了)如下图:

```javascript
{
    "msg": "success",
    "data": [
        {
            "title": "20170522 前端开发日报",
            "id": 20170522,
            "description": "前端 (Not just) 工程师终究要掌握的知识；css3动画（二）：波浪效果；JS 与多线程；每天 10 个前端知识点：杂技；GB-respond：移动端响应式布局解决方案（JavaScript + rem）；React实战 ̵ ...",
            "date": "2017-05-23",
            "url": "http://caibaojian.com/fe-daily-20170522.html"
        },
        {
            "title": "20170513 前端开发日报",
            "id": 20170513,
            "description": "[Vue]精致完整的Vue项目-douban；关于Node.js的__dirname，__filename，process.cwd()，./文件路径的一些坑；javaScript代码优化；Gulp & webpack 配置详解；Re ...",
            "date": "2017-05-14",
            "url": "http://caibaojian.com/fe-daily-20170513.html"
        }
    ],
    "code": 1
}
```

### 1.2 内容推荐列表

**必选参数:** 无

**接口地址:** `/recommend_list`

**调用例子:** `http://localhost:3000/recommend_list`

返回数据(每次返回10条数据，由于长度就展示2条看)如下JSON:

```javascript
{
    "msg": "success",
    "data": [
        {
            "title": "长连接、短连接、长轮询和WebSocket",
            "id": null,
            "description": "对这四个概念不太清楚，今天专门搜索了解一下，总结一下： 长连接：在HTTP 1.1，客户端发出请求，服务端接收请求，双方建立连接，在服务端没有返回之前保持连接，当客户端再发送请求时，它会使用同一个连接。这一直继续到客户端或服务器端认为会话已经结束，其中一方中断连接。",
            "date": "2017-03-01",
            "url": "http://caibaojian.com/http-connection-and-websocket.html"
        },
        {
            "title": "jquery圆环进度条插件",
            "id": null,
            "description": "在网络搜到的一个jquery圆环进度条插件，是使用Canvas写的，支持纯色、渐变颜色、支持文字逐渐变化、支持定义起始角等一切跟之前我写过的HTML5 Canvas绘制矩形和圆形（圆弧）和canvas绘制旋转的圆环百分比进度条等一切圆弧的属 ...",
            "date": "2015-06-04",
            "url": "http://caibaojian.com/jquery-circle-progress.html"
        }
    ],
    "code": 1
}
```

### 1.3 单日日报内容

**必选参数:** `date`: 日期 20170522

**接口地址:** `//one_day_list?date=20170521`

**调用例子:** `http://localhost:3000/one_day_list?date=20170521`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
{
    "msg": "success",
    "data": {
        "title": "20170521 前端开发日报",
        "description": "总有你要的编程书单（GitHub）；JavaScript 编码指南；学习JavaScript之闭包；Vue 用户的 React 上手小结；初识weex（前端视角） – 环境搭建；JQuery 中的 setTimeout(fn, 0) 的作用；如何将Angular文档化？；Visual Studio Code 前端调试不完全指南",
        "links": [
            {
                "title": "总有你要的编程书单（GitHub）",
                "description": "总有你要的编程书单（GitHub） 一些 GitHub 上不错的文章或电子书列表与大家分享。不乏有不少经典，可以收起来慢慢阅览。 —— 由IT程序狮分享",
                "url": "https://juejin.im/entry/5920f4f0a0bb9f005f4d9535"
            },
            {
                "title": "ReactNative 学习资源大汇集",
                "description": "ReactNative 学习资源大汇集 - 世锋日上 - 掘金专栏  ​​​",
                "url": "http://t.cn/RaBIMy2"
            }
        ]
    },
    "code": 1
}
```

## 2.框架 top 排行榜

说明:获取前前端框架排名,我们可以看看web前端世界的框架排名

### 2.1 获取前端框架top 20排名

**必选参数:** `无` :

**接口地址:** `/web_frame`

**调用例子:** `http://localhost:3000/web_frame`

返回数据(返回20条 由于长度就展示2条看)如下JSON:

```javascript
{
    "msg" : "success",
    "data": [
        {
            "index": "1",
            "thumb": "https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151007151317-91-1.png?x-oss-process=style/subject_repo",
            "title": "\n            grunt\n          ",
            "description": "\n            Grunt: JavaScript 任务执行器\n          ",
            "url": "https://www.awesomes.cn/repo/gruntjs/grunt"
        },
        {
            "index": "2",
            "thumb": "https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151003224032-16-1.png?x-oss-process=style/repo",
            "title": "\n  riot\n",
            "description": "\n A React-like, user interface library\n            ",
            "url": "https://www.awesomes.cn/repo/riot/riot"
        }
       ],
    "code": 1
    }
```

## 3.知乎日报

说明:获取每日知乎日报数据、日报详情数据

### 3.1 每日知乎日报数据

**必选参数:** `无参数` :

**接口地址:** `/zhihu_news`

**调用例子:** `http://localhost:3000/zhihu_news`

返回数据(返回条看)如下JSON:

```javascript
```

### 3.2 日报详情

**必选参数:** `id` : 3977867

**接口地址:** `/zhihu_news_detail?id=3977867`

**调用例子:** `http://localhost:3000/zhihu_news_detail?id=3977867`

返回数据(返回条看)如下JSON:

```javascript
{
    "body": "<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"></div>\n\n\n\n</div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\">北京大学 2010 级古生物专业为何只有一个学生？</h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http://pic1.zhimg.com/3df2a664c_is.jpg\">\n<span class=\"author\">周诗培</span>\n</div>\n\n<div class=\"content\">\n<p>看到个自己能答的问题了。</p>\r\n<p>首先有人所说的什么北大为一个人开设专业体现情怀什么的，没你们想象的那样高尚。真实情况是，这个专业就录了一个人，就这么简单。</p>\r\n<p>古生物专业属于北大元培学院。元培学院与常见的数学院物理学院中文系之内的院系不同，元培学院并不是一个按照专业划分的学院，而是一个住宿学院。学院里的学生可以自由选择其他院系的专业，例如信科，光华等，同时在选课上比专业院系的同学有更大的自由。除了选择其他院系的专业，元培学生还可以选择本院的三个专业：古生物，政经哲和外语外史。</p>\r\n<p>元培学院自己的专业的特点是，只有元培的学生才能选；课程综合性强，从不同的院系的课程中选取不同的课程组成自己的培养计划。古生物专业就是建立在地空学院，生科院等课程上的。</p>\r\n<p>元培学院的学生在大二上分流，确定自己的专业。这时候如果有人选择古生物，那么这一届古生物就有学生。学生按照培养方案选择课程，然后到所在院系上课。学校并不需要为这个学生专门开一门课程。</p>\r\n<p>报考北京大学元培学院的话，会有北大唯一的本科生男女混住宿舍楼，有不同专业的同学同居一寝的混宿制度。有点不好就是，别人问你学什么专业的时候，你会非常纠结……</p>\r\n<p>利益相关，我是元培学院的学生。</p>\n</div>\n</div>\n\n\n<div class=\"view-more\"><a href=\"http://www.zhihu.com/question/24170880\">查看知乎讨论<span class=\"js-question-holder\"></span></a></div>\n\n</div>\n\n\n</div>\n</div>",
    "image_source": "Yestone.com 版权图片库",
    "title": "不是北大为一个人开专业，而是这个专业只招了一个人",
    "image": "https://pic4.zhimg.com/33adaf08d180ae6fcfac5faa8db7afe7.jpg",
    "share_url": "http://daily.zhihu.com/story/3977867",
    "js": [
        "http://news-at.zhihu.com/js/story.js?v=97942"
    ],
    "ga_prefix": "061809",
    "images": [
        "http://p1.zhimg.com/dd/c7/ddc75c460475d6e634158a3876d29f9e.jpg"
    ],
    "type": 0,
    "id": 3977867,
    "css": [
        "http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3"
    ]
}
```

## 4.头条新闻数据

说明:获取新闻头条分类新闻、新闻详情

### 4.1 新闻头条新闻列表

**必选参数:** `type` : 新闻类型<br>
0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 5科技 6财经 7 时尚









type | 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7
---- | -- | -- | -- | -- | -- | -- | -- | --
名称   | 热点 | 社会 | 娱乐 | 体育 | 美文 | 科技 | 财经 | 时尚



**接口地址:** `/news_list?type=1`

**调用例子:** `http://localhost:3000/news_list?type=1`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
```

### 4.2 新闻详情数据

**必选参数:** `item_id` : 新闻类型<br>

**接口地址:** `/news_detail?item_id=item_id`

**调用例子:** `http://localhost:3000/news_detail?item_id=64246032347483345941`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
{
    "_ck": {},
    "data": {
        "detail_source": "东方IC图说国际",
        "media_user": {
            "no_display_pgc_icon": false,
            "avatar_url": "http://p3.pstatp.com/thumb/ef500036ebc81557fb9",
            "id": "5784742177",
            "screen_name": "东方IC图说国际"
        },
        "publish_time": 1495844280,
        "title": "埃及一大巴遭枪击28人死亡 遇难者葬礼举行",
        "url": "http://m.dfic.cn/ttPhoto/6277",
        "is_original": false,
        "is_pgc_article": false,
        "content": "<div class=\"gallery\"><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p3.pstatp.com/large/22b800052b6615dfc09e\" img_width=\"900\" img_height=\"625\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及开罗，一名大巴枪击的受害女子被送往医院。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p3.pstatp.com/large/22b800052b67152267fe\" img_width=\"900\" img_height=\"495\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及明亚省，安全人员站在遭袭击的大巴旁。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p9.pstatp.com/large/22bf000535650aa2e1e0\" img_width=\"900\" img_height=\"600\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及明亚省，大巴袭击遇难者的葬礼举行，亲属悲痛欲绝。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p1.pstatp.com/large/22bb0004ed4b8ed54b1f\" img_width=\"900\" img_height=\"600\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及明亚省，大巴袭击遇难者的葬礼举行，亲属悲痛欲绝。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p1.pstatp.com/large/22c000050b6e4a7c694a\" img_width=\"900\" img_height=\"600\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及开罗，医疗人员在医院外将受害女子从救护车上抬下。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p3.pstatp.com/large/22b800052b6972f16de1\" img_width=\"900\" img_height=\"600\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及明亚省，大巴袭击遇难者的葬礼举行，亲属悲痛欲绝。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div><div class=\"image_content\"><p class=\"image_title\"></p><img src=\"http://p3.pstatp.com/large/22b70008fd0505f16dc6\" img_width=\"900\" img_height=\"600\" inline=\"0\" alt=\"埃及一大巴遭枪击28人死亡 遇难者葬礼举行\" onerror=\"javascript:errorimg.call(this);\"><p class=\"image_desc\">当地时间2017年5月26日，埃及明亚省，大巴袭击遇难者的葬礼举行，亲属悲痛欲绝。据埃及安全部门称，一辆满载科普特基督徒的公交车在该国明亚省遭不明身份武装分子枪击。埃及卫生部官员表示，袭击造成至少28人死亡，25人受伤。（图片署名： 东方IC）    \"</p></div></div>",
        "source": "东方IC图说国际",
        "video_play_count": 0
    },
    "success": true
}
```

### 4.3 视频数据

**必选参数:** `type` : 类型<br>
0搞笑视频 1美女视频 2体育视频 3 新闻现场 4涨姿势 5猎奇 6 黑科技 默认搞笑视频<br>
`page` : 分页 如:10/20/30









type | 0  | 1  | 2  | 3    | 4   | 5  | 6
---- | -- | -- | -- | ---- | --- | -- | ---
名称   | 搞笑 | 美女 | 体育 | 新闻现场 | 涨姿势 | 猎奇 | 黑科技



**接口地址:** `/video_list?type=0&page=10`

**调用例子:** `http://localhost:3000/video_list?type=0&page=10`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
```

## 5 段子

说明:获取笑话段子搞笑图片数据

### 5.1 笑话段子

**必选参数:** `无`

**接口地址:** `/joke`

**调用例子:** `http://localhost:3000/joke`

```javascript
{
    "msg": "success",
    "code": 1,
    "data": [
        {
            "title": "天真滴表妹啊！",
            "content": "　　表妹一回来就跟我得瑟，她说她在街上摆了个擦鞋摊生意特别的好，还夸她自己多么有生意头脑，将来肯定会上福布斯什么什么的……看着她36D的身材，我不知道该不该告诉她真相。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/90663.htm"
        },
        {
            "title": "每个人都有自己的口味",
            "content": "　　为什么樟脑丸那么硬那么难吃都有人买？<br/><br/>　　因为每个人都有自己的口味。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/120011.htm"
        },
        {
            "title": "不用这么费劲",
            "content": "　　有没有通灵的朋友，能横跨两界的帮忙过去打听一下，那些烧过去的房子豪车电器及大笔的钱还有司机美女啥的，到了那边是真能兑现不？如果能，我就不用在这边活的这么费劲了！",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/162676.htm"
        },
        {
            "title": "舅舅，你最近谈恋爱了？",
            "content": "　　“舅舅，你最近谈恋爱了？”<br/><br/>　　“没有啊！”<br/><br/>　　“那你为什么不来接我放学？我们班的美女老师没有吸引力了？”",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/162822.htm"
        },
        {
            "title": "从沃尔玛出来",
            "content": "　　从沃尔玛出来，一姑娘就追着我说，哥，办个信用卡吧！我盯着她的脸看了3秒钟，认真的对她说：哥不讲信用……",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/161196.htm"
        },
        {
            "title": "为啥这种智商的人会这么有钱",
            "content": "　　每当看到电视里说某某人被简单的骗术骗了几十万、几百万的新闻时，我会禁不住长叹，为啥这种智商的人会这么有钱呢？",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/161028.htm"
        },
        {
            "title": "别问我，绝交很久了！",
            "content": "　　楼下新开的小餐馆，女老板挺漂亮，为赢得好感，我每次请客都去那。<br/><br/>　　今天，我当着她的面故意大声地问朋友：“你知道为什么一直都来这吃饭么？”<br/><br/>　　女老板看了看我，羞涩地笑了。<br/><br/>　　这时，朋友带着醉意回答：“我知道，你现在穷！<br/><br/>　　等你有钱了，带哥几个去大餐厅，再也不用来这小破馆子了。”<br/><br/>　　我……",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/80107.htm"
        },
        {
            "title": "这时候你再哭也来得及",
            "content": "　　当你发现你老公在外面找情人会小三，千万不要哭哭啼啼的跟他去闹，一定要先反思自己，把自己打扮一下，然后穿上当年他说你穿着最好看的衣服，你就会发现你已经胖得穿不上了，这时候你再哭也来得及。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/119544.htm"
        },
        {
            "title": "只要不是你我就放心了",
            "content": "　　今天休息，大家在宿舍玩手机，忽然听见有人敲门，开门一看是个中年妇女，她冲屋子里细细观望了一圈，然后直接冲我开口：“小伙子你谈恋爱了吗？”<br/><br/>　　我左顾右盼了一番：“阿姨，您是在问我吗？”<br/><br/>　　阿姨：“对的，就是在问你。”<br/><br/>　　我：“还没呢，阿姨你这是几个意思？”<br/><br/>　　阿姨：“我女儿谈了个对象说是你们宿舍的！我过来看看。”<br/><br/>　　我：“阿姨，我们宿舍一共8个人，为什么偏偏问我呢？”<br/><br/>　　阿姨：“也没啥，只要不是你我就放心了！”<br/><br/>　　我：“……”",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/161273.htm"
        },
        {
            "title": "我才是最强营销高手",
            "content": "　　去某公司应聘销售员，面试官拿出他的手机递给我说：“现在，你要想办法把这部手机卖给我。”<br/><br/>　　我说：“这部手机是目前最流行的iPhone6，现在8888元卖给你。”<br/><br/>　　面试官摇了摇头。<br/><br/>　　我说：“不买就算了”，然后拿着手机回家了。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/90715.htm"
        },
        {
            "title": "对方已同意添加你为好友",
            "content": "　　人人都离不开手机，若干年后，墓碑上只刻二维码，路过时拿出手机扫一扫，一生的故事就出来了……爱过谁、恨过谁、还牵挂着谁……简称为“扫墓”......这并不可怕，可怕的是屏幕上显示 ……… ……… ……… “对方已同意添加你为好友” ",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/91455.htm"
        },
        {
            "title": "蜈蚣精妈妈生宝宝",
            "content": "　　蜈蚣精妈妈生宝宝，医生对她说：“来，放松，对，诶，使劲，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了，腿出来了……”",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/120400.htm"
        },
        {
            "title": "跟不上时代的发展，终究是会被淘汰的",
            "content": "　　巴黎的一家咖啡馆的牌子上写道：“ 我们没有WiFi，和你身边的人说说话吧！”<br/><br/>　　其实，无论你多坚强，温暖总是很珍贵的。<br/><br/>　　不久之后，那所没有WiFi的咖啡馆倒闭了！！",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/89385.htm"
        },
        {
            "title": "这是养小号的节奏",
            "content": "　　儿子，这回没考好不要紧，你还小，我和你爸也还年轻，我们还可以再要一个孩子。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/90930.htm"
        },
        {
            "title": "讨厌啊，人家就是个女的了啦！",
            "content": "　　昨天端午节学校正常上课，班里一女生因为回家找人代她上课。<br/><br/>　　没想到老师下课点名了，老师：“李xx。”<br/><br/>　　一哥们答：“到！”<br/><br/>　　老师：“咦，李xx，你站起来一下！”<br/><br/>　　这哥们低着脑袋站起来了，老师：“表格上面写的李xx是个女的啊？”<br/><br/>　　这是不知道从哪个角落传来一声：“讨厌啊，人家就是个女的了啦。”",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/79243.htm"
        },
        {
            "title": "下次知道该咋做了没？",
            "content": "　　在饭店吧台，看着一个人过来买单，付了钱，<br/><br/>　　马上从后面追来一个马后炮，说：“哎呀，我来买，我来买。”<br/><br/>　　结果前面那位把钱收了回来，并笑着说：“你来，你来。”后面那位脸都黑了。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/79867.htm"
        },
        {
            "title": "警察来了",
            "content": "　　今天开车和一女性朋友 经过一银行 我想进去办点业务 车临时停路边上 为了怕交警罚就把她留下看车 进去几分钟果然有交警来了 那个二货风风火火地闯进银行大声吼到 xxxx警察来了，快走啊！尼玛 偌大的一个大厅几十号人 顷刻间寂静无声 然后人潮像洪水一样涌出银行。。。",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/79188.htm"
        },
        {
            "title": "奇葩男闺蜜",
            "content": "　　体检完，发现自己钾元素下降，医生说要多吃海鲜。于是跟几个男闺蜜说了，他们说轮流请我吃一个月海鲜，还不重样。晚上我乐呵呵的去了，第一个请我吃的麻辣烫，给我烫了三十串海带；第二个听说了，指责第一个不地道，晚上带我去吃炒菜，点了紫菜蛋汤，使劲把里面的紫菜和虾皮往我碗里夹……第三个说那俩忒不地道，晚上要亲自下厨，等我看到晚饭，直接泪奔了，尼玛，康师傅海鲜方便面！",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/91307.htm"
        },
        {
            "title": "我听后似乎明白了什么！",
            "content": "　　有二货朋友一枚，捡到一手机，手机壳内附一纸条“如果哪天我手机掉了，请归还，有重谢，本人号码：139＊＊＊＊”。<br/><br/>　　结果那朋友连续打两天都是正在通话中，他跟我说那人可能智商有问题。<br/><br/>　　我听后似乎明白了什么！",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/80077.htm"
        },
        {
            "title": "学校食堂就是这么厉害",
            "content": "　　学校饭堂的标准就是：饭虽然不好吃，但还是能吞的下去。吃完虽然没吃饱，但也能让你活到下顿饭的时间........",
            "poster": "",
            "url": "http://www.laifudao.com/wangwen/91505.htm"
        }
    ]
}
```

### 5.2 搞笑图片

**必选参数:** `无`

**接口地址:** `/joke_pic`

**调用例子:** `http://localhost:3000/joke_pic`

```javascript
```

## 花瓣APi 接口

说明:获取美女分类图片集合

### X.1 妹纸美女类型分类

**必选参数:** `page` : 分页数第几页<br>
**必选参数:** `catid` 分类id













catid | 34  | 35  | 36  | 37  | 38  | 39  | 40
----- | --- | --- | --- | --- | --- | --- | ---
名称    | 大胸妹 | 小清新 | 文艺范 | 性感妹 | 大长腿 | 黑丝袜 | 小翘臀



**接口地址:** `/huaban?page=page&catid=catid`

**调用例子:** `http://localhost:3000/huaban?page=1&catid=34`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
```

## X.妹纸图片福利接口

说明:获取美女分类、分类下图片列表、图片列表数据、和某个妹纸图片集合

### X.1 妹纸美女类型分类

**必选参数:** `无` :

**接口地址:** `/classify`

**调用例子:** `http://localhost:3000/classify`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
{
    "msg": "success",
    "data": [
        {
            "title": "清纯",
            "id": "qingchun"
        },
        {
            "title": "私房",
            "id": "sifang"
        }
    ],
    "code": 1
}
```

### X.2 妹纸分类下 图片列表接口

**必选参数:** `tags` : 分类 如： qingchun

**接口地址:** `/classify_tags_list?tags=luoli`

**调用例子:** `http://localhost:3000/classify_tags_list?tags=luoli`

返回数据(由于长度就展示2条看)如下JSON:

```javascript
{
    "msg": "success",
    "data": [
        {
            "img": "http://mm.howkuai.com/wp-content/uploads/2017a/04/18/limg.jpg",
            "title": "<b>评一评，你觉得哪个妹纸最打动你的心？</b>",
            "url": "http://www.meizitu.com/a/5530.html",
            "id": 5530
        },
        {
            "img": "http://mm.howkuai.com/wp-content/uploads/2016a/04/10/limg.jpg",
            "title": "妹子你是咖啡馆里最美的风景线",
            "url": "http://www.meizitu.com/a/5350.html",
            "id": 5350
        }
    ],
    "code": 1
}
```

### X.3 图片详情列表

**必选参数:** `id` : 列表下图片集合id 5525

**接口地址:** `/img_view?id=5525`

**调用例子:** `http://localhost:3000/img_view?id=5525`

返回数据如下JSON:

```javascript
{
    "msg": "success",
    "data": [
        "http://mm.howkuai.com/wp-content/uploads/2017a/04/13/01.jpg",
        "http://mm.howkuai.com/wp-content/uploads/2017a/04/13/02.jpg",
        "http://mm.howkuai.com/wp-content/uploads/2017a/04/13/03.jpg",
        "http://mm.howkuai.com/wp-content/uploads/2017a/04/13/04.jpg",
        "http://mm.howkuai.com/wp-content/uploads/2017a/04/13/05.jpg"
    ],
    "code": 1
}
```
