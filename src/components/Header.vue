<template>
    <header>
        <div class="navbar">
            <a class="logo" href="/">Elaine</a>
            <ul>
                <li><router-link to="/">a</router-link></li>
                <li><router-link to="/blog">博客</router-link></li>
                <li><router-link to="/">联系方式</router-link></li>
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
        background-color: #1abc9c;
        border-color: #16a085;
        padding: 45px 0;
        .navbar{
            padding: 0 150px;
            display: flex;
            justify-content: space-between;
            .logo{
                font-weight: 700;
                font-size: 20px;
                letter-spacing: 2px;
                text-decoration: none;
                color: #fff;
            }
            ul{
                margin: 0;
                li{
                    float: left;
                    list-style: none;
                    margin-left: 50px;
                    a{
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
