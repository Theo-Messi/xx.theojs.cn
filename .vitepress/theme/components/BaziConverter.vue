<template>
  <div class="bazi-converter">
    <h5>八字转换器</h5>
    <form @submit.prevent="convert">
      <div class="input-group">
        <label for="calendarType">日期类型</label>
        <select v-model="calendarType">
          <option value="solar">公历</option>
          <option value="lunar">农历</option>
        </select>
      </div>
      <div class="date-time-select">
        <div class="date-select">
          <select v-model="year" required>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
          <label for="year">年</label>
          <select v-model="month" required>
            <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
          </select>
          <label for="month">月</label>
          <select v-model="day" required>
            <option v-for="d in daysInMonth" :key="d" :value="d">
              {{ d }}
            </option>
          </select>
          <label for="day">日</label>
          <select v-model="hour" required>
            <option v-for="h in 24" :key="h" :value="h">{{ h }}</option>
          </select>
          <label for="hour">时</label>
        </div>
      </div>
      <button type="submit">转换</button>
    </form>
    <div v-if="bazi">
      <h5>生辰八字</h5>
      <p style="text-align: center; font-size: 1.2rem; font-weight: bold">
        {{ bazi }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Lunar, Solar } from 'lunar-javascript'

export default defineComponent({
  name: 'BaziConverter',
  setup() {
    const calendarType = ref<'solar' | 'lunar'>('solar')
    const year = ref<number | null>(null)
    const month = ref<number | null>(null)
    const day = ref<number | null>(null)
    const hour = ref<number | null>(null)
    const bazi = ref<string | null>(null)

    const years = Array.from(
      { length: 100 },
      (_, i) => new Date().getFullYear() - i
    )

    const daysInMonth = computed(() => {
      if (year.value && month.value) {
        return new Date(year.value, month.value, 0).getDate()
      }
      return 31
    })

    const convert = () => {
      if (year.value && month.value && day.value && hour.value !== null) {
        let lunar
        if (calendarType.value === 'solar') {
          const solar = Solar.fromYmdHms(
            year.value,
            month.value,
            day.value,
            hour.value,
            0,
            0
          )
          lunar = Lunar.fromSolar(solar)
        } else {
          lunar = Lunar.fromYmdHms(
            year.value,
            month.value,
            day.value,
            hour.value,
            0,
            0
          )
        }

        const ganZhiYear = lunar.getYearInGanZhi()
        const ganZhiMonth = lunar.getMonthInGanZhi()
        const ganZhiDay = lunar.getDayInGanZhi()
        const ganZhiHour = lunar.getTimeGan() + lunar.getTimeZhi()
        bazi.value = `${ganZhiYear}年 ${ganZhiMonth}月 ${ganZhiDay}日 ${ganZhiHour}时`
      }
    }

    return {
      calendarType,
      year,
      month,
      day,
      hour,
      bazi,
      years,
      daysInMonth,
      convert
    }
  }
})
</script>

<style lang="scss" scoped>
.bazi-converter {
  padding: 1rem;
  background: var(--vp-c-bg-alt);
  border-radius: 1rem;

  h5 {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;

    .input-group {
      margin-bottom: 1rem;
      text-align: center;

      label {
        margin-bottom: 0.5rem;
      }

      select {
        padding: 0.1rem;
        border: 1px solid var(--vp-c-text-3);
        text-align: center;
        border-radius: 1rem;
        margin-left: 1rem;
        width: 20%;
        background-color: var(--vp-c-bg-soft);
      }
    }

    .date-time-select {
      display: flex;
      justify-content: space-between;

      .date-select {
        display: flex;
        flex-direction: row;
        text-align: center;
        margin-left: 0.2rem;
        flex: 1;

        label {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        select {
          width: 80%;
          padding: 0.1rem;
          text-align: center;
          border: 1px solid var(--vp-c-text-3);
          border-radius: 1rem;
          background-color: var(--vp-c-bg-soft);
        }
      }
    }

    button {
      padding: 0.5rem;
      background-color: var(--vp-c-brand-2);
      color: var(--vp-c-brand-text);
      border: none;
      border-radius: 0.8rem;
      cursor: pointer;
      margin-top: 1rem;

      &:hover {
        background-color: var(--vp-c-brand-3);
      }
    }
  }
}
</style>
