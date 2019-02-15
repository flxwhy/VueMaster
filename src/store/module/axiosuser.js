import { setToken, getToken } from '@/libs/util'
export default {
    state: {
        UserName: '',
        PassWord: '',
        NickName: '',
        Mobile: '',
        Avatar: '',
        Sex: '',
        IsDisable: true
    },
    mutations: {
        setaxiosUserName(state, username) {
            state.UserName = username
        },
        setPassWord(state, password) {
            state.PassWord = password
        },
        setNickName(state, nikename) {
            state.NickName = nikename
        },
        setMobile(state, mobile) {
            state.Mobile = mobile
        },
        setAvatar(state, avatar) {
            state.Avatar = avatar
        },
        setSex(state, sex) {
            state.Sex = sex
        },
        setDisable(state, idisable) {
            state.IsDisable = idisable
        },
        setToken (state, token) {
            state.token = token
            setToken(token)
        }
    },
    getters: {
        NickNamedd: state => state.UserName + '计算名称',
        NameParm: (state) => (id) => state.UserName + id
    },
    actions: {
        // 获取用户相关信息
        getaxiosUserInfo({ commit }, playrod) {
            try {
                commit('setaxiosUserName', playrod.UserName)
                commit('setPassWord', playrod.PassWord)
                commit('setNickName', playrod.NickName)
                commit('setMobile', playrod.Mobile)
                commit('setAvatar', playrod.Avatar)
                commit('setSex', playrod.Sex)
                commit('setDisable', playrod.IsDisable)
                commit('setToken', playrod.UserName)
                return state
            } catch (error) {
                return error
            }
        }
    }
}