import pino from 'pino';
import { fullStack } from 'make-error-cause';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const logLevel = publicRuntimeConfig.NEXT_PUBLIC_LOG_LEVEL;

export const logger = pino({
  level: logLevel || 'info', // default 'info'
  browser: {
    asObject: true,
  },
  serializers: {
    err(value) {
      if (value instanceof Error) {
        return fullStack(value);
      } else {
        return value;
      }
    },
  },
});
