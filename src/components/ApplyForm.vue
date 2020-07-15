<template>
  <div class="personnel">
    <el-row>
      <el-col>
        <h1>申請成為全職募款與教育專員</h1>
      </el-col>
      <el-col>
        <img src="../assets/img/GP0STTIZR_Web_size.jpg" width="100%" alt />
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row class="form-content">
      <el-col>
        <el-card shadow="always">
          <el-form
            :model="applyForm"
            :rules="rules"
            ref="applyForm"
            label-position="top"
            label-width="120px"
            class="demo-applyForm"
          >
            <el-form-item label="工作地點" prop="location">
              <el-radio-group v-model="applyForm.location">
                <el-radio label="臺北"></el-radio>
                <el-radio label="臺中"></el-radio>
                <el-radio label="高雄"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="性別" prop="gender">
              <el-radio-group v-model="applyForm.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="中文全名" prop="name">
              <el-input
                v-model="applyForm.name"
                placeholder="中文全名"
              ></el-input>
            </el-form-item>
            <el-form-item label="聯絡電話" prop="phone">
              <el-input
                v-model="applyForm.phone"
                placeholder="聯絡電話"
              ></el-input>
            </el-form-item>
            <el-form-item label="電郵地址" prop="email">
              <el-input
                v-model="applyForm.email"
                placeholder="電郵地址"
              ></el-input>
            </el-form-item>
            <el-form-item label="出生年份" prop="birthYear">
              <el-date-picker
                type="year"
                placeholder="出生年份"
                v-model="applyForm.birthYear"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button
                type="success"
                :loading="submitLoading"
                @click="submitForm('applyForm')"
                >提交申請</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import dayjs from "dayjs";
const axios = require("axios");
const config = require("../config/config");

export default {
  name: "applyForm",
  data() {
    return {
      submitLoading: false,
      applyForm: {
        name: "",
        phone: "",
        email: "",
        birthYear: "",
        gender: "男",
        location: "臺北"
      },
      rules: {
        name: [{ required: true, message: "請輸入中文全名", trigger: "blur" }],
        phone: [{ required: true, message: "請輸入聯絡電話", trigger: "blur" }],
        email: [
          {
            type: "email",
            required: true,
            message: "請輸入電郵地址",
            trigger: "blur"
          }
        ],
        birthYear: [
          {
            type: "date",
            required: true,
            message: "請輸入出生年份",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.submitLoading = true;
          var d = new Date(this.applyForm.birthYear);
          let year = d.getFullYear();

          let data = new FormData();
          data.append("Timestamp", dayjs().format('YYYY-MM-DD HH:mm:ss'));
          data.append("Location", this.applyForm.location);
          data.append("Chi_Name", this.applyForm.name);
          data.append("Gender", this.applyForm.gender);
          data.append("Phone", this.applyForm.phone);
          data.append("Email", this.applyForm.email);
          data.append("Year_Of_Birth", year);
          data.append("Source", window.location.search);

          try {
            // console.log(config.script);
            let postRef = await axios.post(config.script, data);
            

            let res = postRef.data;

            if (res.result === "success") {
              Swal.fire(
                "申請已提交",
                "綠色和平將於５個工作天內聯絡你。",
                "success"
              );
              this.submitLoading = false;
            } else {
              this.submitLoading = false;
              console.log(res);
            }
            await this.sendEmail(this.applyForm.location, this.applyForm.name, this.applyForm.gender, this.applyForm.phone, this.applyForm.email, year);
          } catch (err) {
            this.submitLoading = false;
            console.log(err);
          }
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async sendEmail(location, name, gender, phone, email, birthYear) {
      try {

        const emailKey = `https://cors-anywhere.small-service.gpeastasia.org/https://us-central1-peppy-house-279114.cloudfunctions.net/mail-test2`;
        // const emailKey = `https://us-central1-peppy-house-279114.cloudfunctions.net/mail-test2`;

        const subject = `${location} - ${name} 申請成為全職募款與教育專員`;
        let message = `工作地點：${location}\n中文全名：${name}\n聯絡電話：${phone}\n電郵地址：${email}\n性別：${gender}\n出生年份：${birthYear}`

        let data = {
          location,
          subject,
          message
        }

        let res = await axios.post(emailKey, data);
        console.log(res.data);

      } catch (err) {
        throw err
        console.log(err);
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
