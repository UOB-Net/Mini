//index.js
//获取应用实例
Page({
 
  data:{
    navBTN:[
      {
        "name":"学校新闻",
        "ref":'/pages/image/home.png',
        "url":'/pages/news/news'
      },
      {
        "name":"活动盛宴",
        "ref":'/pages/image/event1.png'
      },
      {
        "name":"新生福利",
        "ref":'/pages/image/event.png',
        "url":'/packageB/pages/yang_new_student/yang_new_student'
      },
      {
        "name":"购票中心",
        "ref":'/pages/image/buy.png'
      },
      {
        "name":"我的空间",
        "ref":'/pages/image/home.png'
      },
      {
        "name":"学生会介绍",
        "ref":'/pages/image/member.png',
        "url":'/packageC/pages/info/info'
      },
      {
        "name":"生活周边",
        "ref":'/pages/image/map.png'
      },
      {
        "name":"联系我们",
        "ref":'/pages/image/qa.png'
      },
    ],
    hotspotrender:[
      {
        "link":'',
        "img":'/pages/image/airplane.png',
        "title":"中英航班计划",
        "detail":"计划详情"
      },
      {
        "link":'',
        "img":'/pages/image/nhs.png',
        "title":"NHS免费检测包领取",
        "detail":"领取详情"
      },
      {
        "link":'',
        "img":'/pages/image/jiefeng.png',
        "title":"英国五步解封计划",
        "detail":"计划详情"
      }     
    ]
  }
})
