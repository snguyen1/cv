<template>
  <div class="w-screen px-20 h-full bg-gray-50 m-auto py-4 border border-2">
    <div id="cv-header" class="w-screen flex flex-col">
      <div id="cv-name" class="text-xl font-bold">{{ data.fullname }}</div>
      <div id="cv-title" class="main-color pb-2">
          {{ data.title}}
      </div>
      <div id="cv-info">
        <div v-for="info in data.info" :key="info.value">{{ info.value }}</div>
      </div>
    </div>
    <div id="cv-body">
      <div class="cv-body-left">
        <div id="cv-experience" class="cv-section">
          <div class="cv-section-title">Experience</div>
            <div v-for="e in data.experience" :key="e.title" class="grid grid-flow-row">
              <div class="cv-label">
                {{ e.title }}
              </div>
              <div class="grid grid-flow-col w-full">
                <div class="cv-sublabel w-8/12 tracking-tighter"><a :href="e.website" target="_blank">{{e.company}}</a></div>
                <div class="flex flex-col">
                  <div class="text-sm text-right">{{e.start}} - {{e.end}}</div>
                  <!-- <div class="text-xs text-left">{{e.location}}</div> -->
                </div>
              </div>
              <div v-for="d in e.duties" :key="d.desc" class="text-sm">
                <div class="text-sm">{{  d.desc }}</div>
                <li v-for="b in d.bullets" :key="b.id" class="text-xs">{{ b }}</li>
              </div>
            </div>
        </div>
      </div>
      <div class="cv-body-right">
        <div id="cv-education" class="cv-section">
          <div class="cv-section-title">Education</div>
          <div v-for="e in data.education" :key="e.degree" class="grid grid-flow-col">
            <div class="grid grid-flow-row">
              <div class="cv-label tracking-tighter">{{e.degree}}</div>
              <div class="cv-sublabel tracking-tighter">
                {{ e.school }}
              </div>
              <div class="text-sm text-left tracking-tighter">GPA: {{e.gpa}}</div>
              <div class="text-sm"> {{ e.location }}</div>
            </div>
            <div class="text-sm pt-5 text-right">{{e.start}} - {{e.end}}</div>
          </div>
        </div>
        <div id="cv-skills" class="cv-section">
          <div class="cv-section-title">Skills</div>
          <div v-for="s in data.skills" :key="s.area">
            <div class="cv-sublabel leading-8">{{ s.area }}</div>
            <div class="grid grid-flow-col-dense">
              <div v-for="i in s.items" :key="i.id" class="px-2 text-sm">{{ i }}</div>
            </div>
          </div>
        </div>
        <div id="cv-strengths" class="cv-section">
          <div class="cv-section-title">Strengths</div>
          <div v-for="s in data.strengths" :key="s.area">
            <div class="cv-sublabel">{{ s.area }}</div>
            <div class="flex text-sm">
              {{ s.desc }}
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'
export default {
  name: "TheCv",
  props: {},
  components: {},
  data() {
    return {
      data
    }
  },
  computed: {},
  mounted() {console.log(data)},
  methods: {},
  watch: {}
};
</script>
<style scoped>
</style>