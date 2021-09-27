# dragon-approve-ui

## Package setup
```
npm install --save dragon-approve-ui
```

## design sketch
- https://pic3.pocoimg.cn/image/poco/works/63/2021/0927/10/16327110895802072_201878460.png?imageView2/1/w/480/h/480/q/95&
- https://pic3-nc.pocoimg.cn/image/poco/works/39/2021/0927/10/16327114454231851_201878460_S480.png
- https://pic3-nc.pocoimg.cn/image/poco/works/51/2021/0927/10/16327114762892835_201878460_S480.png

## Example
```
<template>
  <div>
        <dg-approve
            :data="approveDataList"
            :showCreate="true"
            @node-create="handleNodeCreate"
            @node-delete="handleNodeDelete"
        >
        </dg-approve>
  </div>
</template>
<script>
import "dragon-approve-ui";
import "dragon-approve-ui/dist/dragon-approve-ui.css";

export default {
  data() {
    return {
      approveDataList: [
        {
          nodeAbbre: "张",
          nodeName: "张天旭",
          nodeStatusName: "审批通过",
          nodeStatusCode: "2",
        },
        {
          nodeAbbre: "张",
          nodeName: "张天旭",
          nodeStatusName: "审批通过",
          nodeStatusCode: "2",
        },
        {
          nodeAbbre: "张",
          nodeName: "张天旭",
          nodeStatusName: "审批通过",
          nodeStatusCode: "2",
        },
        {
          nodeAbbre: "张",
          nodeName: "张天旭",
          nodeStatusName: "驳回",
          nodeStatusCode: "3",
          explainLabel: "驳回原因",
          explainValue: "方案有遗漏，请重新审查。",
        },
      ],
    };
  },
  methods: {
    // 审批节点新增
    handleNodeCreate() {},
    // 审批节点删除
    handleNodeDelete(data) {
      console.log(data)
    }
  },
};
</script>
```

## Instruction for use
| 参数 | 说明 | 类型 |可选值 |默认值 |
| --- | --- | --- |--- |--- |
|showCreate|是否显示审批节点添加区域|Boolean|——|true|
|data|显示的数据|array|——|——|

## Data Attributes
| 参数 | 说明 | 类型 |可选值 |默认值 |
| --- | --- | --- | --- | --- |
|nodeAbbre|头像内显示的简称|String|——|H|
|nodeName|节点名称|Boolean|——|——|
|nodeStatusName|节点状态名|String|——|——|
|nodeStatusCode|审批节点状态Code|String|1：待审批； 2：通过； 3：驳回|——|
|explainLabel|审批说明Label|String|——|——|
|explainValue|审批说明Value(前置条件：explainLabel非空)|String|——|——|

## Approve Event
| 事件名 | 说明 | 参数 |
| --- | --- | --- |
|node-delete|当点击删除时会触发该事件|nodeInfo|
|node-create|当点击新增时会触发该事件|-|
