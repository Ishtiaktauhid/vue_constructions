<template>
  <div
    class="col-lg-8 py-5 mx-auto bg-light"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <form action="#">
      <div class="row">
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="auth.username"
            placeholder="Your Name"
          />
        </div>
        <div class="col-6 mb-3">
          <input
            type="email"
            class="form-control"
            v-model="auth.email"
            placeholder="Your Email"
          />
        </div>
        <div class="col-12 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="auth.subject"
            placeholder="Subject"
          />
        </div>
        <div class="col-12 mb-3">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            class="form-control"
            v-model="auth.message"
            placeholder="Message"
          ></textarea>
        </div>

        <div class="col-12">
          <input
            type="submit"
            value="Send Message"
            @click="form"
            class="btn btn-primary"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DataService from "../services/DataService";
import router from "@/router";

export default {
  name: "Form",
  data() {
    return {
      auth: {
        username: "",
        email: "",
        subject: "",
        message: "",
      },
      uid: sessionStorage.getItem("uid"),
      submitted: false,
    };
  },
  methods: {
    Form() {
      var data = {
        username: this.auth.username,
        email: this.auth.email,
        subject: this.auth.subject,
        message: this.auth.message,
      };

      DataService.form(data)
        .then((response) => {
          console.log(response.data);
          if (response.data.id) {
            sessionStorage.setItem("uid", response.data.id);
          } else alert(response.data.error);

          router.push({ name: "dashboard", params: { userId: "123" } });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
