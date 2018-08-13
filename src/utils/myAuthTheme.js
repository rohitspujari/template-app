import { AmplifyTheme } from 'aws-amplify-react';
import { I18n } from 'aws-amplify';
const authScreenLabels = {
  en: {
    'Sign Up': 'Create new Profile',
    'Sign Up Account': 'Create a new Profile'
  }
};

I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, {
  background: 'orange'
});
const MyFormSection = Object.assign({}, AmplifyTheme.formSection, {
  marginTop: window.screen.height / 4
});
const MyTheme = Object.assign({}, AmplifyTheme, {
  sectionHeader: MySectionHeader,
  formSection: MyFormSection
});

export default MyTheme;
