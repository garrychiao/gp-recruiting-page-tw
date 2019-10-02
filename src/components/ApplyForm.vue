<template>
  <div class="personnel">
    <el-row>
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}">
        <h1>申請成為全職籌款幹事及街頭教育專員</h1>
      </el-col>
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}">
        <img src="https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/applynow.jpg" width="100%" alt="">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row class="form-content">
      <el-col :span="22" :offset="1">
        <el-card shadow="always">
          <el-form :model="applyForm" :rules="rules" ref="applyForm" label-position="top" label-width="120px" class="demo-applyForm">
            <el-form-item label="性別" prop="gender">
              <el-radio-group v-model="applyForm.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="中文全名" prop="name">
              <el-input v-model="applyForm.name" placeholder="中文全名"></el-input>
            </el-form-item>
            <el-form-item label="聯絡電話" prop="phone">
              <el-input v-model="applyForm.phone" placeholder="聯絡電話"></el-input>
            </el-form-item>
            <el-form-item label="電郵地址" prop="email">
              <el-input v-model="applyForm.email" placeholder="電郵地址"></el-input>
            </el-form-item>
            <el-form-item label="出生年份" prop="birthYear">
              <el-date-picker type="year" placeholder="Pick a year" v-model="applyForm.birthYear" style="width: 100%;"></el-date-picker>
            </el-form-item>
            
            <el-form-item>
              <el-button type="success" @click="submitForm('applyForm')">提交申請</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const axios = require('axios');
const config = require('../config/config');


export default {
  name: 'applyForm',
  data() {
    return {
      applyForm: {
        name: '',
        phone: '',
        email: '',
        birthYear: '',
        gender: '男'
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: 'Please select Activity zone', trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: 'Please pick a time', trigger: 'blur' }
        ],
        birthday: [
          { type: 'date', required: true, message: 'Please select at least one activity type', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {

          var d = new Date(this.applyForm.birthYear);
          let year = d.getFullYear();
      
          let data = new FormData();
          data.append('Chi_Name', this.applyForm.name);
          data.append('Gender', this.applyForm.gender);
          data.append('Phone', this.applyForm.phone);
          data.append('Email', this.applyForm.email);
          data.append('Year_Of_Birth', year);
          data.append('Source', window.location.search);

          let postRef = await axios.post(config.script, data);

          let res = postRef.data;

          console.log(res);
          
        } else {

          console.log(window.location.search);
          
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
