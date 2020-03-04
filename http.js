import axios from 'axios'
import {encryptDes} from "../crypto/des";
import {consts, errorCode, errorReason} from "./UrlDefine";
// import qs from 'qs'

/**
 * 全局配置
 * @type {AxiosInstance}
 */
// axios.defaults.timeout = 300000;
// axios.defaults.baseURL = 'https://dayuemedical.com.cn';

const request = axios.create({
  // baseURL: 'https://dayuemedical.com.cn',
  // url: '/getInfo',
  // methods: 'get,post,put,patch,delete',
  // params: {},
  // data: {},
  timeout: 30000,
  headers: {
    "Content-type": "application/json"
  }
});

const http = {
  //构造加密参数
  desParams: function (originParams) {
    let escapeArray = ['emgAValue', 'emgBValue', 'imgCode'];
    let desParams = {};
    for (let key of Object.keys(originParams)) {
      if (!escapeArray.includes(key)) {
        //如果参数值不是字符串，那么转成字符串
        if (typeof originParams[key] !== 'string') {
          originParams[key] = String(originParams[key]);
        }
        //空字符串不需要加密
        if (originParams[key].length > 0) {
          desParams[key] = encryptDes(originParams[key], consts.desKey);
        }
      }
      else {
        desParams[key] = originParams[key];
      }
    }
    return desParams;
  },

  //返回一个Promise(发送get请求)
  fetchGet: function (url, param) {
    return new Promise((resolve, reject) => {
      request.get(url, {params: param})
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error);
        })
    })
  },

  //返回一个Promise(发送post请求)
  fetchPost: function (url, params) {
    let desParams = this.desParams(params);
    return new Promise((resolve, reject) => {
      request.post(url, desParams, {})
        .then(response => {
          //如果返回result为true，那么成功
          if (response.data.result) {
            resolve(response.data.objValue);
          }
          else {
            //获取错误码
            let errCode = response.data.type;
            //获取错误信息
            let errMsg = response.data.value;
            //构造错误对象
            let errReason = this.getErrorReason(errCode, errMsg);
            reject(new Error(errReason));
          }
        }, err => {
          reject(new Error(this.getErrorReason(err.code, err.message)))
        })
        .catch((error) => {
          reject(new Error(this.getErrorReason(error.code, error.message)))
        })
    })
  },

  //构造错误对象
  getErrorReason: function (code, msg) {
    switch (code) {
      case errorCode.errorCode_UserForbidden:
        return `当前账号被锁定，请${msg}分钟后重试`;
      default:
        return this.getErrorReasonWithCode(code);
    }
  },

  getErrorReasonWithCode: (code) => {
    switch (code) {
      case errorCode.errorCode_UnAvailable:
        return errorReason.errorReasonNetworkUnavailable;
      case errorCode.errorCode_OK:
        return errorReason.errorReasonOK;
      case errorCode.errorCode_SignError:
        return errorReason.errorReasonSignError;
      case errorCode.errorCode_TokenEmpty:
        return errorReason.errorReasonTokenEmpty;
      case errorCode.errorCode_SignExpired:
        return errorReason.errorReasonSignExpired;
      case errorCode.errorCode_PhoneChanged:
        return errorReason.errorReasonPhoneChanged;
      case errorCode.errorCode_SystemError:
        return errorReason.errorReasonSystemError;
      case errorCode.errorCode_DeviceBinded:
        return errorReason.errorReasonDeviceBinded;
      case errorCode.errorCode_UserNotExist:
        return errorReason.errorReasonUserNotExist;
      case errorCode.errorCode_PasswordError:
        return errorReason.errorReasonPasswordError;
      case errorCode.errorCode_UserRegisted:
        return errorReason.errorReasonUserRegisted;
      case errorCode.errorCode_PhoneRegisted:
        return errorReason.errorReasonPhoneRegisted;
      case errorCode.errorCode_VarificationEmpty:
        return errorReason.errorReasonVarificationEmpty;
      case errorCode.errorCode_TokenError:
        return errorReason.errorReasonTokenError;
      case errorCode.errorCode_TokenExpired:
        return errorReason.errorReasonTokenExpired;
      case errorCode.errorCode_UserForbidden:
        return errorReason.errorReasonUserForbidden;
      case errorCode.errorCode_UserForbiddenFirst:
        return errorReason.errorReasonUserForbiddenFirst;
      case errorCode.errorCode_NeededParamEmpty:
        return errorReason.errorReasonNeededParamEmpty;
      case errorCode.errorCode_DataFormatError:
        return errorReason.errorReasonDataFormatError;
      case errorCode.errorCode_SignFormatError:
        return errorReason.errorReasonSignFormatError;
      case errorCode.errorCode_UserPasswordError:
        return errorReason.errorReasonUserPasswordError;
      case errorCode.errorCode_VarificationError:
        return errorReason.errorReasonVarificationError;
      case errorCode.errorCode_VarificationExpired:
        return errorReason.errorReasonVarificationExpired;
      case errorCode.errorCode_SendVarificationError:
        return errorReason.errorReasonSendVarificationError;
      case errorCode.errorCode_BlackListError:
        return errorReason.errorReasonBlackListError;
      case errorCode.errorCode_NotFound:
        return errorReason.errorReasonNotFound;
      case errorCode.errorCode_BadRequest:
        return errorReason.errorReasonBadRequest;
      case errorCode.errorCode_ServerError:
        return errorReason.errorReasonServerError;
      case errorCode.errorCode_BadGetway:
        return errorReason.errorReasonBadGetway;
      default:
        return errorReason.errorReasonNormalError;
    }
  }
};

// POST传参序列化(添加请求拦截器)
// request.interceptors.request.use((config) => {
//   // 在发送请求之前做某件事
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, (error) => {
//   console.log('错误的传参')
//   return Promise.reject(error)
// })

// 返回状态判断(添加响应拦截器)
// request.interceptors.response.use((res) => {
//   // 对响应数据做些事
//   if (!res.data.success) {
//     return Promise.resolve(res)
//   }
//   return res
// }, (error) => {
//   console.log('网络异常')
//   return Promise.reject(error)
// })

export default http
