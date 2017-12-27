<template>
    <el-row class="content">
        <el-col :span="16" class="article-content">
            <div class="article-head">
                <h1 class="article-title">文字 11种HTML5和CSS3炫酷文字样式和鼠标滑过特效</h1>
                <div class="article-tag">
                    <span><i class="el-icon-time"></i>2017-5-6</span>
                    <span><i class="el-icon-view"></i>20</span>
                    <span><i class="el-icon-tickets"></i>分类:
                        <template><router-link to="/tags">特效篇 / 插件篇</router-link></template>
                    </span>
                </div>
            </div>
            <article >
                <p>这是一款效果非常炫酷的HTML5和CSS3文字样式和鼠标滑过特效插件。该文字特效中包含了11种不同的文字样式和鼠标滑过文字时的动画效果。部分文字动画效果使用了SVG和Html5&nbsp;Canvas来制作。</p><p>注意这些效果并不是在所有的浏览器中都能正常工作的。请使用最新版额现代浏览器来查看这些效果。<br></p>
                <p>这些文字鼠标滑过动画效果都依赖于元素的<code>::before</code>和<code>::after</code>伪元素来制作。下面是“Kukuri”的图片演示效果：&nbsp;<br></p>
                <p>在这个插件中，下拉菜单是通过鼠标点击或用手触摸下拉菜单按钮来触发的。</p>
                <p>这个文字效果的HTML结构如下：<br></p>
                <p>这是一款效果非常炫酷的HTML5和CSS3文字样式和鼠标滑过特效插件。该文字特效中包含了11种不同的文字样式和鼠标滑过文字时的动画效果。部分文字动画效果使用了SVG和Html5&nbsp;Canvas来制作。</p><p>注意这些效果并不是在所有的浏览器中都能正常工作的。请使用最新版额现代浏览器来查看这些效果。<br></p>
                <p>这些文字鼠标滑过动画效果都依赖于元素的<code>::before</code>和<code>::after</code>伪元素来制作。下面是“Kukuri”的图片演示效果：&nbsp;<br></p>
                <p>在这个插件中，下拉菜单是通过鼠标点击或用手触摸下拉菜单按钮来触发的。</p>
                <p>这个文字效果的HTML结构如下：<br></p>
                <p>这是一款效果非常炫酷的HTML5和CSS3文字样式和鼠标滑过特效插件。该文字特效中包含了11种不同的文字样式和鼠标滑过文字时的动画效果。部分文字动画效果使用了SVG和Html5&nbsp;Canvas来制作。</p><p>注意这些效果并不是在所有的浏览器中都能正常工作的。请使用最新版额现代浏览器来查看这些效果。<br></p>
                <p>这些文字鼠标滑过动画效果都依赖于元素的<code>::before</code>和<code>::after</code>伪元素来制作。下面是“Kukuri”的图片演示效果：&nbsp;<br></p>
                <p>在这个插件中，下拉菜单是通过鼠标点击或用手触摸下拉菜单按钮来触发的。</p>
                <p>这个文字效果的HTML结构如下：<br></p>
                <p>这是一款效果非常炫酷的HTML5和CSS3文字样式和鼠标滑过特效插件。该文字特效中包含了11种不同的文字样式和鼠标滑过文字时的动画效果。部分文字动画效果使用了SVG和Html5&nbsp;Canvas来制作。</p><p>注意这些效果并不是在所有的浏览器中都能正常工作的。请使用最新版额现代浏览器来查看这些效果。<br></p>
                <p>这些文字鼠标滑过动画效果都依赖于元素的<code>::before</code>和<code>::after</code>伪元素来制作。下面是“Kukuri”的图片演示效果：&nbsp;<br></p>
                <p>在这个插件中，下拉菜单是通过鼠标点击或用手触摸下拉菜单按钮来触发的。</p>
                <p>这个文字效果的HTML结构如下：<br></p>
             </article>
        </el-col>
        <el-col :span="7" :offset="1" class="sidebar">
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
            return{
                articleTag: [{
                    tag: 'Loaders',
                    num: '3'
                }, {
                    tag: 'CSS3',
                    num: '2'
                }, {
                    tag: 'HTML',
                    num: '6'
                }, {
                    tag: 'JavaScript',
                    num: '3'
                }, {
                    tag: 'Node',
                    num: '8'
                }, {
                    tag: 'Vue',
                    num: '5'
                }, {
                    tag: 'less',
                    num: '2'
                }, {
                    tag: 'APP',
                    num: '2'
                }, {
                    tag: 'BootStrap',
                    num: '2'
                }]
            }
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
</script>>

<style lang="less">
    body{
        background-color: #f6f6f6;
    }
    .content {
        padding: 30px 150px;
        .article-content {
            padding: 0 20px;
            border-radius: 4px;
            background-color: #fff;
            .article-head{
                padding: 25px 0;
                border-bottom: 1px solid #eee;
                .article-title{
                    color: #444;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 60px;
                    text-align: center;
                    margin: 0;
                }
                .article-tag{
                    text-align: center;
                    span{
                        margin-right: 15px;
                        color: #999;
                        font-size: 13px;
                        i{
                            margin-right: 3px;
                            font-size: 15px;
                        }
                    }
                }
            }
            article{
                 p {
                    margin-bottom: 13px;
                    word-wrap: break-word;
                    text-indent: 1em;
                     color: #656464;
                     font-size: 14px;
                }
            }
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
</style>
