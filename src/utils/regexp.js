const regexp = {
  // 手机号正则
  phoneReg(phone) {
    return !/^1[3456789]\d{9}$/.test(phone)
  },

  // 密码 6-20位只能包含 字母 或者字母+数字 必须字母开头
  passwordReg(password) {
    return /^[a-zA-Z]\w{5,19}$/.test(password)
  },
}

export default regexp