<template>
  <div class="section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7">
          <div class="img-property-slide-wrap">
            <div class="img-property-slide">
              <img
                :src="`http://localhost/laravel/constructions/public/uploads/project/${project.image}`"
                alt="Image"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h2 class="heading text-primary">{{ project.project_name }}</h2>
          <p class="meta">{{ project.land }}</p>
          <p class="text-black-50">
            {{ project.description }}
          </p>
          <p class="text-black-50">
            {{ project.other_project_details }}
          </p>

          <div class="d-block agent-box">
            <table class="table">
              <tr>
                <th>Price:</th>
                <th>{{ project.price }}</th>
              </tr>
              <tr>
                <th>Start Date:</th>
                <th>{{ project.start_time }}</th>
              </tr>
              <tr>
                <th>Handover Date:</th>
                <th>{{ project.end_time }}</th>
              </tr>
            </table>
          </div>
          <br />
          <router-link :to="'/form/'" class="btn btn-primary py-2 px-3"
            >Request
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: "Details",
  data() {
    return {
      project: [],
    };
  },
  methods: {
    singleproject(pid) {
      DataService.projectapi(pid)
        .then((response) => {
          console.log(response.data);
          if (response.data) this.project = response.data;
          else alert(response.data.error);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.singleproject(this.$route.params.id);
  },
};
</script>
