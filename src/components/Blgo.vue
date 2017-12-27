<template>
    <el-row class="content">
         <el-col :span="15">
            <article v-for="(article, index) in articleList" id="article">
                <div>
                    <router-link class="lable" to="/">{{article.tag}}</router-link>
                    <h2><router-link to="/article">{{article.title}}</router-link></h2>
                </div>
                <p>{{article.content}}</p>
                <div class="anthor">
                    <span><i class="el-icon-time"></i>{{article.created_at}}</span>
                    <span><i class="el-icon-view"></i>{{article.read_num}}</span>
                        <span class="addLike" :class="{'active': article.is_liked}" @click="addLike(index)">
                            <template v-if="article.is_liked"><i class="el-icon-star-on"></i>已赞</template>
                            <template v-else><i class="el-icon-star-off"></i>点赞</template>
                            ({{article.like_num}})
                    </span>
                    <router-link  to="/article">阅读全文</router-link>
                </div>
            </article>
         </el-col>
         <el-col :span="8" :offset="1" class="sidebar">
            <el-tabs class="article-hot" v-model="activeName" @tab-click="articleClick">
                <el-tab-pane label="最新文章" name="new">
                    <ul>
                        <li v-for="(article_new,index) in articleNew">
                            <router-link to="/article">{{article_new.title}}</router-link>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="最热文章" name="hot">
                    <ul>
                        <li v-for="(article_hot,index) in articleHot">
                            <router-link to="/article">{{article_hot.title}}</router-link>
                        </li>
                    </ul>
                </el-tab-pane>
            </el-tabs>
             <div class="article-tag">
                 <p>标签</p>
                 <el-tag v-for="(article_tag,index) in articleTag">
                     <router-link to="/tags">{{article_tag.tag}}({{article_tag.num}})</router-link>
                 </el-tag>
             </div>
         </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                articleList: [{
                    title: '使用CSS3自定义网页字体的方法',
                    tag: 'CSS',
                    content: '综述 CSS3已经变得非常流行，原本的CSS不支持自定义字体，但是传说中的CSS3基本上什么都可以，那么CSS3中可不可以自定义英文字体呢？这里我们就一起来感受一下。 语法规则 CSS',
                    created_at: '2017-12-20',
                    read_num: '20',
                    like_num: 1,
                    is_liked: true
                }, {
                    title: '使用CSS3自定义网页字体的方法',
                    tag: 'HTML',
                    content: '综述 CSS3已经变得非常流行，原本的CSS不支持自定义字体，但是传说中的CSS3基本上什么都可以，那么CSS3中可不可以自定义英文字体呢？这里我们就一起来感受一下。 语法规则 CSS',
                    created_at: '2017-11-20',
                    read_num: '8',
                    like_num: 0,
                    is_liked: false
                }, {
                    title: 'JavaScript性能优化小知识总结',
                    tag: 'JavaScript',
                    content: '综述 CSS3已经变得非常流行，原本的CSS不支持自定义字体，但是传说中的CSS3基本上什么都可以，那么CSS3中可不可以自定义英文字体呢？这里我们就一起来感受一下。 语法规则 CSS',
                    created_at: '2017-11-20',
                    read_num: '8',
                    like_num: 0,
                    is_liked: false
                }, {
                    title: 'JavaScript判断键盘按键',
                    tag: 'JavaScript',
                    content: '综述 CSS3已经变得非常流行，原本的CSS不支持自定义字体，但是传说中的CSS3基本上什么都可以，那么CSS3中可不可以自定义英文字体呢？这里我们就一起来感受一下。 语法规则 CSS',
                    created_at: '2017-11-20',
                    read_num: '8',
                    like_num: 0,
                    is_liked: false
                }],
                articleNew: [{
                    title: 'JavaScript性能优化小知识总结',
                }, {
                    title: 'JavaScript判断键盘按键',
                },{
                    title:'JavaScript根据生日的月份和日期计算星座'
                }],
                articleHot: [{
                    title: 'Loaders.css 多种纯CSS加载进度动画效果',
                }, {
                    title: '文字 11种HTML5和CSS3炫酷文字样式和鼠标滑过特效',
                },{
                    title:'圆形按钮 9种css3圆形按钮hover鼠标悬停动画'
                }],
                articleTag: [{
                    tag: 'Loaders',
                    num:'3'
                }, {
                    tag: 'CSS3',
                    num:'2'
                },{
                    tag:'HTML',
                    num:'6'
                },{
                    tag: 'JavaScript',
                    num:'3'
                },{
                    tag: 'Node',
                    num:'8'
                },{
                    tag: 'Vue',
                    num:'5'
                },{
                    tag: 'less',
                    num:'2'
                },{
                    tag: 'APP',
                    num:'2'
                },{
                    tag: 'BootStrap',
                    num:'2'
                }],
                activeName: 'new'
            };
        },
        methods: {
            articleClick(tab, event) {
            },

            addLike(index){
                let article = this.articleList[index];
                if (!article.is_liked) {
                    article.like_num++;
                    article.is_liked = true;
                }
            }
        }
    };

</script>

<style lang="less">
    body{
        background-color: #f6f6f6 !important;
    }
    .content{
        padding:30px 150px;
    }
    article{
        background-color: #fff;
        padding:20px;
        margin-bottom: 10px;
        div{
            .lable{
                border: 1px solid #1abc9c;
                color: #1abc9c;
                border-radius: 2px;
                text-decoration: none;
                padding: 4px 6px;
                font-size: 13px;
            }
            h2{
                display: inline;
                font-size: 20px;
                font-weight: normal;
                margin-left: 10px;
                a{
                    text-decoration: none;
                    color: #212121;
                }
            }
        }
        p {
            overflow: hidden;
            font-size: 14px;
            line-height: 21px;
            -webkit-line-clamp: 3;
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            color: #757575;
        }
        .anthor{
            span{
                margin-right: 15px;
                color: #999;
                font-size: 13px;
                i{
                    margin-right: 3px;
                    font-size: 15px;
                }
            }
            .addLike.active {
                color: #1abc9c;
            }
            .addLike:hover{
                color: #1abc9c;
                cursor: pointer;
                transition: all .25s;
            }
            a{
                float: right;
                color: #1abc9c;
                font-size: 14px;
            }
        }
    }
    .sidebar{
        .article-hot{
            background: #fff;
            padding: 20px;
            margin-bottom: 10px;
            .el-tabs__content{
                ul{
                    margin: 0;
                    padding:0;
                    li{
                        list-style: none;
                        margin-bottom: 20px;
                        a{
                            font-size: 15px;
                            color: #757575;
                        }
                    }
                }
            }
            .el-tabs__item.is-active,.el-tabs__item:hover{
                color: #1abc9c!important;
            }
            .el-tabs__active-bar{
                background-color:#1abc9c !important;
            }
        }
        .article-tag{
            background: #fff;
            padding: 20px;
            p{
                margin-top:0;
            }
            .el-tag{
                margin-bottom: 10px;
                margin-right: 5px;
                a{
                    text-decoration: none;
                }
            }
            .el-tag a{
                color: #409eff;
            }
            .el-tag:nth-child(2n){
                background-color: rgba(103,194,58,.1);
                border-color: rgba(103,194,58,.2);
            }
            .el-tag:nth-child(2n) a{
                color: #67c23a;
            }
            .el-tag:nth-child(3n){
                background-color: hsla(220,4%,58%,.1);
                border-color: hsla(220,4%,58%,.2);
            }
            .el-tag:nth-child(3n) a{
                 color: #909399;
            }
            .el-tag:nth-child(4n){
                background-color: rgba(230,162,60,.1);
                border-color: rgba(230,162,60,.2);
                color: #e6a23c;
            }
            .el-tag:nth-child(4n) a{
                color: #e6a23c;
            }
            .el-tag:nth-child(5n){
                background-color: hsla(0,87%,69%,.1);
                border-color: hsla(0,87%,69%,.2);
            }
            .el-tag:nth-child(5n) a {
                color: #f56c6c;
            }
        }
    }
</style>
