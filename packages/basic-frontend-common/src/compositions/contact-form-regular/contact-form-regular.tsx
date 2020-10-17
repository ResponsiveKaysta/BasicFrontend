import React, { FC, useEffect, useState } from 'react';
import LocalizedStrings from 'react-localization';
import { ContainerSection } from '../../components';
import {
  ButtonRegular,
  ButtonSize,
  ButtonType,
  Dropdown,
  Input,
  Textarea,
  TextRegular,
  Title,
  TitleAbstract,
} from '../../elements';
import { ThemeType } from '../../typings';
import { FormFieldType, FormFieldValidation } from '../../utils';
import { EmailForm, sendEmail } from './email-form';
import * as json from './localization.json';

type ContactFormRegularProps = {
  theme: ThemeType;
  language: string;
  reasonsDropdown: { value: string; label: string }[];
  pageOrigin: string;
  apiHost: string;
};

export const ContactFormRegular: FC<ContactFormRegularProps> = ({
  language,
  theme,
  reasonsDropdown,
  pageOrigin,
  apiHost,
}) => {
  const localizedStrings = new LocalizedStrings(json);
  localizedStrings.setLanguage(language);

  const [emailFormState, setEmailFormState] = useState<EmailForm>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const optionsDropdown: {
    value: string;
    label: string;
  }[] = reasonsDropdown.map((item: { value: any; label: any }) => {
    return { value: item.value, label: item.label };
  });

  const optionSelected = optionsDropdown.find((opt) => {
    return opt.value === emailFormState.Reason;
  });

  // https://dummyimage.com/
  // https://dummyimage.com/300x60.png&text=dummyimage.com+rocks!

  // https://www.npmjs.com/package/crypto-random-string

  const onSubmit = async () => {
    if (!isFormValid) {
      return;
    }

    emailFormState.Origin = pageOrigin;
    emailFormState.Reason = optionSelected.label;

    const mailSent = await sendEmail(emailFormState, apiHost);
    setIsEmailSent(mailSent);
  };

  const formValidation = () => {
    const isValidForm =
      FormFieldValidation(
        FormFieldType.String,
        emailFormState.FirstName,
        3,
        24
      ) &&
      FormFieldValidation(
        FormFieldType.String,
        emailFormState.SurName,
        3,
        64
      ) &&
      FormFieldValidation(FormFieldType.Email, emailFormState.EmailAddress) &&
      FormFieldValidation(FormFieldType.String, emailFormState.Reason) &&
      FormFieldValidation(FormFieldType.String, emailFormState.Message, 8, 512);
    setIsFormValid(isValidForm);
  };

  useEffect(() => {
    formValidation();
  }, [emailFormState]);

  return (
    <>
      {isEmailSent && (
        <ContainerSection theme={theme}>
          <Title theme={theme} marginBottom paddingTop>
            {localizedStrings.sharedContent.pages.pageContact.sentEmailTitle}
          </Title>
          <TextRegular theme={theme}>
            {localizedStrings.sharedContent.pages.pageContact.sentEmailText}
          </TextRegular>
        </ContainerSection>
      )}
      {!isEmailSent && (
        <form onSubmit={onSubmit}>
          <ContainerSection theme={theme} paddingTop>
            <fieldset className="flex flex-col w-full">
              <TitleAbstract theme={theme} marginBottom marginTop>
                {localizedStrings.sharedContent.pages.pageContact.legendPerson}
              </TitleAbstract>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formFirstname
                    }
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={emailFormState.FirstName}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formFirstnamePlaceholder
                    }
                    onInputChanged={(FirstName: string) =>
                      setEmailFormState({ ...emailFormState, FirstName })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formSurname
                    }
                    type="text"
                    id="surName"
                    name="surName"
                    value={emailFormState.SurName}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formSurnamePlaceholder
                    }
                    onInputChanged={(SurName: string) =>
                      setEmailFormState({ ...emailFormState, SurName })
                    }
                  />
                </div>
              </div>

              <div className="w-full mt-6">
                <Input
                  theme={theme}
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formEmail
                  }
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={emailFormState.EmailAddress}
                  placeholderText={
                    localizedStrings.sharedContent.pages.pageContact
                      .formEmailPlaceholder
                  }
                  onInputChanged={(EmailAddress: string) =>
                    setEmailFormState({ ...emailFormState, EmailAddress })
                  }
                />
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-2/3 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formStreet
                    }
                    type="text"
                    id="street"
                    name="street"
                    value={emailFormState.Street}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formStreetPlaceholder
                    }
                    onInputChanged={(Street: string) =>
                      setEmailFormState({ ...emailFormState, Street })
                    }
                  />
                </div>
                <div className="w-full md:w-1/3 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formNumber
                    }
                    type="number"
                    id="number"
                    name="number"
                    value={emailFormState.Number}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formNumberPlaceholder
                    }
                    onInputChanged={(Number: string) =>
                      setEmailFormState({ ...emailFormState, Number })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-2/3 md:mr-2">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact.formCity
                    }
                    type="text"
                    id="city"
                    name="city"
                    value={emailFormState.City}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formCityPlaceholder
                    }
                    onInputChanged={(City: string) =>
                      setEmailFormState({ ...emailFormState, City })
                    }
                  />
                </div>
                <div className="w-full md:w-1/3 md:ml-2 mt-6 md:mt-0">
                  <Input
                    theme={theme}
                    label={
                      localizedStrings.sharedContent.pages.pageContact
                        .formPostcode
                    }
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={emailFormState.PostCode}
                    placeholderText={
                      localizedStrings.sharedContent.pages.pageContact
                        .formPostcodePlaceholder
                    }
                    onInputChanged={(PostCode: string) =>
                      setEmailFormState({ ...emailFormState, PostCode })
                    }
                  />
                </div>
              </div>
            </fieldset>
          </ContainerSection>

          <ContainerSection theme={theme} marginTop>
            <fieldset className="flex flex-col w-full">
              <TitleAbstract theme={theme} marginBottom={true} marginTop={true}>
                {localizedStrings.sharedContent.pages.pageContact.legendReason}
              </TitleAbstract>
              <div className="w-full">
                <Dropdown
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formReason
                  }
                  id="reason"
                  name="reason"
                  theme={theme}
                  options={optionsDropdown}
                  onSelectionChanged={(Reason: string) =>
                    setEmailFormState({ ...emailFormState, Reason })
                  }
                />
              </div>

              <div className="w-full mt-6">
                <Textarea
                  id="message"
                  name="message"
                  label={
                    localizedStrings.sharedContent.pages.pageContact.formMessage
                  }
                  theme={theme}
                  placeholderText={
                    localizedStrings.sharedContent.pages.pageContact
                      .formMessagePlaceholder
                  }
                  onInputChanged={(Message: string) =>
                    setEmailFormState({ ...emailFormState, Message })
                  }
                />
              </div>
            </fieldset>
          </ContainerSection>

          <ContainerSection theme={theme} marginTop>
            <div className="flex justify-center w-full">
              <ButtonRegular
                onClick={onSubmit}
                text={
                  localizedStrings.sharedContent.pages.pageContact
                    .formButtonSend
                }
                size={ButtonSize.small}
                type={
                  isFormValid ? ButtonType.secondary : ButtonType.transparent
                }
              />
            </div>

            <div className="flex justify-center w-full mt-8 mb-8">empty</div>
          </ContainerSection>
        </form>
      )}
    </>
  );
};
