<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
    <Spin fix v-show="isload">
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
  </div>
</template>

<script>
import LoginForm from "_c/login-form";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isload: false
    };
  },
  components: {
    LoginForm
  },
  mounted: function() {},
  methods: {
    ...mapActions(["getaxiosUserInfo", "handleLogin"]),
    handleSubmit({ userName, password }) {
      this.isload = true;
      this.handleLogin({ userName, password }).then(res => {
        // Spin.show()
        this.$http({
          headers: {
            Token: "6N62BN2462"
          },
          params: {
            // sessionkey:'absgdh'
          },
          method: "get",
          url: "/Master/Getuser"
        })
          .then(req => {
            this.isload = false;
            if (req.data.flag) {
              this.getaxiosUserInfo(req.data.msg).then(red => {
                this.$router.push({
                  name: this.$config.homeName
                });
              });
            } else {
              this.$Message.error(req.data.msg);
              return;
            }
          })
          .catch(err => {
            this.$Message.error("请求异常");
            this.isload = false;
          });
      });
    }
  }
};
</script>

<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>
