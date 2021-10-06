<template>
  <div class="w-screen px-4 h-screen bg-gray-50 py-4">
    <div id="cv-header" class="w-screen flex flex-col">
      <div id="cv-name" class="text-xl font-bold">{{ data.fullname }}</div>
      <div id="cv-title" class="main-color pb-2">
          {{ data.title}}
      </div>
      <div id="cv-info">
        <div v-for="info in data.info" :key="info.value" class="flex flex-row">
          <div class="w-1/12"><SvgIcon class="float-right mt-1 hover:animate-bounce" :name="info.type"/></div>
          <div class="pl-1 leading-6">{{ info.value }}</div>
          </div>
      </div>
    </div>
    <div id="cv-body">
      <div class="cv-body-left">
        <div id="cv-experience" class="cv-section">
          <div class="cv-section-title">Experience</div>
            <div v-for="e in data.experience" :key="e.title" class="grid grid-flow-col pb-2">
              <div class="grid grid-flow-row">
              <div class="cv-label">
                {{ e.title }}
              </div>
                  <div class="cv-sublabel w-full tracking-tighter"><a :href="e.website" target="_blank">{{e.company}}</a></div>
              <div v-for="d in e.duties" :key="d.desc" class="text-sm">
                <div class="text-sm">{{  d.desc }}</div>
                <li v-for="b in d.bullets" :key="b.id" class="text-xs ml-3 w-full">{{ b }}</li>
              </div>
            </div>
            <div class="cv-start-end-date"><div>{{e.start}}</div> <div class="hidden md:inline lg:inline 2xl:inline">-</div> <div>{{e.end}}</div></div>
            </div>
        </div>
      </div>
      <div class="cv-body-right">
        <div id="cv-education" class="cv-section">
          <div class="cv-section-title">Education</div>
          <div v-for="e in data.education" :key="e.degree" class="grid grid-flow-col pb-2">
            <div class="grid grid-flow-row">
              <div class="cv-label tracking-tighter">{{e.degree}}</div>
              <div class="cv-sublabel tracking-tight">
                {{ e.school }}
              </div>
              <div class="text-xs"> {{ e.location }}</div>
              <div class="text-xs text-left">GPA: {{e.gpa}}</div>
            </div>
            <div class="cv-start-end-date"><div>{{e.start}}</div> <div class="hidden md:inline lg:inline 2xl:inline">-</div> <div>{{e.end}}</div></div>
          </div>
        </div>
        <div id="cv-skills" class="cv-section">
          <div class="cv-section-title">Skills</div>
          <div v-for="s in data.skills" :key="s.area" class="pb-2">
            <div class="cv-sublabel leading-8">{{ s.area }}</div>
            <div class="grid grid-flow-row-dense xl:grid-flow-col-dense 2xl:grid-flow-col-dense place-content-start gap-x-2">
              <div v-for="i in s.items" :key="i.id" class="px-2 text-sm">{{ i }}</div>
            </div>
            <div class="border "></div>
          </div>
        </div>
        <!-- <div id="cv-strengths" class="cv-section">
          <div class="cv-section-title">Strengths</div>
          <div v-for="s in data.strengths" :key="s.area">
            <div class="cv-sublabel">{{ s.area }}</div>
            <div class="flex text-sm">
              {{ s.desc }}
            </div>
        </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import data from '../data.json'
export default {
  name: "TheCv",
  props: {},
  components: {
    SvgIcon
  },
  data() {
    return {
      data
    }
  },
  computed: {},
  mounted() {
    // console.log(data)
    },
  methods: {},
  watch: {}
};
</script>
<style scoped>
</style>