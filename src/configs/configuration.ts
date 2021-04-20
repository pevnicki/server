import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  thingsBoardHost: process.env.THINGS_BOARD_HOST,
  corsightHost: process.env.CORSIGHT_HOST,
  corsightLoginPort: process.env.CORSIGHT_LOGIN_PORT
}))
