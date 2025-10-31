<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="编号" width="180"> </el-table-column>
    <el-table-column prop="username" label="用户名称" width="180">
    </el-table-column>
    <el-table-column prop="password" label="用户密码"> </el-table-column>
    <el-table-column prop="sex" label="性别"> </el-table-column>
    <el-table-column prop="phoneNum" label="手机号码"> </el-table-column>
  </el-table>
</template>
<script>
import request from "../utils/request";
export default {
  //vue对象中的数据==data
  data() {
    return {
      tableData: [],
    };
  }, //生命周期：vue创建成功后触发的函数
  created: function () {
    //发起查询
    request.get("/consumer/list").then((res) => {
      this.tableData = res;
    });
  },
};
</script>
