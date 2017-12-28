<template>
    <div class="login-content">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input v-model="loginForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                loginForm:{
                    account:'',
                    pass:''
                },
                rules:{
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    .login-content{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        margin-left: -150px;
        margin-top: -150px;
        text-align: center;
    }
</style>
