<script>
import PagePath from "../components/PagePath.vue";

export default {
  name: "AppContact",
  components: { PagePath },
  data() {
    return {};
  },
  methods: {
    initialize() {
      var myLatlng = new google.maps.LatLng(43.565529, -80.197645);
      var mapOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      var map = new google.maps.Map(
        document.getElementById("map-canvas"),
        mapOptions
      );

      //=====Initialise Default Marker
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "marker",
        //=====You can even customize the icons here
      });

      //=====Initialise InfoWindow
      var infowindow = new google.maps.InfoWindow({
        content: "<B>Skyway Dr</B>",
      });

      //=====Eventlistener for InfoWindow
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    },
  },
};
</script>

<template>
  <PagePath :title="'Contacts'" />

  <!-- FORM -->
  <div class="bg-image">
    <div class="container-70">
      <div class="row">
        <!-- LEFT COL -->
        <div class="col-40">
          <h2>Contact Details</h2>
          <p>
            Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin,
            quis bibendum auci elit consequat.
          </p>
          <!-- CONTACTS -->
          <div class="contact-details">
            <h3>London Office</h3>
            <ul>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
                <span>1-688-124-44228</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'comment']" />
                <span>iacademy@qodeinteractive.com</span>
              </li>
              <li>
                <font-awesome-icon
                  :icon="['fas', 'building']"
                ></font-awesome-icon>
                <span>Houghton Street, Suite 721</span>
              </li>
            </ul>
          </div>
          <hr />
          <div class="contact-details">
            <h3>New York Office</h3>
            <ul>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
                <span>1-677-124-44227</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'comment']" />
                <span>iacademy@qodeinteractive.com</span>
              </li>
              <li>
                <font-awesome-icon
                  :icon="['fas', 'building']"
                ></font-awesome-icon>
                <span>184 Main Collins Street</span>
              </li>
            </ul>
          </div>
          <!-- /CONTACTS -->
        </div>
        <!-- /LEFT COL -->
        <!-- RIGHT COL -->
        <div class="col-60">
          <form action="">
            <div class="form-header">
              <div class="form-container">
                <h5>GET IN TOUCH</h5>
              </div>
            </div>
            <div class="form-body">
              <div class="form-container">
                <div class="row justify-between">
                  <div class="col-form">
                    <label for="name">Name<span>*</span></label>
                    <input type="text" name="name" />
                  </div>
                  <div class="col-form">
                    <label for="name">Email<span>*</span></label>
                    <input type="text" name="email" />
                  </div>
                </div>
                <label for="name">Website</label>
                <input type="text" name="website" />
                <label for="name">Message<span>*</span></label>
                <input class="input-message" type="text" name="message" />
                <button>SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
        <!-- /RIGHT COL -->
      </div>
    </div>
  </div>

  <!-- MAP -->
  <div id="map-canvas">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22824.624860615422!2d-0.016562507297161706!3d51.49947566225244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1718285615683!5m2!1sen!2sit"
      width="100%"
      height="600"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;
.bg-image {
  h2 {
    font-size: 40px;
  }
  p {
    color: #8f8f8f;
    line-height: 25px;
    margin: 20px 0;
  }
  hr {
    color: lightgray;
    width: 70%;
  }
  .contact-details {
    margin: 30px 0;
    color: grey;
    h3 {
      color: black;
      margin-bottom: 20px;
    }
    li {
      margin-bottom: 15px;
      &:last-of-type {
        margin-bottom: 30px;
      }
      span {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
}

.form-container {
  border: 1px solid lightgray;
  width: 90%;
  margin: 0 auto;
}

.form-header {
  h5 {
    font-weight: 100;
  }
  .form-container {
    padding: 20px 30px;
    background-color: #f8f7f7;
    border-bottom: none;
  }
}

.form-body {
  .form-container {
    padding: 30px 30px;
    background-color: white;
    margin: 0 auto;
    label {
      font-size: 12px;
      font-weight: bold;
      span {
        color: orange;
      }
    }
    input {
      width: 100%;
      height: 40px;
      background-color: #f8f7f7;
      border: 0;
      margin-bottom: 20px;
    }
    .col-form {
      width: calc(100% / 2 - 20px);
      input {
        width: 100%;
      }
    }
    .input-message {
      height: 100px;
      margin-bottom: 20px;
    }
    button {
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      padding: 20px 40px;
      border: none;
      background-color: $primary-color;
    }
  }
}
</style>
