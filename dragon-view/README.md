# dragon-approve-ui

## Package setup
```
npm install --save dragon-approve-ui
```

## Example
```
import "dragon-approve-ui";
import "dragon-approve-ui/dist/dragon-approve-ui.css";
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
