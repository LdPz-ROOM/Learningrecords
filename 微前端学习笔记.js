2018年single-spa是一个用于前端微服务化的javascript，本身并没有处理样式隔离和js隔离，只实现了路由劫持和应用加载
2019年qiankun基于single-spa提供更多的开箱即用的api，做到了技术栈无关，接入简单
总结：子应用可以独立构建，运行时动态加载，主子应用完全解耦，技术栈无关，靠的是协议接入（子应用必须到处bootstrap、mount、unmount方法）
https://qiankun.umijs.org/zh
