import * as coreClient from "@azure/core-client";

export const Users: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Users",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        nullable: true,
        type: {
          name: "String"
        }
      },
      mobile: {
        serializedName: "mobile",
        nullable: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String"
        }
      },
      gender: {
        serializedName: "gender",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Login: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Login",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        nullable: true,
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        nullable: true,
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WeatherForecast: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WeatherForecast",
    modelProperties: {
      date: {
        serializedName: "date",
        type: {
          name: "DateTime"
        }
      },
      temperatureC: {
        serializedName: "temperatureC",
        type: {
          name: "Number"
        }
      },
      temperatureF: {
        serializedName: "temperatureF",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      summary: {
        serializedName: "summary",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
