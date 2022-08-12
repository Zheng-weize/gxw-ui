#开发说明文档

## 一、项目目录说明
***
* ### components  
  >#### 组件库的组件资源目录  
   * ### css
     > #### 组件库的样式库
   * ### lib 
     >#### 组件库的组件内容库 
     * ### index.js  
       >#### 组件库的入口文件  引入各个组件并声明   
     * ### XXX目录  
       >#### 单个组件目录   
        * ### src  
          >#### 组件的实现文件目录   
        * ### index.js  
          >#### 组件的入口文件  引入和声明  
* ### docs  
  >#### vuepress文档说明界面代码目录  
   * ### .vuepress  
     >#### 组件媒体资源目录
      * ### components  
        >#### vuepress会自动声明引入该目录下的.vue文件  存放声明组件的相关文件  
      * ### public  
        >#### 媒体资源目录   
      * ### config.js  
        >#### 界面配置文件   
   * ### componentsDocs
     >#### vuepress 界面目录  .md格式  
   * ### README.md
     >#### vuepress 界面入口页面
* ### examples  
  >#### 项目本地运行入口目录  
   * ### assets  
     >#### 媒体资源目录  
   * ### App.vue  
     >#### vue2 初始页面  
   * ### main.js  
     >#### 页面配置文件  
* ### node_modules 
  >#### 依赖库
* ### public 
  >#### 项目的基础资源目录  
* ### .gitignore  
  >#### git 上传代码内容配置文件  
* ### balel.config.js  
  >#### balel配置文件
* ### deploy.sh  
  >#### deploy脚本 打包vuepress并上传到github站点
* ### developmentDescription.md   
  >#### 项目说明文件
* ### gulpfile.js  
  >#### gulp 配置文件  用于将scss转换成css  npm发布用
* ### jsconfig.json  
  >#### 基本配置文件
* ### package.json  
  >#### 基本配置文件  配置命令已经存放依赖版本信息  
   * ### files 
     >#### 属性是用于锁定发布组件库的文档目录  
   * ### main 
     >#### 组件库的入口路径
* ### package-lock.json   
  >#### 依赖的说明文档
* ### README.md  
  >#### npm使用说明文档
* ### vue.config.js  
  >#### 基本配置文件
* ### webpack.component.js 
  >#### webpack配置文件 用于将vue转换成js  npm发布用

***
## 二、项目打包运行说明
* >#### 依赖安装
  >#### npm install
* >#### 项目运行
  >#### npm run serve
* >#### vuepress本地运行
  >#### npm run docs:dev
* >#### 组件库打包
  * >#### 单文件类型打包 
    >#### npm run build:js 
    >#### npm run build:css 
  * >#### 组合打包
    >#### npm run build
* >#### vuepress项目打包
  >#### npm run docs:build
* >#### vuepress脚本打包
  >#### npm run deploy  
  >#### 自动上传github站点部署  使用SSL密钥上传

***
## 三、项目开发参考链接
[组件库教程](https://www.bilibili.com/video/BV1Zf4y1u75o?p=1)

[Markdown官方教程](https://markdown.com.cn/)
***
## 四、项目运行报错问题解析
* ### 保持各依赖版本是否匹配
* ### vuepress脚本打包报错解决
  >#### bash不存在问题： 使用git bash命令行即可  项目目录右键菜单里选中git bash
  >#### 要在github上绑定的ssl密钥
  >#### 进入项目 -> settings -> deploy keys -> Add deploy key

