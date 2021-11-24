<script>
import Sidebar from './Sidebar.vue'
import myHeader from './myHeader.vue'

export default {
   components :{
    Sidebar,
    myHeader
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
         <slot/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style>

</style>