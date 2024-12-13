import {mergeDefaultConfig} from '@oracle-cx-commerce/react-widgets/config';
import * as resourceBundle from '@oracle-cx-commerce/resources';
import {buildResources} from '@oracle-cx-commerce/resources/utils';

const widgetResourceKeys = [
  'actionCancel',
  'alertTechnicalProblemTryAgain',
  'buttonSaveAndContinue',
  'closeLinkAltText',
  'headingAddBillingAddress',
  'headingBillingAddress',
  'headingEditBillingAddress',
  'headingPayment',
  'labelAddANewAddress',
  'labelAddressBook',
  'labelCancel',
  'labelCardCVV',
  'labelCardNumber',
  'labelCompanyName',
  'labelCountry',
  'labelCreditCard',
  'labelDefaultAddress',
  'labelDefaultBillingAddress',
  'labelDefaultShippingAddress',
  'labelEditAddress',
  'labelError',
  'labelExpiryDate',
  'labelExpiryMonth',
  'labelExpiryYear',
  'labelFirstName',
  'labelLastName',
  'labelNameOnCard',
  'labelNickName',
  'labelNoAccountAddressesAvailable',
  'labelNoDefaultBillingAddressAvailable',
  'labelNoDefaultAddressesAvailable',
  'labelNoInheritedAddressesAvailable',
  'labelNoProfileAddressesAvailable',
  'labelOpenAddressBook',
  'labelPhoneNumberOptional',
  'labelSaveAsANewAccountAddress',
  'labelSaveAsANewProfileAddress',
  'messageEmptyCart',
  'messageFailed',
  'textAccountAddressBook',
  'textAddressesForThisAccount',
  'textAllFieldsRequired',
  'textDefaultAddresses',
  'textEnterABillingAddress',
  'textInheritedAddresses',
  'textLoading',
  'textLoadMoreAccountAddress',
  'textLoadMoreInheritedAddress',
  'textLoadMoreProfileAddress',
  'textOpenAddressBookAndChooseBillingAddress',
  'textProfileAddresses',
  'textRequiredField',
  'textInvalidField',
  'textTotal',
  'textUseThisAddress',
  'labelSavedCard',
  'labelSaveCardToProfile',
  'labelState',
  'labelStreetAddress',
  'labelTownCity',
  'labelUseAnotherCard',
  'labelZipCode',
  'textFieldInvalid',
  'textExpiryDate'
];

export default {
  name: 'IsvPaymentMethod',
  description: 'Description of widget IsvPaymentMethod',
  author: 'ISV Payment',
  fetchers: ['fetchCardTypes', 'fetchBillingCountries'],
  actions: ['listProfileSavedCardsForCurrentSite', 'getOrganizationDefaultAddresses', 'notify'],
  requiresContext: ['payment_context'],
  pageTypes: ['checkout-payment', 'pending-payment'],
  availableToAllPages: false,
  resources: buildResources(resourceBundle, widgetResourceKeys),
};