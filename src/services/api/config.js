// thay đổi api way ở đây nek
const URL_SYSTEM_V1 = "http://localhost:5000/api";
//http://localhost:5000/api/auth/login
export default {
  URL_LOGIN: URL_SYSTEM_V1 + "/auth/login",
  URL_REGISTER: URL_SYSTEM_V1 + "/auth/register",

  // USER
  URL_USER: URL_SYSTEM_V1 + "/user",

  // PRODUCT
  URL_PRODUCT: URL_SYSTEM_V1 + "/product",

  // PRODUCT
  URL_RECEIPT: URL_SYSTEM_V1 + "/receipt",

  // PRODUCT
  URL_NEWS: URL_SYSTEM_V1 + "/news",

  // PRODUCT
  URL_VOUCHER: URL_SYSTEM_V1 + "/voucher",

  // Banner
  URL_BANNER: URL_SYSTEM_V1 + "/banner",

  // Dashboard
  URL_DASHBOARD: URL_SYSTEM_V1 + "/dashboard",
};
