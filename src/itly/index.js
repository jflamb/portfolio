/* eslint-disable */
import itly$1 from '@itly/sdk';
import SchemaValidatorPlugin from '@itly/plugin-schema-validator';
import IterativelyPlugin from '@itly/plugin-iteratively';
import AmplitudePlugin from '@itly/plugin-amplitude';

/* tslint:disable */

// prettier-ignore
class Itly {
  /*
   * Initialize the Itly SDK. Call once when your application starts.
   * @param {Object} options Configuration options to initialize the Itly SDK with.
   * @param {boolean} [options.disabled=false] Flag to completely disable the Itly SDK.
   * @param {string} [options.environment=development] The environment the Itly SDK is running in (development or production).
   * @param {Object} [options.plugins] Collection of Plugin's.
   * @param {Object} [options.destinations] Analytics provider-specific configuration.
   */
  load(options) {
    if (options.context) {
      throw new Error('Your tracking plan contains no context properties but a `context` object was provided on `options`.');
    }

    const {
      destinations = {},
      plugins = [],
      ...baseOptions
    } = options;

    if (!options.plugins || !options.plugins.length > 0) {
      throw new Error('Your tracking plan is configured with a custom destination but a `plugins` array was not provided on `options`.');
    }


    itly$1.load({ ...baseOptions, plugins: [
      new IterativelyPlugin(options.environment === 'production'
        ? 'CR2q2uzFqhPRr93vHzFHr1PgbUUpDUZw'
        : 'vUMigHem3y6QkVB3BISaU-AK-OyuCGJV',
        {
          url: 'https://api.iterative.ly/t/version/b73a7b8b-c675-4ffa-924b-f016858b3825',
          environment: options.environment || 'development',
          ...destinations.iteratively,
        },
      ),
      new SchemaValidatorPlugin({
        'group': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/group","$schema":"http://json-schema.org/draft-07/schema#","title":"Group","description":"","type":"object","properties":{"tier":{"description":"The current plan of the account.","enum":["free","trial","premium"]},"plan":{"description":"The payment terms of the account.","enum":["monthly","annual"]},"createdAt":{"description":"The user's creation date (ISO-8601 date string).","type":"string"},"name":{"description":"The name of the account.","type":"string"}},"additionalProperties":false,"required":["tier","plan","createdAt","name"]},
        'identify': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/identify","$schema":"http://json-schema.org/draft-07/schema#","title":"Identify","description":"","type":"object","properties":{"createdAt":{"description":"The user's creation date (ISO-8601 date string).","type":"string"}},"additionalProperties":false,"required":["createdAt"]},
        'Account Created': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/e0ae1dee-e3fc-4326-bbd2-b65d8ecc2d7b/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"Account Created","description":"New account is created.","type":"object","properties":{"plan":{"description":"The plan chosen when the account was created.","enum":["free","premium","trial"]}},"additionalProperties":false,"required":["plan"]},
        'Account Deactivated': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/89dbcaf0-bcfd-42c3-b85a-411819039527/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"Account Deactivated","description":"Account is deactivated and no longer available.","type":"object","properties":{"reason":{"description":"The reason given to deactivate the account.","enum":["no longer needed","price","duplicate account"]}},"additionalProperties":false,"required":["reason"]},
        'Invite Sent': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/cf759345-0a66-4cc4-8993-40bbbe9dd0b0/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"Invite Sent","description":"User invites another user into an account.","type":"object","properties":{"inviteeRole":{"description":"The role associated with this invited user.","enum":["admin","editor","viewer"]}},"additionalProperties":false,"required":["inviteeRole"]},
        'User Signed In': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/7065f1a6-3145-418d-b451-dfac41cc33dc/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"User Signed In","description":"User signs in to the app.","type":"object","properties":{"authMethod":{"description":"The method that the user uses to authenticate.","enum":["email","google","sso"]}},"additionalProperties":false,"required":["authMethod"]},
        'User Signed Out': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/228b5533-ff6a-4b69-bdf0-163444d73737/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"User Signed Out","description":"User signs out of the app.","type":"object","properties":{},"additionalProperties":false,"required":[]},
        'User Signed Up': {"$id":"https://iterative.ly/company/4d09a1be-6416-4a7d-bb39-712c7c40f4f4/event/625b3fce-318d-4d56-9930-aeefeb7aa89b/version/1.0.0","$schema":"http://json-schema.org/draft-07/schema#","title":"User Signed Up","description":"User joins an existing account or creates a new account.","type":"object","properties":{"authMethod":{"description":"The method that the user uses to authenticate.","enum":["email","google","sso"]}},"additionalProperties":false,"required":["authMethod"]},
      }),
      new AmplitudePlugin(options.environment === 'production'
        ? ''
        : '',
        destinations.amplitude,
      ),
      ...plugins,
    ] });
  }

  /**
   * Alias a user ID to another user ID.
   * @param {string} userId The user's new ID.
   * @param {string} previousId The user's previous ID.
   */
  alias(userId, previousId) {
    itly$1.alias(userId, previousId);
  }

  /**
   * Identify a user and set or update that user's properties.
   * @param {string} [userId] The user's ID.
   * @param {Object} properties The user's properties.
   * @param {string} properties.createdAt The user's creation date (ISO-8601 date string).
   */
  identify(userId, properties) {
    if (Object.prototype.toString.call(userId) === '[object Object]') {
      properties = userId;
      userId = undefined;
    }

    if (!properties) {
      throw new Error('Your tracking plan contains at least one user property but `properties` were not passed as an argument.');
    }
    itly$1.identify(userId, properties);
  }

  /**
   * Associate the current user with a group and set or update that group's properties.
   * @param {string} groupId The group's ID.
   * @param {Object} properties The group's properties.
   * @param {string} properties.tier The current plan of the account.
   * @param {string} properties.plan The payment terms of the account.
   * @param {string} properties.createdAt The user's creation date (ISO-8601 date string).
   * @param {string} properties.name The name of the account.
   */
  group(groupId, properties) {
    if (!properties) {
      throw new Error('Your tracking plan contains at least one group property but `properties` were not passed as an argument.');
    }
    itly$1.group(groupId, properties);
  }
  
  /**
   * Track a page view.
   * @param {string} category The page's category.
   * @param {string} name The page's name.
   */
  page(category, name) {
    itly$1.page(category, name);
  }

  /**
   * User signs out of the app.
   * 
   * Owner: Jim Lamb
   */
  userSignedOut() {
    itly$1.track({
      name: 'User Signed Out',
      id: '228b5533-ff6a-4b69-bdf0-163444d73737',
      version: '1.0.0',
      properties: undefined,
    });
  }

  /**
   * User joins an existing account or creates a new account.
   * 
   * Owner: Jim Lamb
   * @param {Object} properties The event's properties.
   * @param {string} properties.authMethod The method that the user uses to authenticate.
   */
  userSignedUp(properties) {
    if (!properties) {
      throw new Error('There is at least one property defined on this event in your tracking plan but `properties` were not passed as an argument.');
    }

    itly$1.track({
      name: 'User Signed Up',
      id: '625b3fce-318d-4d56-9930-aeefeb7aa89b',
      version: '1.0.0',
      properties: properties,
    });
  }

  /**
   * User signs in to the app.
   * 
   * Owner: Jim Lamb
   * @param {Object} properties The event's properties.
   * @param {string} properties.authMethod The method that the user uses to authenticate.
   */
  userSignedIn(properties) {
    if (!properties) {
      throw new Error('There is at least one property defined on this event in your tracking plan but `properties` were not passed as an argument.');
    }

    itly$1.track({
      name: 'User Signed In',
      id: '7065f1a6-3145-418d-b451-dfac41cc33dc',
      version: '1.0.0',
      properties: properties,
    });
  }

  /**
   * Account is deactivated and no longer available.
   * 
   * Owner: Jim Lamb
   * @param {Object} properties The event's properties.
   * @param {string} properties.reason The reason given to deactivate the account.
   */
  accountDeactivated(properties) {
    if (!properties) {
      throw new Error('There is at least one property defined on this event in your tracking plan but `properties` were not passed as an argument.');
    }

    itly$1.track({
      name: 'Account Deactivated',
      id: '89dbcaf0-bcfd-42c3-b85a-411819039527',
      version: '1.0.0',
      properties: properties,
    });
  }

  /**
   * User invites another user into an account.
   * 
   * Owner: Jim Lamb
   * @param {Object} properties The event's properties.
   * @param {string} properties.inviteeRole The role associated with this invited user.
   */
  inviteSent(properties) {
    if (!properties) {
      throw new Error('There is at least one property defined on this event in your tracking plan but `properties` were not passed as an argument.');
    }

    itly$1.track({
      name: 'Invite Sent',
      id: 'cf759345-0a66-4cc4-8993-40bbbe9dd0b0',
      version: '1.0.0',
      properties: properties,
    });
  }

  /**
   * New account is created.
   * 
   * Owner: Jim Lamb
   * @param {Object} properties The event's properties.
   * @param {string} properties.plan The plan chosen when the account was created.
   */
  accountCreated(properties) {
    if (!properties) {
      throw new Error('There is at least one property defined on this event in your tracking plan but `properties` were not passed as an argument.');
    }

    itly$1.track({
      name: 'Account Created',
      id: 'e0ae1dee-e3fc-4326-bbd2-b65d8ecc2d7b',
      version: '1.0.0',
      properties: properties,
    });
  }

  track(event) {
    itly$1.track(event);
  }

  reset() {
    itly$1.reset();
  }
}

var itly = new Itly();

export default itly;
