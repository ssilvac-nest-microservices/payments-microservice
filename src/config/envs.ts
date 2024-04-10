import 'dotenv/config';
import * as joi from 'joi';

interface IEnvVars {
  PORT: number;
  NATS_SERVERS: string[];
  STRIPE_SECRET_KEY: string;
  STRIPE_ENPOINT_SECRET: string;
  SUCCESS_URL: string;
  CANCEL_URL: string;
}

const envVarsSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    STRIPE_SECRET_KEY: joi.string().required(),
    STRIPE_ENPOINT_SECRET: joi.string().required(),
    SUCCESS_URL: joi.string().required(),
    CANCEL_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envVarsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: IEnvVars = value;

export const envs = {
  port: envVars.PORT,
  natsServers: envVars.NATS_SERVERS,
  stripeSecretKey: envVars.STRIPE_SECRET_KEY,
  stripeEndpointSecret: envVars.STRIPE_ENPOINT_SECRET,
  successUrl: envVars.SUCCESS_URL,
  cancelUrl: envVars.CANCEL_URL,
};
