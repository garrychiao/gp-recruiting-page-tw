<template>
  <div class="footer-top">
    <el-row>
      <el-col class="hidden-md-and-up">
        <el-row>
          <el-col :span="5" :offset="3">
            <h5>追蹤我們</h5>
          </el-col>
          <el-col :span="16">
            <ul class="mobile-social">
              <li class="icons horizontal">
                <a href="https://www.facebook.com/greenpeacehk/" aria-label="facebook">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
                </a>
              </li>
              <li class="icons horizontal">
                <a href="https://www.instagram.com/greenpeace_hk" aria-label="instagram">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
                </a>
              </li>
              <li class="icons horizontal">
                <a href="https://www.youtube.com/user/GreenpeaceChina" aria-label="youtube">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" />
                </a>
              </li>
              <li class="icons horizontal">
                <a href="https://twitter.com/greenpeace_hk" aria-label="twitter">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
                </a>
              </li>
            </ul>
          </el-col>
          <el-col :span="18" :offset="3">
            <el-divider></el-divider>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        :xs="{span: 20, offset: 2}"
        :sm="{span: 20, offset: 2}"
        :md="{span: 3, offset: 3}"
        :xl="{span: 3, offset: 3}"
      >
        <div class="logo-container">
          <img
            src="https://www.greenpeace.org/hongkong/wp-content/themes/planet4-child-theme-hongkong/static/images/logo_zh_gp_w footer.svg"
            width="100%"
            alt
          />
        </div>
        <div class="footer-intro">
          <p>
            綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。 我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。
            <br />
            <br />獲豁免繳稅慈善機構編號︰ 91/5418
          </p>
        </div>
      </el-col>
      <el-col
        :xs="{span: 10, offset: 4}"
        :sm="{span: 10, offset: 4}"
        :md="{span: 2, offset: 5}"
        :xl="{span: 2, offset: 5}"
      >
        <h5>我們的工作</h5>
        <ul>
          <li>
            <a href="https://www.greenpeace.org/hongkong/our-committment/all-projects/">環保項目</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/our-committment/full-issue-list/">環保議題</a>
          </li>
        </ul>
      </el-col>
      <el-col :xs="{span: 10}" :sm="{span: 10}" :md="{span: 3}">
        <h5>關於綠色和平</h5>
        <ul>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/overview/">簡介</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/mission/">核心使命</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/how-we-act/">行動理念</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/reports/">報告刊物</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/people/">團隊成員</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/hiring/">職位空缺</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/contact/">聯絡我們</a>
          </li>
          <li>
            <a href="https://www.greenpeace.org/hongkong/about/faq/">常見問題</a>
          </li>
        </ul>
      </el-col>
      <el-col :sm="{span: 3}" class="hidden-sm-and-down">
        <h5>追蹤我們</h5>
        <ul>
          <li class="icons horizontal">
            <a href="https://www.facebook.com/greenpeacehk/" aria-label="facebook">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
            </a>
          </li>
          <li class="icons horizontal">
            <a href="https://www.instagram.com/greenpeace_hk" aria-label="instagram">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
            </a>
          </li>
          <li class="icons horizontal">
            <a href="https://www.youtube.com/user/GreenpeaceChina" aria-label="youtube">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" />
            </a>
          </li>
          <li class="icons horizontal">
            <a href="https://twitter.com/greenpeace_hk" aria-label="twitter">
              <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
  <!--
    <div class="footer-bot">
        <el-row>
            <el-col :xs="{span: 22, offset: 1}" :sm="{span: 18, offset: 3}" :md="{span: 15, offset: 3}" :xl="{span: 15, offset: 3}">
                <ul>
                    <li class="horizontal"><a class="green" href="https://www.greenpeace.org/hongkong/press-media/press-releases/">新聞中心</a></li>
                    <li class="horizontal"><a class="green" href="https://www.greenpeace.org/hongkong/my-preferences/">我的喜好</a></li>
                </ul>
            </el-col>
            <el-col :xs="{span: 22, offset: 1}" :sm="{span: 18, offset: 3}" :md="{span: 15, offset: 3}" :xl="{span: 15, offset: 3}">
                <el-divider></el-divider>
            </el-col>
            <el-col :xs="{span: 21, offset: 1}" :sm="{span: 18, offset: 3}" :md="{span: 15, offset: 3}" :xl="{span: 15, offset: 3}">
                <ul>
                    <li class="horizontal small"><a href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"><small>私隱政策與個人資料收集聲明</small></a></li>
                    <li class="horizontal small"><a href="https://www.greenpeace.org/hongkong/policies/terms-and-conditions/"><small>版權</small></a></li>
                    <li class="horizontal small"><a href="https://www.greenpeace.org/hongkong/street-fundraising/"><small>街頭籌款團隊</small></a></li>
                </ul>
            </el-col>
        </el-row>
    </div>
  -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  created() {},
  methods: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  ul {
    display: contents;
    list-style: none;
    padding: unset;
    .horizontal {
      float: left;
      margin-right: 10px;
    }
    .icons {
      font-size: 1.4rem;
    }
    .green {
      color: #6c0;
    }
    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  padding-top: 60px;
  color: white;
  .footer-top {
    background-color: #292f47;
    .logo-container {
      width: 100%;
      padding: 20px;
    }
    .footer-intro {
      // font-weight: 500;
    }
  }
  .footer-bot {
    padding: 20px 0;
    background-color: #1a1c26;
  }
}
@media (max-width: 991px) {
  .mobile-social {
    li {
      margin-top: 15px;
      margin-left: 10px;
    }
  }
  .footer-top {
    background-color: #292f47;
    padding-top: 20px;
    padding-bottom: 20px;
    .logo-container {
      padding: 20px 60px !important;
    }
    .footer-intro {
      padding: 20px;
    }
  }
}
</style>
