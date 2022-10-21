<template>
  <div class="after-login">
    <!-- <a href="#login">Logout</a> -->
    <router-link to="/login" class="ctn btn-logout">Logout</router-link>

    <div class="add-data">
      <input type="text" placeholder="Id" v-model="id" />
      <input type="text" placeholder="Email" v-model="email" />
      <input v-model="firstName" placeholder="First Name" type="text" />
      <input v-model="lastName" placeholder="Last Name" type="text" />
      <input
        type="file"
        ref="file"
        accept="image/*"
        @change="selectFile"
      />
      <button class="ctn" @click="addData()">Add Data</button>
    </div>

    <div>
      <table class="user-table">
        <thead class="thead-bg">
          <tr>
            <th scope="col">id</th>
            <th scope="col">avatars</th>
            <th scope="col">email</th>
            <th scope="col">first name</th>
            <th scope="col">last name</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody v-for="(user, index) in users" :key="index">
          <tr>
            <td>{{ user.id }}</td>
            <td><img :src="user.avatar" alt="" /></td>
            <td>{{ user.email }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>
              <button @click="deleteData(index)" class="btn btn-delete">delete</button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "afterLogin",
  components: {},
  data() {
    return {
      users: [],
      // showPopup: true,
      id: "",
      email: "",
      avatar: "",
      firstName: "",
      lastName: "",
      ShowAvatarUrl: "",

    };
  },
  methods: {
    async usersData() {
      // this.users = [];
      await axios.get("https://reqres.in/api/users")
      .then((response) => {
        const data = response.data.data;
        this.users = data;
        
        console.log(response)
      });
    },
    addData() {
      axios
        .post("https://reqres.in/api/users", {
          id: this.id,
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          avatar: this.avatar,
        })
        .then((response) => {
          const data = response.data;
          this.users.push(data);
          this.id = "";
          this.email = "";
          this.firstName = "";
          this.lastName = "";
          this.avatar = "";
        });
    },

    deleteData(index) {
      axios
      .delete("https://reqres.in/api/users")
      .then((response) => {
  
        // const data = response.data;
        // // this.users.splice(data,1)
        // this.users = data
       
        
        this.users.splice(index,1);
    //     console.log(response);
      });
    },
    
  //    selectFile() {
  //     this.avatar = this.$refs.file.files[0];
  // },

  selectFile(e){
    let selectImage = e.target.files[0];
    this.createBase64Image(selectImage);
  },
  createBase64Image(fileObject) {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.avatar = e.target.result;
      this.uploadImage();
    };
    reader.readAsDataURL(fileObject);
  },
  uploadImage() {
    const {avatar} = this;
    axios
    .post("https://reqres.in/api/users", {avatar})
    .then((response) => {
      this.ShowAvatarUrl = response.data.url;
    })
  },
 
  },
  mounted() {
    this.usersData();
  },

  // async mounted() {
  //   let results = await axios.get("https://reqres.in/api/users");
  //   console.log("results", results);
  //   this.list = results.data.data;
  //   let user = localStorage.getItem("user-info");
  //   this.name = JSON.parse(user).name;
    // if (!user) {
    //   this.$route.push({ name: "login" });
    // }
  // },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

table {
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
}
.user-table {
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    border: 1px solid $gray;
    padding: 8px;
  }

  & tr:hover {
    background-color: $white;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: $gray;
    color: $white;
  
  }

  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}

.add-data {
  & input {
    @include input;
    margin-bottom: 20px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    width: 300px;

    &:nth-last-child(2) {
      border: none;
    }
  }
  & button {
    @include button-ctn;
    width: 320px;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.btn-logout {
  display: block;
  margin: 30px;
  text-align: center;
  justify-items: center;
  align-items: center;
}

.btn {
  @include btn;
}

// .popup-show {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 99;
//   width: 100%;
//   max-width: 400px;
//   background-color: rgba(180, 120, 200, 0.9);
//   border-radius: 20px;
//   text-align: right;
//   padding: 10px;
// }
</style>
