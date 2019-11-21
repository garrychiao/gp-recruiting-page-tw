<template>
  <div class="fundraiser">
    <el-row class="graph-content">
      <el-col>
        <h1>認識專員</h1>
      </el-col>

      <el-col>
        <el-row v-for="(item, index) in collapseData" :key="index">
          <el-col>
            <el-card shadow="hover">
              <el-row>
                <el-col :sm="{span: 16, offset: 0}" class="hidden-sm-and-up">
                  <img :src="item.img" width="100%" alt />
                </el-col>
                <el-col :sm="{span: 15, offset: 0}">
                  <h2>{{item.name}}</h2>
                  <p>
                    職位：{{item.position}}
                    <!-- <br /> -->
                    <!-- <small>任職年期：{{item.year}}</small> -->
                  </p>
                  <p style="margin-top: 20px;">{{item.intro}}</p>
                </el-col>
                <el-col
                  :xs="{span: 22, offset: 1}"
                  :sm="{span: 8, offset: 1}"
                  class="hidden-xs-only"
                >
                  <img :src="item.img" width="100%" alt />
                </el-col>
              </el-row>
              <el-collapse>
                <el-collapse-item :name="index">
                  <template slot="title">
                    了解更多
                    <i class="header-icon el-icon-info"></i>
                  </template>
                  <div v-for="(title, index) in item.contentTitle" :key="title">
                    <h3>{{title}}</h3>
                    <p v-html="item.contentText[index]"></p>
                  </div>
                  <el-row v-if="item.bottomImg">
                    <el-col :span="22" :offset="1">
                      <img :src="item.bottomImg" width="100%" alt />
                    </el-col>
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-col>
          <el-divider></el-divider>
          <div class="graph-content">
            <p>
              <strong>
                了解我們更多的工作使命，可觀看以下短片或
                <a
                  href="https://www.greenpeace.org/taiwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >瀏覧我們的網址</a>
              </strong>
            </p>
            <br />
            <el-tabs type="border-card" :stretch="true">
              <el-tab-pane>
                <span slot="label">
                  <i class="el-icon-caret-right"></i> 影片 1
                </span>
                <div style="--aspect-ratio: 16/9;">
                  <iframe
                    class="video"
                    src="https://www.youtube.com/embed/pJfDxRFxv28?enablejsapi=1"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane>
              <!-- <el-tab-pane>
								<span slot="label">
									<i class="el-icon-caret-right"></i> 影片 2
								</span>
								<div style="--aspect-ratio: 16/9;">
									<iframe class="video" src="https://www.youtube.com/embed/hdfQbf6W2sc?enablejsapi=1" width="100%" scrolling="no" frameborder="0"></iframe>
								</div>
							</el-tab-pane>
							<el-tab-pane>
								<span slot="label">
									<i class="el-icon-caret-right"></i> 影片 3
								</span>
								<div style="--aspect-ratio: 16/9;">
									<iframe class="video" src="https://www.youtube.com/embed/dm27NgZwJdA?enablejsapi=1" width="100%" scrolling="no" frameborder="0"></iframe>
								</div>
              </el-tab-pane>-->
            </el-tabs>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Mission",
  data() {
    return {
      collapseData: [
        {
          name: "紹芸",
          position: "資深募款大隊長",
          // year: "4年6個月",
          img:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/jobs/fr-tc.jpg",
          intro: "我要找到讓人類與自然和解的方法，永永遠遠與自然萬物共存。",
          contentTitle: [
            "你從什麼途徑知道綠色和平在招募募款專員？",
            "為什麼想加入綠色和平？",
            "你的主要職責是什麼？",
            "加入綠色和平前後，有什麼不同的感想？",
            "你對哪些工作內容最感興趣？",
            "你的抱負與夢想？",
            "想對新同事說的話？"
          ],
          contentText: [
            "官方網站。",
            `大學時，我因為看到海龜吃了塑膠袋而死的新聞，開始遊說身邊朋友購物時不要拿塑膠袋，我分送給室友一人一組環保餐具。當有朋友忘記帶，我還會把我的筷子借給他們（所以我身上總是帶著五、六雙環保筷）。<br>
							但我漸漸發現，我的朋友不一定都在乎環境，覺得有點孤單！我從一部紀錄片中看到某個環保團體，為了保護樹木，在森林入口紮營一年，甚至爬到樹上以肉身護樹，直到被辣椒水及催淚瓦斯攻擊才不得不放棄。我受到很大震撼，原來還是有人跟我一樣在乎，所以我來到了綠色和平。`,
            "身為募款隊長，我要帶領一個小組，找到更多願意關心環境的人，傳遞環境受到傷害、很需要大家幫助的訊息。",
            "以前覺得能推動政府的政策改變很不簡單，進來綠色和平之後發現更不簡單！我了解到每一個成功背後都有很多人四處奔忙，需要長時間、持續的推動。",
            "三年前我在街頭講起鮪魚要絕種了，沒有人相信，現在我在街頭，已經有七成民眾知道鮪魚快要消失，對我來說，這就是我的工作的價值！讓更多人關心環境，願意挺身而出站在環境這一邊，推動企業與政府，讓世界改變。",
            "找到讓人類與自然和解的方法，希望有一天，人類可以永永遠遠的與自然和萬物共存。",
            "如果把地球想成一艘太空船，所有人都在這艘船上。對於保護環境永不妥協的精神，是下一代能否存續的關鍵。對環境更友善，就從我們自己開始！"
          ]
        },
        {
          name: "柏价",
          position: "募款組長",
          // year: "2年4個月",
          img:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD03_1.jpg",
          intro:
            "在參與綠色和平志工活動的過程中，我開始想，怎樣才能以個人的力量幫助環境更多？而在街頭倡議與募集資金，幫助推動環境問題由源頭改善，就是我能盡力幫助環境的機會！",
          contentTitle: [
            "簡單自我介紹",
            "在街頭募款工作的意義",
            "為什麼這份工作很熱血",
            "解釋街頭募款到影響企業或政府，到能保護環境這些階段的關係",
            "在這裡工作的感覺….開心？成長？改變？",
            "給想來這裏工作的人簡短一句話的期待"
          ],
          contentText: [
            "大家好！我是柏价，我是募款組長，2017 年來到綠色和平。我在參加過幾次綠色和平的志工活動後，才開始萌生進入環境 NGO 工作的念頭。",
            "參加綠色和平志工活動後，我開始在想，要怎樣才能以我個人的力量幫助環境更多呢？而這樣在街頭倡議、募集資金，幫助環境議題從源頭去改善的工作，就是能盡我心力來幫助環境的機會！",
            "當我站在街頭上時，就像是跟那些在為全球自然環境奮鬥的鬥士站在同一陣線的感覺，我們都在為我們最熱愛的這顆美麗星球奮鬥呢！",
            "沒有人在意的事情，就不會得到改變！街頭的夥伴不只是在募集資金，協助環境問題的調查與推動工作，也是在街頭邀請更多公民、消費者，一起站在我們的背後，監督政府與企業，扭轉這些環境問題。",
            "這份工作需要在街頭倡議，讓我能在他人面前充分的展現自我。每天跟其他人面對面，表達我對這些事的關心與熱忱，對我來說是一件非常痛快的事情！身旁夥伴們的支持與幫助，更讓我持續的不斷往前衝！",
            "理想會支持著我們前進，我們都有自己的主題曲，Change The world!"
          ],
          bottomImg:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD03_2.jpg"
        },
        {
          name: "芳妤",
          position: "資深募款組長",
          // year: "2年4個月",
          img:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD01_1.jpg",
          intro:
            "我認為這份工作的意義，是將感覺遙遠的環境議題帶入每一個人的生活中，並透過這樣的推廣讓民眾了解，環境保護的重要與公民參與的無限可能。",
          contentTitle: [
            "簡單自我介紹",
            "在街頭募款工作的意義",
            "為什麼這份工作很熱血",
            "解釋街頭募款到影響企業或政府，到能保護環境這些階段的關係",
            "在這裡工作的感覺….開心？成長？改變？",
            "給想來這裏工作的人簡短一句話的期待"
          ],
          contentText: [
            "我是郭芳妤，1991 年出生，26 歲，目前是資深募款組長。",
            "我認為這份工作的意義，是將感覺遙遠的環境議題帶入每一個人的生活中，並透過這樣的推廣讓民眾了解，環境保護的重要與公民參與的無限可能。",
            "我認為這份工作的意義，是將感覺遙遠的環境議題帶入每一個人的生活中，並透過這樣的推廣讓民眾了解，環境保護的重要與公民參與的無限可能。",
            "在街頭，接觸到的是不同想法的民眾，沒有任何範圍限制，每一位民眾代表的是消費者，具投票權的公民。當消費者擁有知情權與選擇權，願意改變想法與購買習慣時，企業與政府為了回應消費者的需求，勢必要改變生產與銷售的方式，甚至政策。透過影響供應商到各品牌，從源頭帶來乾淨生產",
            "在這工作最開心的是團隊的每一名成員，都為了共同目標去努力，讓環境更好。而我們想要的改變是整體社會的價值建立，每一天我都更相信積極的行動能帶來改變。",
            "這份工作有許多的挑戰，但是我們是在做對的事情，我們會讓環境更好。"
          ],
          bottomImg:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD01_3.jpg"
        },
        {
          name: "韻鈞",
          position: "募款大隊長",
          // year: "2年4個月",
          img:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD04_1.jpg",
          intro:
            "我認為這份工作的意義，是將感覺遙遠的環境議題帶入每一個人的生活中，並透過這樣的推廣讓民眾了解，環境保護的重要與公民參與的無限可能。",
          contentTitle: [
            "簡單自我介紹",
            "在街頭募款工作的意義",
            "為什麼這份工作很熱血",
            "解釋街頭募款到影響企業或政府，到能保護環境這些階段的關係",
            "在這裡工作的感覺….開心？成長？改變？",
            "給想來這裏工作的人簡短一句話的期待"
          ],
          contentText: [
            "我是 Ginger 王韻鈞，今年 27 歲，在綠色和平工作兩年又九個月，目前擔任募款大隊長。",
            "透過在街頭與民眾直接對話與募款，是綠色和平主要資金來源。民眾的支持是推動各個議題的基礎，我們擔任守望環境不可或缺的角色。街頭募款與教育團隊正面出擊，突破階層、年齡的同溫層，邀請更多人關心環境問題，展現綠色和平無所畏懼的精神，Positive change through action！",
            "為了守護環境的信念，與一群夥伴站上街頭、為環境發聲，不論嚴冬酷暑，無所畏懼的站在街頭。我們因為了解塑膠對海洋的破壞，會嚴以律己，對自己所用的任何一次性塑膠都十分的計較，為了環境寧可忍受一時不便甚至還樂在其中，這些種種都讓我覺得這份工作十分的熱血！",
            "在街頭主動出擊，幫助弱勢、不會說話的環境與生物，藉以集結公民力量。面對民眾，我常常強調公民力量的重要，綠色和平能達成一次次的環境成果，並非靠組織而已，而是來自於我們背後強力的後盾，我們每一個人既是企業的消費者更是政府的選民，為環境監督守護非公民不可。也體認到當大眾關心了解的越多環境破壞才有更多的機會給改變。",
            "在街頭募款與教育團隊工作快要三年的時間裡，品嚐了酸甜苦辣，有感動、有傷心、有振奮的時刻等等，對我來說絕對是開心並且值得的回憶。以前的我，也曾經對環境、社會感到悲觀，但在這份工作中，我看到了夥伴對環境工作的堅持，我深信還有太多事可以努力。即使環境破壞比想像中來得嚴重，也從悲觀轉為正面積極，面對問題，更懂得珍惜這並非理所當然的資源，學習感恩。",
            `在這份工作中，最珍貴的就是能夠一邊工作、一邊學習！<br>來吧！一起當地球超人！（眼神發亮）`
          ],
          bottomImg:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD04_2.jpg"
        },
        {
          name: "Po",
          position: "募款大隊長",
          // year: "2年4個月",
          img:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD02_1.jpg",
          intro:
            "今天我們的理想是影響政府和企業，當 NGO 組織再怎麼有錢都贏不過他們時，背後這些支持者的選票和消費力就是我們要放大的價值。",
          contentTitle: [
            "簡單自我介紹",
            "在街頭募款工作的意義",
            "為什麼這份工作很熱血",
            "解釋街頭募款到影響企業或政府，到能保護環境這些階段的關係",
            "在這裡工作的感覺….開心？成長？改變？",
            "給想來這裏工作的人簡短一句話的期待"
          ],
          contentText: [
            "我是 Po，今年 29 歲，在綠色和平工作即將 5 年的時間，目前擔任 DD 部門的募款大隊長一職。",
            "為了環境，有許多冒著生命危險在努力的背後功臣，透過我們而被看到。",
            "與其賣一個自己都不相信的產品，為不同的動物、人、環境發聲，感覺更有意義！",
            `我相信各個團體就像不同個人一樣有自己的專長，沒有最好的方式。但任何團體的募款部門同樣都必須面對最現實的問題是：「有沒有足夠的經費支持我們的理想？」<br>
							同樣一張 100 元鈔票，我的理想是餵飽一個人的一餐，那很足夠。但當我的理想是幫助 100 萬甚至更多人的時候，我要思考的是，如何放大這 100 元鈔票的價值。<br>
							今天我們的理想是影響政府和企業，當 NGO 組織再怎麼有錢都贏不過他們時，背後這些支持者的選票和消費力就是我們要放大的價值。`,
            "在這邊結識了很多關心各種社會議題的夥伴，大家雖然有時相信的方法不同，但是方向都是一致的。也因為這樣的差異性，讓我不斷的成長。有真的開心且真實活著的感覺。",
            `這份工作並沒有那麼偉大，我只是記得曾經有人跟我說過：「就算一生中看不到所謂的世界和平，但每個人都有選擇停止破壞的權利。」<br>我想就這麼單純而已吧。`
          ],
          bottomImg:
            "https://www.greenpeace.org/archive-taiwan/Global/taiwan/planet3/photos/about/Feature-Story/2017/08-11_DD02_4.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card {
  margin-bottom: 20px;
}

[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}

[style*="--aspect-ratio"] > img {
  height: auto;
}

@supports (--custom: property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }
  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (4 / 3));
  }
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>
