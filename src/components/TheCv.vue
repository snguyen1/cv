<template>
  <div class="w-8/12 px-24 h-full bg-gray-50 m-auto py-4 border border-2">
    <div id="cv-header" class="w-screen flex flex-col">
      <div id="cv-name" class="text-xl font-bold">Son D. Nguyen</div>
      <div id="cv-title" class="main-color">
        Lead Software Developer w/ Project Management
      </div>
      <div id="cv-info">
        <div>+1 361 232 9908</div>
        <div>sd.nguyen91@gmail.com</div>
        <div>linkedin.com/sdnguyen1</div>
        <div>Corpus Christi, Texas - USA</div>
      </div>
    </div>
    <div id="cv-body">
      <div class="cv-body-left">
        <div id="cv-education" class="cv-section">
          <div class="cv-section-title">Education</div>
          <!-- MS. -->
          <div class="grid grid-flow-col">
            <div class="grid grid-flow-row">
              <div class="cv-label">M.S. Computer Science</div>
              <div class="cv-sublabel">
                Texas A&M University - Corpus Christi
              </div>
              <div>Corpus Christi, Texas</div>
            </div>
            <div>2015 - 2017</div>
            <div class="grid-flow-row">
              <div>GPA</div>
              <div>3.84 / 4.0</div>
            </div>
          </div>
          <!-- BS. -->
          <div class="grid grid-flow-col">
            <div class="grid grid-flow-row">
              <div class="cv-label">B.S. Computer Information Systems</div>
              <div>Minor: Business Administration</div>
              <div class="cv-sublabel">
                Texas A&M University - Corpus Christi
              </div>
              <div>Corpus Christi, Texas</div>
            </div>
            <div>2010 - 2015</div>
            <div class="grid-flow-row">
              <div>GPA</div>
              <div>3.74 / 4.0</div>
            </div>
          </div>
        </div>
        <div id="cv-experience" class="cv-section">
          <div class="cv-section-title">Experience</div>
            <!-- Last job -->
            <div class="grid grid-flow-row">
              <div class="cv-label">
                Project Manager / Lead Software Developer / Devops Engineer
              </div>
              <div class="grid grid-flow-col">
                <div class="cv-sublabel w-7/12">Conrad Blucher Institute for Surveying and Science @ Texas A&M University - Corpus Christi</div>
                <div class="3/12">March 2019 - Ongoing</div>
                <div class="w-2/12">Corpus Christi, Texas</div>
              </div>
              <div class="text-sm">
                Some Job Descriptions here
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </div>
            </div>
            <!-- Second job -->
            <div class="grid grid-flow-row">
              <div class="cv-label">
                Software Developer
              </div>
              <div class="grid grid-flow-col">
                <div class="cv-sublabel w-7/12">Harte Research Institute @ Texas A&M University - Corpus Christi</div>
                <div class="3/12">August 2017 - March 2019</div>
                <div class="2/12">Corpus Christi, Texas</div>
              </div>
              <div class="text-sm">
                Some Job Descriptions here
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </div>
            </div>
            <!-- Third job -->
            <div class="grid grid-flow-row">
              <div class="cv-label">
                Software Developer Intern
              </div>
              <div class="grid grid-flow-col">
                <div class="cv-sublabel w-1/3">QSROnline</div>
                <div class="w-1/3">May 2016 - August 2016</div>
                <div class="w-1/3">Corpus Christi, Texas</div>
              </div>
              <div class="text-sm">
                Some Job Descriptions here
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </div>
            </div>
            <!-- Fourth job -->
            <div class="grid grid-flow-row">
              <div class="cv-label">
                Graduate Research Assistant / Undergraduate Research Assistant
              </div>
              <div class="grid grid-flow-col">
                <div class="cv-sublabel w-1/3">Texas A&M University - Corpus Christi</div>
                <div class="w-1/3">May 2014 - May 2017</div>
                <div class="w-1/3">Corpus Christi, Texas</div>
              </div>
              <div class="text-sm">
                Some Job Descriptions here
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </div>
            </div>
        </div>
      </div>
      <div class="cv-body-right">
        <div id="cv-skills" class="cv-section">
          <div class="cv-section-title">Skills</div>
            <div class="cv-sublabel">Full Stack</div>
            <div class="flex">
              <div>MEAN</div>
              <div>MEVN</div>
              <div>LAMP/WAMP</div>
            </div>
            <div class="cv-sublabel">Programming Language</div>
            <div class="flex">
              <div>JavaScript/Typescript</div>
              <div>Python</div>
              <div>PHP</div>
            </div>
            <div class="cv-sublabel">Database</div>
            <div class="flex">
              <div>MySQL/MariaDB</div>
              <div>PostgreSQL/PostGIS</div>
              <div>MongoDB</div>
            </div>
            <div class="cv-sublabel">Tools</div>
            <div class="flex">
              <div>Docker</div>
              <div>Terraform</div>
              <div>Azure</div>
            </div>
            <div class="cv-sublabel">Development</div>
            <div class="flex">
              <div>CI/CD</div>
              <div>Pipelines</div>
              <div>Agile</div>
            </div>
        </div>
        <div id="cv-strengths" class="cv-section">
          <div class="cv-section-title">Strengths</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCv",
  props: {},
  components: {},
};
</script>
<style scoped>
</style>