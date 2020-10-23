import React, { FC } from 'react';
import { ButtonRegular, ButtonSize, ButtonType, Input } from '../../elements';
import { Error } from '../../elements/typography';
import { ThemeType } from '../../typings';

// https://dummyimage.com/
// https://dummyimage.com/300x60.png&text=dummyimage.com+rocks!
// https://www.npmjs.com/package/crypto-random-string

type ImageCaptchaProps = {
  value: string;
  theme: ThemeType;
  captchaInput: string;
  onCaptchaChange: (captcha: string) => void;
  onCaptchaRefresh: () => void;
  error?: boolean;
};

export const ImageCaptcha: FC<ImageCaptchaProps> = ({
  value,
  theme,
  captchaInput,
  onCaptchaChange,
  onCaptchaRefresh,
  error = false,
}) => {
  const imageUrl = `https://dummyimage.com/halfban&text=${value}`;
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 md:mr-2">
          <div className="w-full">
            <Input
              theme={theme}
              label="Captcha Input"
              type="text"
              id="captchaInput"
              name="captchaInput"
              value={captchaInput}
              placeholderText="Captcha Placeholder"
              onInputChanged={(captcha: string) => onCaptchaChange(captcha)}
            />
            <div>
              {error && <Error theme={theme}>Captcha does not match!</Error>}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between md:w-1/2 md:ml-2 mt-2 md:mt-0">
          <img src={imageUrl} width="234" height="60" />
          <div className="flex items-center ml-2">
            <ButtonRegular
              text="Refresh"
              size={ButtonSize.small}
              type={ButtonType.primary}
              onClick={onCaptchaRefresh}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
