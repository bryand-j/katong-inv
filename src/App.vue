<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Sidebar from './layout/Sidebar.vue'
import myHeader from './layout/myHeader.vue'
import Create from './pages/Dashboard/Create.vue'

export default {

  components :{
    Sidebar,
    myHeader,
    Create,
  }
}


</script>

<template>
<div class="d-flex flex-column flex-root">
      <!--begin::Page-->
  <div class="page d-flex flex-row flex-column-fluid">
    <sidebar/>
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <my-header breadcrumb="dashboard"/>
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container" id="kt_content_container">
          <create/>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style>

</style>
