<template>
  <div class="hi">
  </div>
  <form @submit="submitForm" class="auth">
    <div class="toggle">
      <a :class="{choose: mode === 'login'}" class="button15" href="#" @click="setLog(event,'login')">LogIn</a><span>|</span><a
        :class="['button15',{choose:(mode === 'signup')}]"
        href="#"
        @click="setLog(event, 'signup')">Registration</a>
    </div>
    <h3 v-if="mode === 'login' ">Authorization</h3>
    <h3 v-else>Registration</h3>
    <label for="e-mail">Email</label>
    <input id="e-mail" type="email" v-model.trim="email">
    <label for="password">Password</label>
    <input id="password" type="password" v-model.trim="password">
    <div class="log">
      <a @click="submitForm" v-if="mode === 'login'" class="button15" href="#">SignIn</a><a v-else @click="submitForm" class="button15" href="#">SignUp</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    };
  },
  computed: {
    },
  methods: {
    setLog(event, payload) {
      this.mode = payload
    },
    async submitForm() {
      this.formIsValid = true;
      if (
          this.email === '' ||
          !this.email.includes('@') ||
          this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          });
        }
        this.$router.replace({name:'Vocabulary'});
      } catch (err) {
        this.error = err.message || 'Failed to authenticate. Chek your login data.';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.hi {
  position: absolute;
  width: 100%;
  height: 100vw;
  z-index: -1;
  top: 24vh;
  border: #8bb804 2px solid;
}

.toggle {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 2rem;

  span {
    color: darkgreen;
    align-self: flex-end;
  }
}

.toggle a {
  width: 50%;
  text-align: center;
  border: none;
  box-shadow: none;
  background: white;
  color: rgba(0, 100, 0, 0.35);

  &.choose {
    text-decoration-line: underline;
    color: darkgreen;
  }
}

.auth {
  margin: 20vh 2rem;
  border: #8bb804 2px solid;
  display: flex;
  flex-flow: nowrap column;
  padding: 3rem;
  background: white;


  h3 {
    align-self: center;
    margin-bottom: 1rem;
    color: darkgreen;
  }

  .log {
    margin: 2rem auto;

    a {
      padding: 0.2rem 3rem;
      background: white;
      border: 2px darkgreen solid;
    }
  }
}

input {
  font-size: large;
  height: 2.5rem;
  border: 1px solid #b1eeb1;
  border-radius: 10px;
  color: darkgreen;
}

input:focus {
  outline: none;
  border-color: #8bb804;
  background-color: rgba(146, 231, 147, 0.66);
}

label {
  color: darkgreen;
}
</style>
