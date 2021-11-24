<script>
export default {
  data(){
    return {
      items: [
        1,2,3,4,5,6,2,1,1,1,1,1,1,1,1
      ]
    }
  },
  emits:['clickNext']
}
</script>

<template>
  <div class="row">
    <div class="col-lg-4 mb-4" v-for="item in items" :key="item">
        <!--begin::Card-->
        <div class="card  overlay overflow-hidden">
            <div class="card-body p-0">
                <div class="overlay-wrapper">
                    <img src="../../assets/media/stock/600x400/img-1.jpg" alt="" class="w-100 rounded"/>
                </div>
                <div class="overlay-layer bg-dark bg-opacity-10">
                    <a href="#" class="btn btn-sm btn-light-primary btn-shadow">Preview</a>
                    <a href="#" class="btn btn-sm btn-primary btn-shadow ms-2" @click="$emit('clickNext')">Buat</a>
                </div>
            </div>
        </div>
        <!--end::Card-->
    </div>
  </div>
</template>