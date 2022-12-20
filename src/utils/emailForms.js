import { emailTemplate } from "./emailTemplate";
import {
  ACCOUNT_VERIFICATION_BUTTON_POINTER_TEXT,
  ACCOUNT_VERIFICATION_BUTTON_TEXT,
  ACCOUNT_VERIFICATION_EMAIL_TITLE,
  ACCOUNT_VERIFICATION_IMAGE_URL,
  ACCOUNT_VERIFICATION_IMAGE_URL_ALT,
  ACCOUNT_VERIFICATION_SUBTITLE,
  ACCOUNT_VERIFICATION_TITLE_ONE,
  ACCOUNT_VERIFICATION_TITLE_TWO,
  CODE_IS_SCIENCE_URL,
  FORGOT_PASSWORD_BUTTON_POINTER_TEXT,
  FORGOT_PASSWORD_BUTTON_TEXT,
  FORGOT_PASSWORD_EMAIL_TITLE,
  FORGOT_PASSWORD_IMAGE_URL,
  FORGOT_PASSWORD_IMAGE_URL_ALT,
  FORGOT_PASSWORD_SUBTITLE,
  FORGOT_PASSWORD_TITLE_ONE,
  FORGOT_PASSWORD_TITLE_TWO,
  LOGO_URL,
  NEW_EMAIL_ADDRESS_VERIFICATION_EMAIL_TITLE,
  NEW_EMAIL_ADDRESS_VERIFICATION_IMAGE_URL,
  NEW_EMAIL_ADDRESS_VERIFICATION_IMAGE_URL_ALT,
  NEW_EMAIL_ADDRESS_VERIFICATION_TITLE_ONE,
  NEW_EMAIL_ADDRESS_VERIFICATION_TITLE_TWO,
  NEW_EMAIL_ADDRESS_VERIFICATION_SUBTITLE,
  NEW_EMAIL_ADDRESS_VERIFICATION_BUTTON_TEXT,
  NEW_EMAIL_ADDRESS_VERIFICATION_BUTTON_POINTER_TEXT,
  USERNAME_UPDATE_ALERT_EMAIL_TITLE,
  USERNAME_UPDATE_ALERT_IMAGE_URL,
  USERNAME_UPDATE_ALERT_IMAGE_URL_ALT,
  USERNAME_UPDATE_ALERT_TITLE_ONE,
  USERNAME_UPDATE_ALERT_TITLE_TWO,
  USERNAME_UPDATE_ALERT_SUBTITLE,
  PASSWORD_UPDATE_ALERT_EMAIL_TITLE,
  EMAIL_ADDRESS_UPDATE_ALERT_EMAIL_TITLE,
  EMAIL_ADDRESS_UPDATE_ALERT_IMAGE_URL,
  EMAIL_ADDRESS_UPDATE_ALERT_IMAGE_URL_ALT,
  EMAIL_ADDRESS_UPDATE_ALERT_TITLE_ONE,
  EMAIL_ADDRESS_UPDATE_ALERT_TITLE_TWO,
  EMAIL_ADDRESS_UPDATE_ALERT_SUBTITLE,
} from "./emailConstants";

export const accountVerificationEmail = (accountVerificationLink) => {
  return emailTemplate(
    accountVerificationLink,
    ACCOUNT_VERIFICATION_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    ACCOUNT_VERIFICATION_IMAGE_URL,
    ACCOUNT_VERIFICATION_IMAGE_URL_ALT,
    ACCOUNT_VERIFICATION_TITLE_ONE,
    ACCOUNT_VERIFICATION_TITLE_TWO,
    ACCOUNT_VERIFICATION_SUBTITLE,
    ACCOUNT_VERIFICATION_BUTTON_TEXT,
    ACCOUNT_VERIFICATION_BUTTON_POINTER_TEXT
  );
};

export const forgotPasswordEmail = (forgotPasswordLink) => {
  return emailTemplate(
    forgotPasswordLink,
    FORGOT_PASSWORD_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    FORGOT_PASSWORD_IMAGE_URL,
    FORGOT_PASSWORD_IMAGE_URL_ALT,
    FORGOT_PASSWORD_TITLE_ONE,
    FORGOT_PASSWORD_TITLE_TWO,
    FORGOT_PASSWORD_SUBTITLE,
    FORGOT_PASSWORD_BUTTON_TEXT,
    FORGOT_PASSWORD_BUTTON_POINTER_TEXT
  );
};

export const verifyNewEmailAddressEmail = (forgotPasswordLink) => {
  return emailTemplate(
    forgotPasswordLink,
    NEW_EMAIL_ADDRESS_VERIFICATION_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    NEW_EMAIL_ADDRESS_VERIFICATION_IMAGE_URL,
    NEW_EMAIL_ADDRESS_VERIFICATION_IMAGE_URL_ALT,
    NEW_EMAIL_ADDRESS_VERIFICATION_TITLE_ONE,
    NEW_EMAIL_ADDRESS_VERIFICATION_TITLE_TWO,
    NEW_EMAIL_ADDRESS_VERIFICATION_SUBTITLE,
    NEW_EMAIL_ADDRESS_VERIFICATION_BUTTON_TEXT,
    NEW_EMAIL_ADDRESS_VERIFICATION_BUTTON_POINTER_TEXT
  );
};

export const usernameUpdateAlertEmail = () => {
  return emailTemplate(
    "",
    USERNAME_UPDATE_ALERT_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    USERNAME_UPDATE_ALERT_IMAGE_URL,
    USERNAME_UPDATE_ALERT_IMAGE_URL_ALT,
    USERNAME_UPDATE_ALERT_TITLE_ONE,
    USERNAME_UPDATE_ALERT_TITLE_TWO,
    USERNAME_UPDATE_ALERT_SUBTITLE,
    "",
    ""
  );
};

export const passwordUpdateAlertEmail = () => {
  return emailTemplate(
    "",
    PASSWORD_UPDATE_ALERT_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    USERNAME_UPDATE_ALERT_IMAGE_URL,
    USERNAME_UPDATE_ALERT_IMAGE_URL_ALT,
    USERNAME_UPDATE_ALERT_TITLE_ONE,
    USERNAME_UPDATE_ALERT_TITLE_TWO,
    USERNAME_UPDATE_ALERT_SUBTITLE,
    "",
    ""
  );
};

export const emailAddressUpdateAlertEmail = () => {
  return emailTemplate(
    "",
    EMAIL_ADDRESS_UPDATE_ALERT_EMAIL_TITLE,
    LOGO_URL,
    CODE_IS_SCIENCE_URL,
    EMAIL_ADDRESS_UPDATE_ALERT_IMAGE_URL,
    EMAIL_ADDRESS_UPDATE_ALERT_IMAGE_URL_ALT,
    EMAIL_ADDRESS_UPDATE_ALERT_TITLE_ONE,
    EMAIL_ADDRESS_UPDATE_ALERT_TITLE_TWO,
    EMAIL_ADDRESS_UPDATE_ALERT_SUBTITLE,
    "",
    ""
  );
};
