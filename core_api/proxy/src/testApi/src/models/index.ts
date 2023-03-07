import * as coreClient from "@azure/core-client";

export interface Users {
  id?: number;
  name?: string;
  address?: string;
  mobile?: string;
  email?: string;
  gender?: string;
}

export interface Login {
  id?: number;
  username?: string;
  password?: string;
  role?: string;
}

export interface WeatherForecast {
  date?: Date;
  temperatureC?: number;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly temperatureF?: number;
  summary?: string;
}

/** Optional parameters. */
export interface GetUsersOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getUsers operation. */
export type GetUsersResponse = Users[];

/** Optional parameters. */
export interface GetLoginOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getLogin operation. */
export type GetLoginResponse = Login[];

/** Optional parameters. */
export interface GetUserByIDOptionalParams extends coreClient.OperationOptions {
  id?: number;
}

/** Contains response data for the getUserByID operation. */
export type GetUserByIDResponse = Users;

/** Optional parameters. */
export interface GetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GetResponse = WeatherForecast[];

/** Optional parameters. */
export interface YourAPIOptionalParams extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
