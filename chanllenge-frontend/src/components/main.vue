<template>
  <div class="main">
    <div class="search card clear">
      <div class="left query-input">
        <span>交易日期：</span>
        <div class="date-input" id="date-input">
          <div>
            <!--暂不使用v-model来双向绑定，原因是因为在时间选择器插件更改input之后v-model并不会一起更新-->
            <input type="text" id="input-from" @blur="startTimeout(0)">
            <i class="cancel" @click="cancelValue('input-from')" v-if="dataFrom"></i>
            <i class="triangle"></i>
          </div>
          <span>至</span>
          <div>
            <input type="text" id="input-to" @blur="startTimeout(1)">
            <i class="cancel" @click="cancelValue('input-to')" v-if="dataTo"></i>
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
    <detail :fromTime="dataFrom" :endTime="dataTo"></detail>
  </div>
</template>


<script>

  import overall from './overall.vue'
  import detail from './detail.vue'

  export default {
    name: 'main-part',
    data () {
      return {
        dataFrom: '',
        dataTo: '',
      }
    },
    components: {
      overall,
      detail
    },
    methods: {
      cancelValue: function (id) {
        if (id == 'input-from') {
          this.dataFrom = '';
          document.getElementById(id).value = '';
        }
        if (id == 'input-to') {
          this.dataTo = '';
          document.getElementById(id).value = '';
        }
      },
      startTimeout: function (num) {
        switch (num) {
          case 0:
            setTimeout(() => {
              this.dataFrom = document.getElementById('input-from').value;
           },100);
           break;
         case 1:
           setTimeout(() => {
             this.dataTo = document.getElementById('input-to').value
           },100);
           break;
       }
     },
      check: function () {
        const inputFrom = document.getElementById('input-from').value;
        const inputTo = document.getElementById('input-to').value;
        //空数组
        let rangeArr = [];
        //输入的时间有始有终的情况下
        if (inputFrom !== '' && inputTo !== '') {
          const millionSecondFrom = new Date(inputFrom).getTime();
          const millionSecondTo = new Date(inputTo).getTime();
          rangeArr = [];
          //遍历数组找出符合条件的数组
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime >= millionSecondFrom && itemTime <= millionSecondTo) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //只有开始时间的情况下
        } else if (inputFrom !== '' && inputTo == '') {
          const millionSecondFrom = new Date(inputFrom).getTime();
          rangeArr = [];
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime >= millionSecondFrom) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //只有结束时间的情况下
        } else if (inputFrom == '' && inputTo !== '') {
          const millionSecondTo = new Date(inputTo).getTime();
          rangeArr = [];
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime <= millionSecondTo) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //两边都为空，默认展示全部
        } else if (inputFrom == '' && inputTo == '') {
          this.$children[1].detail = detail.data().detail
        }

      }
    }
  }
</script>
