const EnvService = ((envs: ImportMetaEnv): ImportMetaEnv => envs)(import.meta.env);

const baseURL = EnvService.REACT_APP_BASE_URL || "";

export default baseURL;
