<template>
    <el-row class="content">
        <div class="title">
            <p>标签 <span>"CSS3"</span> 相关文章</p>
        </div>
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

</script>

<style lang="less" >
    body{
        background-color: #f6f6f6;
    }
    .content{
        padding: 30px 150px;
        .title{
            font-size: 18px;
            span{
                color: #16a085;
            }
        }
        article {
            background-color: #fff;
            padding: 20px;
            margin-bottom: 10px;
            div {
                .lable {
                    border: 1px solid #1abc9c;
                    color: #1abc9c;
                    border-radius: 2px;
                    text-decoration: none;
                    padding: 4px 6px;
                    font-size: 13px;
                }
                h2 {
                    display: inline;
                    font-size: 20px;
                    font-weight: normal;
                    margin-left: 10px;
                    a {
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
</style>
