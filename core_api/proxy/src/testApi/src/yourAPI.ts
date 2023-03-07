import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  YourAPIOptionalParams,
  GetUsersOptionalParams,
  GetUsersResponse,
  GetLoginOptionalParams,
  GetLoginResponse,
  GetUserByIDOptionalParams,
  GetUserByIDResponse,
  GetOptionalParams,
  GetResponse
} from "./models";

export class YourAPI extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the YourAPI class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: YourAPIOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: YourAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-yourAPI/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{$host}"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.$host = $host;
  }

  /** @param options The options parameters. */
  getUsers(options?: GetUsersOptionalParams): Promise<GetUsersResponse> {
    return this.sendOperationRequest({ options }, getUsersOperationSpec);
  }

  /** @param options The options parameters. */
  getLogin(options?: GetLoginOptionalParams): Promise<GetLoginResponse> {
    return this.sendOperationRequest({ options }, getLoginOperationSpec);
  }

  /** @param options The options parameters. */
  getUserByID(
    options?: GetUserByIDOptionalParams
  ): Promise<GetUserByIDResponse> {
    return this.sendOperationRequest({ options }, getUserByIDOperationSpec);
  }

  /** @param options The options parameters. */
  get(options?: GetOptionalParams): Promise<GetResponse> {
    return this.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getUsersOperationSpec: coreClient.OperationSpec = {
  path: "/api/User/get-users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Users" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getLoginOperationSpec: coreClient.OperationSpec = {
  path: "/api/User/get-login",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Login" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUserByIDOperationSpec: coreClient.OperationSpec = {
  path: "/api/User/get-user-by-id",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Users
    }
  },
  queryParameters: [Parameters.id],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/WeatherForecast",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "WeatherForecast" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
