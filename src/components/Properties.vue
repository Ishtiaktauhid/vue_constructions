<template>
     <div class="row py-5">
          <div class="property-item col-4" v-for="p in projects" :key="p.id">
            <a href="property-single.html" class="img">
              <img
                :src="`http://localhost/laravel/constructions/public/uploads/project/${p.image}`"
                alt="Image"
                class="img-fluid"
              />
            </a>

            <div class="property-content">
              <div class="price mb-2">
                <span>BDT {{ p.price }}</span>
              </div>
              <div>
                <span class="d-block mb-2 text-black-50">{{ p.land }}</span>
                <span class="city d-block mb-3">{{ p.project_name }}</span>

                <div class="specs d-flex mb-4">
                  {{ p.description }}
                </div>
                <router-link
                  :to="'/details/' + p.id"
                  class="btn btn-primary py-2 px-3"
                  >See details
                </router-link>
              </div>
            </div>
          </div>
          <!-- .item -->
        </div>
</template>
<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: "Home",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    project() {
      DataService.allproject()
        .then((response) => {
          console.log(response.data);
          if (response.data) this.projects = response.data;
          else alert(response.data.error);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.project();
  },
};
</script>
