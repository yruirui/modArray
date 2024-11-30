<template>
  <div class="siteheader">
    <h1>我的日历-组件</h1>
  </div>
  <div class="calendar">
    <div class="canlendar-header">
      <time id="time">{{ currentYearMonth }} </time>
    </div>
    <ol class="canlendar-weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ol>

    <ol class="canlendar-days" id="days">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        :class="{
          disableLi: isDisabledDay(index),
        }"
      >
        {{ item }}
      </li>
    </ol>

    <div class="canlendar-actions">
      <div class="canlendar-action-left">
        <Button id="toDay" @click="toDay1">本月</Button>
      </div>
      <div class="canlendar-action-right">
        <Button id="prevMonth" @click="prevMonth">上月</Button
        ><Button id="nextMonth" @click="nextMonth">下月</Button>
      </div>
    </div>
  </div>
  <div class="events-wrapper">
    <h2 id="days-arrangement"></h2>
    <div class="events" id="events"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    let currentTime = new Date();
    let currentYearMonth = ref("当前年月");
    let firstDayOfMonth = ref(0); // 用来记录月初的索引
    let lastDayOfMonthIndex = ref(0); // 用来记录月末最后一个日期在当前数组中的索引
    let listItems = ref([]);
    const today = ref(new Date());
    const generateCalendar = (time) => {
      listItems.value = [];
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      currentYearMonth.value = `${year}年${month}月`;
      //月份信息
      const yuechu = new Date(year, month - 1, 1);
      const yuechuxingqiji = yuechu.getDay();
      const yuemo = new Date(new Date(year, month + 1 - 1, 1) - 86400 * 1000);
      const yuemojihao = yuemo.getDate();
      const yuemoxingqiji = yuemo.getDay();
      const 这个月有几天 = yuemojihao;
      const now = new Date();
      let n = 0;
      //月初铺垫几天

      for (let i = 1; i < yuechuxingqiji; i++) {
        const d = new Date(yuechu - 86400 * 1000 * i);
        listItems.value.unshift(d.getDate());
        n += 1;
        firstDayOfMonth.value += 1;
      }
      lastDayOfMonthIndex.value = firstDayOfMonth.value + 这个月有几天;
      //月中有几天
      for (let i = 1; i <= 这个月有几天; i++) {
        listItems.value.push(i);
        n += 1;
      }

      //月末铺垫几天
      let q = yuemoxingqiji;
      for (let j = 0; j < 42 - n; j++) {
        const dalta = q - yuemoxingqiji;
        const d = new Date(yuechu - 0 + 86400 * 1000 * dalta);
        listItems.value.push(d.getDate());
        q++;
      }
      currentTime = time;
    };
    generateCalendar(currentTime);
    const toDay1 = () => {
      generateCalendar(new Date());
    };
    const nextMonth = () => {
      const xiayuechu = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth() + 1,
        1
      );

      generateCalendar(new Date(xiayuechu));
    };
    const prevMonth = () => {
      const yuechu = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        1
      );
      generateCalendar(new Date(yuechu - 86400 * 1000));
    };
    const isDisabledDay = (index) => {
      // 如果索引小于月初的索引或大于月末最后一个日期的索引，则返回true
      return index < firstDayOfMonth.value || index > lastDayOfMonthIndex.value;
    };
    const isToday = (index) => {
      const date = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        listItems.value[index]
      );
      console.log(currentTime);
      return date.toDateString() === today.value.toDateString();
    };

    return {
      currentYearMonth,
      currentTime,
      listItems,
      toDay1,
      nextMonth,
      prevMonth,
      generateCalendar,
      isDisabledDay,
      isToday,
    };
  },
};
</script>

<style>
.siteheader {
  padding: 8px 16px;
  font-size: 18px;
}
.siteheader > h1 {
}

.calendar {
  background: rgb(154, 124, 241);
  background: linear-gradient(
    145deg,
    rgba(154, 124, 241, 1) 0%,
    rgba(0, 255, 224, 1) 51%,
    rgba(231, 233, 230, 1) 100%,
    rgba(0, 255, 224, 1) 100%
  );
  margin: 16px;
  border-radius: 20px;
  color: #333;
  margin-top: 34px;
}
.canlendar-header {
  text-align: center;
  padding: 8px 0;
  font-size: 18px;
}
.canlendar-header > time {
}
.canlendar-weekdays {
  display: flex;
}
.canlendar-weekdays > li {
  width: 14.2857%;
  text-align: center;
}
.canlendar-days {
  display: flex;
  flex-wrap: wrap;
}
.canlendar-days-today {
  background-color: yellow;
  border-radius: 8px;
}
.canlendar-days > li {
  width: 14.2857%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 1px solid transparent;
  position: relative;
}
.canlendar-days > li.canlendar-days-selector {
  border: 1px solid yellow;
}
.canlendar-days > li.canlendar-days-hasEvents::after {
  content: "";
  height: 6px;
  width: 6px;
  border-radius: 3px;
  border: 1px solid green;
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: green;
}
.canlendar-actions {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}
.canlendar-actions button {
  height: 24px;
  font-size: 12px;
  padding: 0 6px;
}
.canlendar-action-left {
  padding-left: 8px;
}
.canlendar-action-left > button {
}
.canlendar-action-right {
  display: flex;
}
.canlendar-action-right > button {
}
.events-wrapper {
  padding: 10px 10px;
}
.events-item {
  height: 30px;
  text-align: 30px;
  padding-left: 10px;
  padding-top: 5px;
}
.disableLi {
  color: gray;
  pointer-events: none; /* 防止点击 */
}
</style>