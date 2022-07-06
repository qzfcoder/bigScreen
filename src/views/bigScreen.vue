<template>
  <div class="page1">
    <el-row class="listTop">
      <el-col :span="7">
        <span class="title-6">模块一分析</span>
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <div class="left1">
          <double-area
            :selectRangeDate="selectRangeDate"
            ref="chart1"
          ></double-area>
        </div>
        <div class="left2">
          <!-- <test></test> -->

          <div style="width: 40%; float: left; height: 100%">
            <!-- <pie ref="chart3" id="left_2_2" :data="data2"></pie> -->
          </div>
        </div>
        <div class="left3">
          echarts部分
          <div style="width: 40%; float: left; height: 100%">
            <!-- <pie ref="chart5" id="left_3_2" :data="data4"></pie> -->
          </div>
        </div>
      </el-col>
      <el-col :span="10"> echarts部分 </el-col>
      <el-col :span="7">
        <div class="rigtTop-1">
          <span class="title"><span class="title-8">世界地图分析</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          111
          <world-map ref="chart7"></world-map>
        </div>
        <div class="rightTop-2">
          <span class="title"><span class="title-6">模块六分析</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="rightTop-list">
            <div class="list">
              <!-- <popular-bar ref="chart8"></popular-bar> -->
            </div>
            <div class="list">
              <!-- <ring ref="chart9" :data="data5"></ring> -->
            </div>
            <div class="list">
              <!-- <ring ref="chart10" :data="data6"></ring> -->
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="listBottom">
      <el-col :span="9">
        <div class="content">
          <span class="title"><span class="title-6">模块二分析</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <el-row class="topLine">
            <el-col :span="24">
              <!-- <lines ref="chart11"></lines> -->
            </el-col>
          </el-row>
          <el-row class="bottomPie">
            <el-col :span="12">
              <!-- <pie-ring ref="chart12" :data="data7"></pie-ring> -->
            </el-col>
            <el-col :span="12">
              <!-- <pie-ring ref="chart13" :data="data8"></pie-ring> -->
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <span class="title"><span class="title-6">模块三分析</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="behavior">
            <!-- <area-chart style="height: 55%" ref="chart14" :select-range-date="selectRangeDate"
                                    :config="configData9"></area-chart>
                        <colors-bar ref="chart15" :data="colorsData"></colors-bar> -->
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <span class="title"><span class="title-6">模块四分析</span></span>
          <!-- <funnel ref="chart16"></funnel> -->
        </div>
      </el-col>
      <el-col :span="7">
        <div class="content">
          <span class="title"><span class="title-6">模块五分析</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="appUse">
            <!-- <line-bar ref="chart17"></line-bar> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import doubleArea from "./echartsPart/doubleArea.vue";
import worldMap from "./echartsPart/worldMap.vue";
import test from "./echartsPart/test.vue";
export default {
  components: {
    doubleArea,
    worldMap,
    test,
  },
  data() {
    return {
      selectRangeDate: [
        [2022, 5, 12],
        [2022, 5, 13],
        [2022, 5, 14],
        [2022, 5, 15],
        [2022, 5, 16],
        [2022, 5, 17],
        [2022, 5, 18],
        [2022, 5, 19],
        [2022, 5, 20],
        [2022, 5, 21],
        [2022, 5, 22],
        [2022, 5, 23],
        [2022, 5, 24],
        [2022, 5, 25],
        [2022, 5, 26],
        [2022, 5, 27],
        [2022, 5, 28],
        [2022, 5, 29],
        [2022, 5, 30],
        [2022, 5, 31],
        [2022, 6, 1],
        [2022, 6, 2],
        [2022, 6, 3],
        [2022, 6, 4],
        [2022, 6, 5],
        [2022, 6, 6],
        [2022, 6, 7],
        [2022, 6, 8],
        [2022, 6, 9],
        [2022, 6, 10],
      ],
    };
  },
  //   watch: {
  //     selectRangeDate: function () {
  //       for (let i = 1; i < 18; i++) {
  //         this.$refs["chart" + i].setChart();
  //       }
  //     },
  //   },
  //   methods: {},
  //   mounted() {
  //     this.resizeFn = this.$debounce(() => {
  //       // 通过捕获系统的onresize事件触发我们需要执行的事件
  //       for (let i = 1; i < 18; i++) {
  //         this.$refs["chart" + i].setChart();
  //       }
  //     }, 500);
  //     window.addEventListener("resize", this.resizeFn);
  //   },
  //   beforeDestroy() {
  //     window.removeEventListener("resize", this.resizeFn);
  //   },
};
</script>

<style lang="scss" scoped>
.page1 {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 14px 20px 20px;
  background: #03044a;
  overflow: hidden;

  .listTop {
    height: 60%;

    .ivu-col {
      height: 100%;

      .leftTop {
        width: 100%;
        height: 100%;
        border: 1px solid #0d2451;
        position: relative;

        .left1 {
          width: 100%;
          height: 40%;
        }

        .left2,
        .left3 {
          width: 100%;
          height: 30%;
          padding: 10px 0;
        }
      }

      .rightTop-1 {
        width: 100%;
        height: 55%;
        border: 1px solid #0d2451;
        position: relative;
      }

      .rightTop-2 {
        width: 100%;
        margin-top: 5%;
        height: 40%;
        border: 1px solid #0d2451;
        position: relative;

        .rightTop-list {
          width: 100%;
          height: 100%;

          .list {
            width: 30%;
            height: 100%;
            float: left;

            &:first-child {
              width: 40%;
            }
          }
        }
      }
    }
  }

  .listBottom {
    height: 40%;

    .ivu-col-span-9 {
      width: 33.5%;
      margin-right: 0.6667%;
    }

    .ivu-col-span-4 {
      width: 17.66667%;
      margin-right: 0.6667%;
    }

    .ivu-col {
      height: 100%;

      .content {
        margin-top: 30px;
        height: calc(100% - 30px);
        border: 1px solid #0d2451;
        position: relative;

        .ivu-row {
          &.topLine {
            height: 55%;
          }

          &.bottomPie {
            height: 45%;
          }

          .ivu-col {
            height: 100%;

            .charts-list {
              height: 100%;
              width: 100%;
            }
          }
        }

        .behavior {
          width: 100%;
          height: 100%;
        }

        .appUse {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>