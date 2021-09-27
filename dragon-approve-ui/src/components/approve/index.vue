<template>
  <div class="dg-approve">
    <template v-for="(item, index) of nodeList">
      <div class="dg-approve_box" :key="index">
        <div v-if="item.nodeType != '1'" class="dg-box_edge"></div>
        <div class="dg-box_main">
          <div class="dg-main_node"></div>
          <div class="dg-main_avatar">{{ item.nodeAbbre || "H" }}</div>

          <div class="dg-main_desc dg-main_text">
            <span> {{ item.nodeName }}</span>
            <span v-if="!showCreate"> [{{ item.nodeStatusName }}]</span>
          </div>

          <!-- approve status icon -->
          <div
            :class="{
              'dg-main_icon': !showCreate,
              'dg-main_icon_close': showCreate,
            }"
          >
            <img
              class="dg-main_icon_image"
              v-if="showCreate"
              :src="clearIcon"
              @click="handleClearData(item)"
            />
            <img
              class="dg-main_icon_image"
              v-if="item.nodeStatusCode == '1' && !showCreate"
              :src="waitIcon"
            />
            <img
              class="dg-main_icon_image"
              v-else-if="item.nodeStatusCode == '2' && !showCreate"
              :src="passIcon"
            />
            <img
              class="dg-main_icon_image"
              v-else-if="item.nodeStatusCode == '3' && !showCreate"
              :src="failIcon"
            />
          </div>

          <!-- approve explain -->
          <div class="dg-main_explain dg-main_text" v-if="!showCreate">
            <template v-if="Boolean(item.explainLabel)">
              {{ item.explainLabel }}：
            </template>
            <template
              v-if="Boolean(item.explainLabel) && Boolean(item.explainValue)"
            >
              {{ item.explainValue }}
            </template>
          </div>

          <!-- line -->
          <div v-if="item.nodeType != '1'" class="dg-box_main_up"></div>
          <div
            v-if="
              item.nodeType != '2' || (index + 1 === data.length && showCreate)
            "
            class="dg-box_main_down"
          ></div>
        </div>
        <div
          v-if="
            item.nodeType != '2' || (index + 1 === data.length && showCreate)
          "
          class="dg-box_edge"
        ></div>
      </div>
    </template>
    <!-- add node -->
    <div class="dg-approve_box" v-if="showCreate">
      <div class="dg-box_edge" v-if="data && data.length > 0"></div>
      <div class="dg-box_main">
        <div class="dg-main_node"></div>
        <div class="dg-add_avatar" @click="handleAddNode">
          <img class="dg-add_icon_image" :src="addIcon" />
        </div>
        <div class="dg-box_main_up" v-if="data && data.length > 0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { addIcon, clearIcon, failIcon, passIcon, waitIcon } from "@/constant";
export default {
  name: "Approve",
  props: {
    data: {
      type: Array,
      require: true,
      default: () => [],
    },
    showCreate: {
      type: Boolean,
      default: true,
      desc: "show add area",
    },
  },
  data() {
    return {
      addIcon,
      clearIcon,
      failIcon,
      passIcon,
      waitIcon,
    };
  },
  computed: {
    nodeList() {
      let list = this.data || [];
      list?.forEach((item, index, array) => {
        if (index == 0) {
          this.$set(item, "nodeType", "1");
        } else if (index + 1 == array.length) {
          this.$set(item, "nodeType", "2");
        } else {
          this.$set(item, "nodeType", "3");
        }
      });
      return list;
    },
  },
  methods: {
    //删除节点
    handleClearData(val) {
      this.$emit("node-delete", val);
    },
    //新增节点
    handleAddNode() {
      this.$emit("node-create");
    },
  },
};
</script>

<style scoped lang="less">
@blue: #417ff9;
@black: #3d4757;
@grey: #a5b5ce;
@white: #ffffff;

.dg-approve {
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  line-height: initial;
  .dg-approve_box {
    .dg-box_edge {
      height: 30px;
      margin-left: 5px;
      border-left: 1px solid @grey;
    }
    .dg-box_main {
      display: flex;
      align-items: center;
      position: relative;
      height: 30px;
      .dg-main_node {
        width: 10px;
        height: 10px;
        background: @grey;
        border-radius: 50%;
      }
      .dg-main_avatar {
        margin-left: 10px;
        width: 30px;
        height: 30px;
        background-color: @blue;
        border-radius: 50%;
        color: @white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 600;
      }

      .dg-main_desc {
        margin-left: 10px;
        font-weight: 400;
      }

      .dg-main_icon {
        position: absolute;
        top: 15px;
        left: 44px;
        .dg-main_icon_image {
          width: 12px;
          height: 12px;
        }
      }

      .dg-main_icon_close {
        position: absolute;
        bottom: 14px;
        left: 44px;
        z-index: 10;
        .dg-main_icon_image {
          width: 12px;
          height: 12px;
          cursor: pointer;
        }
      }

      .dg-main_explain {
        position: absolute;
        top: 30px;
        left: 60px;
        font-size: 12px !important;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 30px;
        display: flex;
        align-items: flex-start;
      }

      .dg-main_text {
        font-size: 14px;
        font-family: PingFang SC;
        color: @black;
      }

      .dg-box_main_up {
        position: absolute;
        width: 100%;
        height: 10px;
        border-left: 1px solid @grey;
        top: 0;
        left: 5px;
      }

      .dg-box_main_down {
        position: absolute;
        width: 100%;
        height: 10px;
        border-left: 1px solid @grey;
        bottom: 0;
        left: 5px;
      }

      .dg-add_avatar {
        display: flex;
        align-items: center;
        .dg-add_icon_image {
          width: 26px;
          height: 26px;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>