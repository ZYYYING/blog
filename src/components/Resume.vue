<template>
    <el-row class="resume-content">
        <el-col :span="24" class="">
            <div class="banner">
                <p>关于自己</p>
            </div>
            <div class="about">
                <p class="title">个人介绍</p>
                <img src="http://www.tuzhikm.com/img/user.png">
                <p>张莹</p>
                <p>前端开发</p>
                <el-button  type="primary">了解更多</el-button>
            </div>
            <div class="skill">
                <p class="title">我的技能</p>
                <div class="skill-item" v-for="(skill,index) in skillList">
                    <span>{{skill.title}}</span>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="exception"></el-progress>
                </div>
            </div>
            <div class="contact">
                <p class="title">与我联系</p>
                <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <el-button>上左</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <el-button>上左</el-button>
                </el-tooltip>
            </div>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        data(){
            return{
                skillList:[{
                    title:"html",
                    percentage:85
                },{
                    title:"CSS",
                    percentage:85
                },{
                    title:"JavaScript",
                    percentage:85
                },{
                    title:"BootStrap",
                    percentage:85
                },{
                    title:"Vue",
                    percentage:85
                },{
                    title:"JQUERY",
                    percentage:85
                },{
                    title:"Framewoke",
                    percentage:85
                }]
            }
        }
    };
</script>

<style lang="less">
    body{
        background-color: #f6f6f6 !important;
    }
    .resume-content{
        .banner{
            background: #fff;
            padding:15px 0;
            width: 70%;
            margin: auto;
            border-bottom: 1px solid #eee;
            text-align: left;
            p{
                padding-left: 30px;
                font-size: 20px;
                margin: 0;
            }
        }
        p.title{
            text-align: center;
            background: #f6f6f6;
            color: #555;
            font-size: 18px;
            line-height: 43px;
            border-left: 4px solid #16a085;
            margin: 0;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .about{
            text-align: center;
            background: #fff;
            padding:20px 0;
            width: 70%;
            margin: auto;
            img{
                border-radius: 50%;
                width: 100px;
            }
            .el-button{
                width: 310px;
                font-size: 16px;
                letter-spacing: 2px;
                margin-top: 20px;
                background-color: #16a085;
                margin-bottom: 30px;
            }
        }
        .skill{
            background: #fff;
            padding: 20px 0;
            text-align: center;
            width: 70%;
            margin: auto;
            .skill-item{
                margin-bottom: 30px;
                span{
                    width:150px;
                    display: inline-block;
                    font-size: 15px;
                    color: #555;
                }
                .el-progress{
                    width:55%;
                    display: inline-block;
                    .el-progress-bar__inner{
                        background-color: #1abc9c!important;
                        animation: progress-bar-stripes 2s linear infinite;
                        background-size: 40px 40px;
                        -o-animation: progress-bar-stripes 2s linear infinite;
                        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,
                        transparent 50%, rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                    }
                }
            }

        }
        .contact{
            text-align: center;
            background: #fff;
            padding: 20px 0;
            width: 70%;
            margin: auto;
        }
    }
</style>
