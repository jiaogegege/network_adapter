//主机路径
const hosts = {
  //头像路径
  headPicHost: 'https://dayue-image.oss-cn-hangzhou.aliyuncs.com/dayue-user-header-img/',
  //广告图片路径
  advertisementPicHost: 'https://dayue-image.oss-cn-hangzhou.aliyuncs.com/dayue-ad-img/',
  //文章图标路径
  articleIconHost: "https://dayue-image.oss-cn-hangzhou.aliyuncs.com/dayue-article-img/",
  //图标文件路径
  normalIconServerHost: 'https://dayue-image.oss-cn-hangzhou.aliyuncs.com/',
  //文章路径
  articleHost: 'https://dayuemedical.com.cn/pp-admin',
  //禁忌症地址
  contraindicationUrl: 'https://dayuemedical.com.cn/pp-admin/explain/contraindication/detail?articleId=8a36c6d714714840a71969de07dff0bd',
  //大悦盆底服务条款
  serviceUrl: "https://dayuemedical.com.cn/xy/services_and_privacy.html",
  //分享地址
  shareUrl: 'https://dayuemedical.com.cn/C_share/p_share.html',
  //产康推广地址
  ckAdUrl: "https://dayuemedical.com.cn/ps_discover/c_discover.html",
  //塑形推广地址
  sxAdUrl: "https://dayuemedical.com.cn/ps_discover/s_discover.html",


};

//一些url配置常量
const consts = {
  //用户来源，2表示大悦盆底，1表示产康，3表示塑形
  sourceType_pd: '2',
  sourceType_ck: '1',
  sourceType_sx: '3',

  //通用接口目录
  commonRest: '/common-rest',

  //P项目专用接口目录
  ppRest: '/pp-rest',

  //P项目专用接口目录
  ppAdmin: '/pp-admin',

  //des加密时候用的key
  desKey: 'Bvpi3pWCzm1SgA2SL0gp3a'
};

//接口
const urls = {
  /*
  用户登录接口
  参数1：sourceType: String
  参数2：userPhone: String
  参数3：userPassword: String
   */
  loginWithPhoneAndPassword: '/common-rest/user/loginWithPhone',
  
  /*
   * 描述：验证码登录时获取验证码
   *
   * 参数1：userPhone
   *
   * 参数2：无
   * 
   * 返回值：验证码
  */
  loginGetVerCode: "/common-rest/user/loginWithCheckCodeToSendCode",
  
  /*
   * 描述：验证码登录时获取语音验证码
   *
   * 参数1：userPhone
   *
   * 参数2：无
   *
   * 返回值：验证码
  */
  loginGetSpeechCode: "/common-rest/user/loginWithCheckCodeToSendVoiceCode",

  /*
   * 描述：验证码登录
   *
   * 参数1：userPhone
   *
   * 参数2：checkCode
   * 
   * 返回值：用户信息
  */
  loginWithCode: "/common-rest/user/loginWithCheckCode",
  
  /*
   * 描述：根据手机号判断是否注册
   *
   * 参数1：userPhone
   *
   * 返回值：状态码
  */
  phoneRegistered: "/common-rest/user/userPhoneIsRegister",
  
  /*
   * 描述：注册时发送验证码
   *
   * 参数1：userPhone
   *
   * 参数2：sourceType
   *
   * 返回值：验证码
  */
  registerGetVerCode: "/common-rest/user/registerToSendCode",
  
  /*
   * 描述：注册时发送语音验证码
   *
   * 参数1：userPhone
   *
   * 参数2：sourceType
   *
   * 返回值：验证码
  */
  registerGetSpeechCode: "/common-rest/user/registerToSendVoiceCode",
  
  /*
   * 描述：注册时判断验证码是否正确
   *
   * 参数1：userPhone
   *
   * 参数2：checkCode
   *
   * 参数3：sourceType
   * 
   * 返回值：是否正确
  */
  registerCheckCode: "/common-rest/user/checkCodeIsMatchDuringRegister",
  
  
  /*
   * 描述：完成注册
   *
   * 参数1：userPhone
   *
   * 参数2：userPassword
   * 
   * 参数3：sourceType
   * 
   * 返回值：用户信息
  */
  finishRegister: "/common-rest/user/finishRegister",

  /*
   * 描述：完善用户基础信息
   *
   * 参数1：dict
   *
   * 参数2：isPerfect
   *
   * 返回值：用户信息、用户配置信息
  */
  perfectBasicUserInfo: "/common-rest/user/perfectUserInfo",
  
  /*
   * 描述：单独获取用户基础信息接口
   *
   * 参数1：userId
   *
   * 参数2：无
   * 
   * 返回值：用户基础信息
  */
  getBasicUserInfo: "/common-rest/user/getUserBaseInfo",
  
  /*
   * 描述：提交用户问卷信息
   *
   * 参数1：userId
   *
   * 参数2：userInfo
   *
   * 参数3：isPerfect
   * 
   * 返回值：无
  */
  uploadUserQuestions: "/common-rest/userInfo/saveUserInfo",
  
  /*
   * 描述：获取问卷答案
   *
   * 参数1：userId
   *
   * 参数2：无
   * 
   * 返回值：问卷答案
  */
  getUserQuestions: "/common-rest/user/getMoreUserInfo",
  
  /*
   * 描述：获取用户全部信息
   *
   * 参数1：userId
   *
   * 参数2：sourceType
   * 
   * 返回值：answerList/cpAppUser
  */
  getUserAllInfo: "/common-rest/user/getUserInfo",
  
  /*
   * 描述：忘记密码获取验证码
   *
   * 参数1：userPhone
   *
   * 参数2：sourceType
   * 
   * 返回值：验证码
  */
  forgetPsdGetVerCode: "/common-rest/user/forgetPswCheck",
  
  /*
   * 描述：忘记密码获取语音验证码
   *
   * 参数1：userPhone
   *
   * 参数2：sourceType
   * 
   * 返回值：验证码
  */
  forgetPsdGetSpeechCode: "/common-rest/user/forgetPswVoiceCheck",
  
  /*
   * 描述：忘记密码的时候，判断验证码是否正确
   *
   * 参数1：userPhone
   *
   * 参数2：checkCode
   * 
   * 返回值：无
  */
  forgetPsdCheckCode: "/common-rest/user/checkUserPhoneAndCodeIsMatchDuringForgetPsw",

  /*
   * 描述：重置密码并登录
   *
   * 参数1：userPhone
   *
   * 参数2：userPassword
   *
   * 参数3：sourceType
   *
   * 返回值：用户信息
  */
  resetPsd: "/common-rest/user/restUserPsw",

  /*
   * 描述：修改密码
   *
   * 参数1：userId
   *
   * 参数2：userPassword
   *
   * 参数3：newUserPassword
   *
   * 参数4：sourceType
   *
   * 返回值：用户信息
  */
  modifyPsd: "/common-rest/user/modifyUserPsw",
  
  /*
   * 描述：获取微信客服二维码
   *
   * 参数1：无
   *
   * 参数2：无
   * 
   * 返回值：二维码地址
  */
  getQrCode: "/common-rest/dic/getQrCodeUrl",
  
  /*
   * 描述：修改手机号给旧手机发送验证码
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   * 
   * 返回值：
  */
  modifyPhoneSendVerCode: "/common-rest/user/modifyUserPhoneSendCode",
  
  /*
   * 描述：修改手机号给旧手机发送语音验证码
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   * 
   * 返回值：
  */
  modifyPhoneSendSpeechCode: "/common-rest/user/modifyUserPhoneSendVoiceCode",
  
  /*
   * 描述：修改手机号旧手机号验证码是否正确
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   * 
   * 返回值：checkCode
  */
  modifyPhoneCheckCode: "/common-rest/user/checkUserPhoneAndCodeIsMatchDuringModifyUserPhone",
  
  /*
   * 描述：修改手机号给新手机发验证码
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   * 
   * 返回值：验证码
  */
  modifyPhoneSendNewVerCode: "/common-rest/user/modifyUserPhoneSendCodeToNewPhone",
  
  /*
   * 描述：修改手机号给新手机发语音验证码
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   * 
   * 返回值：验证码
  */
  modifyPhoneSendNewSpeechCode: "/common-rest/user/modifyUserPhoneSendVoiceCodeToNewPhone",
  
  /*
   * 描述：修改手机号绑定新手机号
   *
   * 参数1：userId
   *
   * 参数2：userPhone
   *
   * 参数3：checkCode
   *
   * 参数4：sourceType
   * 
   * 返回值：none
  */
  modifyPhoneNewPhone: "/common-rest/user/modifyUserPhone",
  
  /*
   * 描述：根据旧手机号和密码修改手机号
   *
   * 参数1：userPhone
   *
   * 参数2：userPassword
   * 
   * 返回值：none
  */
  modifyPhoneWithPassword: "/common-rest/user/checkUserWithPhoneAndPsw",
  
  /*
   * 描述：修改用户信息
   *
   * 参数1：dict
   *
   * 参数2：sourceType
   * 
   * 返回值：无
  */
  modifyBasicUserInfo: "/common-rest/user/modifyUserInfo",
  
  /*
   * 描述：上传用户头像
   *
   * 参数1：userId
   *
   * 参数2：imgCode
   *
   * 参数3：sourceType
   * 
   * 返回值：无
  */
  uploadHeadPic: "/common-rest/user/uploadHeadImg",
  
  /*
   * 描述：更新用户热身状态为YES
   *
   * 参数1：userId
   *
   * 参数2：none
   * 
   * 返回值：none
  */
  uploadIsHot: "/common-rest/user/finishHot",

  /*
   * 描述：上传设备信息
   *
   * 参数1：appUserId/deviceSerialNumber/blueToothMac/deviceName/deviceModel/deviceManufactureDate/deviceCoSoftVersion/deviceSoftVersion
   *
   * 参数2：none
   *
   * 返回值：none
  */
  uploadDeviceInfo: "/pp-rest/device/uploadDeviceInfo",

  /*
   * 描述：上传阴道电极信息
   *
   * 参数1：xxx
   *
   * 参数2：none
   *
   * 返回值：
  */
  uploadElectrodeInfo: "/pp-rest/device/uploadElectrodeInfo",

  /*
   * 描述：版本更新
   *
   * 参数1：sourceType
   *
   * 参数2：
   *
   * 返回值：
  */
  versionUpdate: "/common-rest/config/iosVersion",

  /*
  功能：获取使用说明接口
  参数1：sourceType:String，1/2/3，C/P/S项目源
  参数2：userId:String，用户id
   */
  userGuideHowToUse: '/common-rest/article/getWareClass',
  
  /*
   * 描述：获取文章列表接口
   *
   * 参数1：articleType/pageSize/pageNumber/sourceType
   *
   * 参数2：
   * 
   * 返回值：
  */
  getArticleList: "/common-rest/article/getArticleListByType",

  /*
   * 描述：广告接口
   *
   * 参数1：sourceType
   *
   * 参数2：
   * 
   * 返回值：
  */
  getAd: "/common-rest/ad/adInfo",

  /*
   * 描述：上传标准评估记录
   *
   * 参数1：appUserId
   *
   * 参数2：evaluationInfo
   *
   * 返回值：
  */
  uploadEvaluationInfo: "/pp-rest/evaluation/uploadEvaluation",
  
  /*
   * 描述：下载标准评估数据
   *
   * 参数1：appUserId
   *
   * 参数2：
   * 
   * 返回值：
  */
  downloadEvaluationInfo: "/pp-rest/evaluation/downloadEvaluation",

  /*
   * 描述：添加收藏
   *
   * 参数1：appUserId
   *
   * 参数2：favProgrammeInfo
   *
   * 返回值：
  */
  addFav: "/pp-rest/programme/addFavProgramme",

  /*
   * 描述：删除收藏
   *
   * 参数1：appUserId
   *
   * 参数2：favProgrammeInfo
   *
   * 返回值：
  */
  removeFav: "/pp-rest/programme/removeFavProgramme",
  
  /*
   * 描述：获取所有用户收藏方案
   *
   * 参数1：appUserId
   *
   * 参数2：
   * 
   * 返回值：
  */
  getAllFav: "/pp-rest/programme/favProgrammeList",

  /*
   * 描述：上传游戏得分
   *
   * 参数1：appUserId
   *
   * 参数2：gameInfo
   *
   * 返回值：
  */
  uploadGameScore: "/pp-rest/game/uploadGameScore",

  /*
   * 描述：上传计划信息
   *
   * 参数1：appUserId
   *
   * 参数2：planInfo
   *
   * 返回值：
  */
  uploadPlanInfo: "/pp-rest/plan/uploadPlanInfo",
  
  /*
   * 描述：下载计划信息
   *
   * 参数1：appUserId
   *
   * 参数2：indicationId
   * 
   * 返回值：
  */
  downloadPlanInfo: "/pp-rest/plan/downloadPlanInfo",
  
  /*
   * 描述：上传计划历史数据
   *
   * 参数1：appUserId
   *
   * 参数2：planProgrammeInfo
   * 
   * 返回值：
  */
  uploadPlanHis: "/pp-rest/programme/uploadPlanHisProgramme",
  
  /*
   * 描述：下载计划历史数据
   *
   * 参数1：appUserId
   *
   * 参数2：
   * 
   * 返回值：
  */
  downloadPlanHis: "/pp-rest/programme/downloadPlanHisProgramme",

  /*
   * 描述：上传锻炼历史数据
   *
   * 参数1：appUserId
   *
   * 参数2：exerciseHisProgrammeInfo
   *
   * 返回值：
  */
  uploadExerciseHis: "/pp-rest/programme/uploadExerciseHisProgramme",

  /*
   * 描述：下载锻炼历史数据
   *
   * 参数1：appUserId
   *
   * 参数2：
   *
   * 返回值：
  */
  downloadExerciseHis: "/pp-rest/programme/downloadExerciseHisProgramme",

  /*
   * 描述：上传统计数据
   *
   * 参数1：appUserId
   *
   * 参数2：statisticsInfo
   *
   * 返回值：
  */
  uploadStatisticsData: "/pp-rest/statistics/uploadStatisticsInfo",

  /*
   * 描述：下载统计数据
   *
   * 参数1：appUserId
   *
   * 参数2：
   *
   * 返回值：
  */
  downloadStatisticsData: "/pp-rest/statistics/downloadStatisticsInfo"
};

//接口错误码
const errorCode = {
  errorCode_UnAvailable: 0,         //网络不可用
  errorCode_OK: 200,     //正常
  errorCode_SystemError: 500,        //系统异常

  errorCode_UserForbidden: 9001,         //用户被禁用
  errorCode_UserForbiddenFirst: 9009,        //账号第一次被锁定
  errorCode_UserPasswordError: 9002,     //用户账户或密码错误
  errorCode_UserRegisted: 9003,            //用户名/手机号 已经被注册
  errorCode_UserNotExist: 9004,          //用户不存在
  errorCode_PhoneRegisted: 8001,         //手机号被注册
  errorCode_VarificationEmpty: 8002,         //手机验证码为空
  errorCode_VarificationExpired: 8003,       //手机验证码过期
  errorCode_VarificationError: 8004,             //手机验证码错误
  errorCode_SendVarificationError: 8005,         //验证码发送失败
  errorCode_BlackListError: 9005,           //该账号已被列入黑名单，禁止使用
  errorCode_NeededParamEmpty: 9010,      //有必填的参数为空
  errorCode_DataFormatError: 9011,          //数据格式错误
  errorCode_TokenError: 2001,        //token错误
  errorCode_TokenExpired: 2002,          //token过期
  errorCode_TokenEmpty: 2003,        //token为空
  errorCode_PhoneChanged: 2005,         //手机号码只允许更换一次
  errorCode_SignFormatError: 3001,       //签名格式错误
  errorCode_SignError: 3002,             //签名错误
  errorCode_SignExpired: 3003,       //签名超过有效期
  errorCode_PasswordError: 6001,         //密码错误
  errorCode_DeviceBinded: 7001,         //设备已被绑定

  errorCode_NotFound: 404,      //资源未找到
  errorCode_BadRequest: 400,     //请求失败
  errorCode_ServerError: 501,            //没有此服务
  errorCode_BadGetway: 502          //连接服务器错误
};

//接口错误信息
const errorReason = {
  errorReasonOK: "正常",
  errorReasonSystemError: "系统异常",
  errorReasonUserForbidden: "当前账号被锁定，请30分钟后重试",
  errorReasonUserForbiddenFirst: "当前账号被锁定，请30分钟后重试",
  errorReasonUserPasswordError: "用户账号或密码错误，请重新输入",
  errorReasonUserRegisted: "手机号码已经被注册",
  errorReasonUserNotExist: "用户不存在",
  errorReasonNetworkUnavailable: "当前无网络，请打开网络后重试",       //无网络的提示
  errorReasonPhoneRegisted: "手机号码已经被注册",
  errorReasonVarificationEmpty: "验证码为空",
  errorReasonVarificationExpired: "验证码过期",
  errorReasonVarificationError: "验证码错误",
  errorReasonSendVarificationError: "验证码获取失败",
  errorReasonBlackListError: "该账号已被列入黑名单，禁止使用",
  errorReasonNeededParamEmpty: "有必填的参数为空",
  errorReasonDataFormatError: "数据格式错误",
  errorReasonTokenError: "token错误",
  errorReasonTokenExpired: "token过期",
  errorReasonTokenEmpty: "token为空",
  errorReasonPhoneChanged: "手机号码只允许更换一次",
  errorReasonSignFormatError: "签名格式错误",
  errorReasonSignError: "签名错误",
  errorReasonSignExpired: "签名超过有效期",
  errorReasonPasswordError: "密码输入错误",
  errorReasonDeviceBinded: "设备已被绑定",
  errorReasonNotFound: "资源未找到",
  errorReasonBadRequest: "请求失败",
  errorReasonServerError: "没有此服务",
  errorReasonBadGetway: "连接服务器错误",
  errorReasonNormalError: "当前网络异常，请稍候重试"
};

export {hosts, urls, consts, errorCode, errorReason};