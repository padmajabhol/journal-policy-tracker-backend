import { emailTemplateWithLink } from "./emailTemplate";
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
} from "./emailConstants";

export const accountVerificationEmail = (accountVerificationLink) => {
  return emailTemplateWithLink(
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
  return emailTemplateWithLink(
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
