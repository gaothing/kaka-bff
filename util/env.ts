enum Env {
  Development = "development",
  Production = "production",
}
export const getEnv = () => {
  return process.NODE_ENV;
};
export const isDev = () => getEnv() === Env.Development;
export const isProd = () => getEnv() === Env.Production;
