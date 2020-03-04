import http from './http';
import {encryptMd5} from "../crypto/des";
import {urls, consts} from "../network/UrlDefine";

//来源
const sourceType = consts.sourceType_pd;

const networkAdapter = {
  //普通get方法
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      http.fetchGet(url, params)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //判断手机号是否注册
  phoneRegistered: (userPhone) => {
    const url = urls.phoneRegistered;
    const params = {
      userPhone
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //用户名和密码登录
  loginPhoneAndPsd: (userPhone, psd) => {
    const url = urls.loginWithPhoneAndPassword;
    const params = {
      sourceType,
      userPhone,
      userPassword: encryptMd5(psd)
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //验证码登录获取验证码
  loginGetVerCode: (userPhone) => {
    const url = urls.loginGetVerCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //验证码登录获取语音验证码
  loginGetSpeechCode: (userPhone) => {
    const url = urls.loginGetSpeechCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //验证码登录
  loginWithCode: (userPhone, checkCode) => {
    const url = urls.loginWithCode;
    const params = {
      userPhone,
      checkCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //注册时发送验证码
  registerGetVerCode: (userPhone) => {
    const url = urls.registerGetVerCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //注册时发送语音验证码
  registerGetSpeechCode: (userPhone) => {
    const url = urls.registerGetSpeechCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //注册时判断验证码是否正确
  registerCheckCode: (userPhone, checkCode) => {
    const url = urls.registerCheckCode;
    const params = {
      userPhone,
      checkCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //完成注册
  finishRegister: (userPhone, userPassword) => {
    const url = urls.finishRegister;
    const params = {
      userPhone,
      userPassword: encryptMd5(userPassword),
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //完善用户基础信息
  //userInfo参数如下：
  //userId/realName/height/weight/birthDate/sex/abdominalCir/province/city/area
  perfectBasicUserInfo: (userInfo, isPerfect) => {
    const url = urls.perfectBasicUserInfo;
    const params = {
      isPerfect,
      sourceType
    };
    Object.assign(params, userInfo);
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //单独获取用户基础信息接口
  getBasicUserInfo (userId) {
    const url = urls.getBasicUserInfo;
    const params = {
      userId,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //提交用户问卷信息
  uploadUserQuestions (userId, userInfo, isPerfect) {
    const url = urls.uploadUserQuestions;
    const params = {
      userId,
      userInfo,
      isPerfect,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //获取问卷答案
  getUserQuestions (userId) {
    const url = urls.getUserQuestions;
    const params = {
      userId,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //获取用户全部信息
  getUserAllInfo (userId) {
    const url = urls.getUserAllInfo;
    const params = {
      userId,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //忘记密码获取验证码
  forgetPsdGetVerCode (userPhone) {
    const url = urls.forgetPsdGetVerCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //忘记密码获取语音验证码
  forgetPsdGetSpeechCode (userPhone) {
    const url = urls.forgetPsdGetSpeechCode;
    const params = {
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //忘记密码的时候，判断验证码是否正确
  forgetPsdCheckCode (userPhone, checkCode) {
    const url = urls.forgetPsdCheckCode;
    const params = {
      userPhone,
      checkCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //忘记密码的时候重置密码并登录
  forgetResetPsd (userPhone, userPassword) {
    const url = urls.resetPsd;
    const params = {
      userPhone,
      userPassword: encryptMd5(userPassword),
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改密码
  modifyPsd (userId, userPassword, newUserPassword) {
    const url = urls.modifyPsd;
    const params = {
      userId,
      userPassword: encryptMd5(userPassword),
      newUserPassword: encryptMd5(newUserPassword),
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //获取微信客服二维码
  getQrCode () {
    const url = urls.getQrCode;
    const params = {};
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号给旧手机发送验证码
  modifyPhoneSendVerCode (userId, userPhone) {
    const url = urls.modifyPhoneSendVerCode;
    const params = {
      userId,
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号给旧手机发送语音验证码
  modifyPhoneSendSpeechCode (userId, userPhone) {
    const url = urls.modifyPhoneSendSpeechCode;
    const params = {
      userId,
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号旧手机号验证码是否正确
  modifyPhoneCheckCode (userId, userPhone, checkCode) {
    const url = urls.modifyPhoneCheckCode;
    const params = {
      userId,
      userPhone,
      checkCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号给新手机发验证码
  modifyPhoneSendNewVerCode (userId, userPhone) {
    const url = urls.modifyPhoneSendNewVerCode;
    const params = {
      userId,
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号给新手机发语音验证码
  modifyPhoneSendNewSpeechCode (userId, userPhone) {
    const url = urls.modifyPhoneSendNewSpeechCode;
    const params = {
      userId,
      userPhone,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改手机号绑定新手机号
  modifyPhoneNewPhone (userId, userPhone, checkCode)
  {
    const url = urls.modifyPhoneNewPhone;
    const params = {
      userId,
      userPhone,
      checkCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //根据旧手机号和密码修改手机号
  modifyPhoneWithPassword (userPhone, userPassword)
  {
    const url = urls.modifyPhoneWithPassword;
    const params = {
      userPhone,
      userPassword: encryptMd5(userPassword),
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //修改用户信息
  //userInfo参数如下：
  //userId/realName/height/weight/birthDate/sex/abdominalCir/province/city/area
  modifyBasicUserInfo (userInfo) {
    const url = urls.modifyBasicUserInfo;
    const params = {
      sourceType
    };
    Object.assign(params, userInfo);
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //上传用户头像
  uploadHeadPic (userId, imgCode)
  {
    const url = urls.uploadHeadPic;
    const params = {
      userId,
      imgCode,
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //更新用户热身状态为YES
  uploadIsHot (userId) {
    const url = urls.uploadIsHot;
    const params = {
      userId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //查询使用说明列表
  getUserGuideList: (userId) => {
    const url = urls.userGuideHowToUse;
    const params = {
      sourceType,
      userId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //获取文章列表接口
  getArticleList (userId, articleType, pageSize, pageNumber, source_type = consts.sourceType_pd) {
    const url = urls.getArticleList;
    const params = {
      userId,
      articleType,
      pageSize,
      pageNumber,
      sourceType: source_type
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //广告接口
  getAd () {
    const url = urls.getAd;
    const params = {
      sourceType
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //下载标准评估数据
  downloadEvaluationInfo (appUserId) {
    const url = urls.downloadEvaluationInfo;
    const params = {
      appUserId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //获取所有用户收藏方案
  getAllFav (appUserId) {
    const url = urls.getAllFav;
    const params = {
      appUserId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //下载计划信息
  //indicationId:1004/1006/1012
  downloadPlanInfo (appUserId, indicationId) {
    const url = urls.downloadPlanInfo;
    const params = {
      appUserId,
      indicationId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //下载计划历史数据
  downloadPlanHis (appUserId) {
    const url = urls.downloadPlanHis;
    const params = {
      appUserId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //下载锻炼历史数据
  downloadExerciseHis (appUserId) {
    const url = urls.downloadExerciseHis;
    const params = {
      appUserId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  },

  //下载统计数据
  downloadStatisticsData (appUserId) {
    const url = urls.downloadStatisticsData;
    const params = {
      appUserId
    };
    return new Promise((resolve, reject) => {
      http.fetchPost(url, params)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
    });
  }

};

export default networkAdapter;