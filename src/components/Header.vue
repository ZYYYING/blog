<template>
    <header>
        <div class="blog-title">
            <h1>
                 <span>张莹</span>的个人博客
            </h1>
        </div>
        <div class="navbar">
            <a class="logo" href="/">Elaine</a>
            <ul>
                <li><router-link to="/blog">博客</router-link></li>
                <li><router-link to="/">关于自己</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: ''
    };
</script>

<style lang="less">
    header{
        .blog-title{
            background: #1abc9c;
            padding: 6px 30px;
            h1{
                letter-spacing: 9px;
                margin: 0;
                font-size: 14px;
                transition: all .5s ease-out;
                font-family: "Microsoft Yahei" !important;
                text-align:left;
                margin:0;
                color:#fff;
                font-weight: normal;
                span{
                    letter-spacing: 8px;
                    font-size: 20px;
                }
            }
        }
        .navbar{
            background-color: #fff;
            border-bottom: 1px solid #1abc9c;
            padding: 16px 150px;
            display: flex;
            justify-content: space-between;
            .logo{
                font-weight: 700;
                font-size: 20px;
                letter-spacing: 2px;
                text-decoration: none;
                color: #1abc9c;
            }
            ul{
                margin: 0;
                li{
                    float: left;
                    list-style: none;
                    margin-left: 50px;
                    a{
                        text-decoration: none;
                        color: #1abc9c;
                    }
                    a.router-link-exact-active {
                        color: #fff;
                        background: #1abc9c;
                        padding: 20px 28px;
                    }
                }
            }
        }
    }
</style>
