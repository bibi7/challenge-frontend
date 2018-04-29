<template>
  <div class="main">
    <div class="search card clear">
      <div class="left query-input">
        <span>交易日期：</span>
        <div class="date-input" id="date-input">
          <div>
            <!--暂不使用v-model来双向绑定，原因是因为在时间选择器插件更改input之后v-model并不会一起更新-->
            <input type="text" id="input-from" @blur="startTimeout(0)">
            <i class="cancel" @click="cancelValue('input-from')" v-if="dateFrom"></i>
            <i class="triangle"></i>
          </div>
          <span>至</span>
          <div>
            <input type="text" id="input-to" @blur="startTimeout(1)">
            <i class="cancel" @click="cancelValue('input-to')" v-if="dateTo"></i>
            <i class="triangle"></i>
          </div>
        </div>
      </div>
      <div class="right query-btn">
        <button @click="check">查询</button>
        <button>导出</button>
      </div>
    </div>
    <overall></overall>
    <detail :fromTime="dateFrom" :endTime="dateTo"></detail>
  </div>
</template>


<script>
  import {store} from '../../static/js/store'
  import overall from './overall.vue'
  import detail from './detail.vue'
  export default {
    name: 'main-part',
    data () {
      return {
        dateFrom: '',
        dateTo: '',
      }
    },
    components: {
      overall,
      detail
    },
    methods: {
      cancelValue: function (id) {
        if (id == 'input-from') {
          this.dateFrom = '';
          document.getElementById(id).value = '';
        }
        if (id == 'input-to') {
          this.dateTo = '';
          document.getElementById(id).value = '';
        }
      },
      startTimeout: function (num) {
        switch (num) {
          case 0:
            setInterval(() => {
              this.dateFrom = document.getElementById('input-from').value;
           },100);
           break;
          case 1:
            setInterval(() => {
              this.dateTo = document.getElementById('input-to').value;
            },100);
            break;
        }
      },
      check: function () {
        store.commit('changeBefore', {'dateFrom': this.dateFrom, 'dateTo': this.dateTo});
        console.log(this.$store.getters.done)
        console.log(this.$store);
      }
    }
  }
</script>
