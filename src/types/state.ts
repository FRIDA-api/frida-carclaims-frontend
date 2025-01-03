import { Dayjs } from 'dayjs';

export interface FormState {
  language: string;
  accidentDate: Dayjs | null;
  accidentTime: Dayjs | null;
  street?: string;
  postalCode?: string;
  place?: string;
  houseNr?: string;
  accidentDetails?: string;
  injured?: boolean | string | null;
  injuredLastName?: string;
  injuredSurName?: string;
  injuredStreet?: string;
  injuredHouseNr?: string;
  injuredPostalCode?: string;
  injuredPlace?: string;
  otherDamages?: boolean | string | null;
  existingWitness?: boolean | string | null;
  witnessSalutation?: '' | 'Herr' | 'Frau' | null;
  witnessLastName?: string;
  witnessSurName?: string;
  witnessStreet?: string;
  witnessHouseNr?: string;
  witnessPostalCode?: string;
  witnessPlace?: string;
  witnessEmail?: string;
  witnessTelephone?: string;
  insuranceHolderSalutation?: '' | 'Herr' | 'Frau' | null;
  insuranceHolderName?: string;
  insuranceHolderSurName?: string;
  insuranceHolderStreet?: string;
  insuranceHolderStreetNr?: string;
  insuranceHolderPostalCode?: string;
  insuranceHolderPlace?: string;
  insuranceHolderTelephone?: string;
  insuranceHolderEmail?: string;
  otherInsuranceHolderSalutation?: '' | 'Herr' | 'Frau' | null;
  otherInsuranceHolderName?: string;
  otherInsuranceHolderSurName?: string;
  otherInsuranceHolderStreet?: string;
  otherInsuranceHolderStreetNr?: string;
  otherInsuranceHolderPostalCode?: string;
  otherInsuranceHolderPlace?: string;
  otherInsuranceHolderTelephone?: string;
  otherInsuranceHolderEmail?: string;
  allRiskInsurance?: boolean | string | '0' | '1';
  otherPretaxes?: boolean | string | '0' | '1';
  otherCarBrand?: string;
  otherCarModel?: string;
  otherLicenseNumber?: string;
  otherInsuranceCompany?: string;
  otherInsuranceID?: string;
  otherChassisNr?: string;
  otherCurrentKM?: string;
  otherGreenCardNr?: string;
  otherValidDateGreenCard?: Dayjs | null;
  otherAllRiskInsurance?: boolean | string | '0' | '1';
  pretaxes?: boolean | string | '0' | '1';
  carBrand?: string;
  carModel?: string;
  licenseNumber?: string;
  insuranceCompany?: string;
  insuranceID?: string;
  chassisNr?: string;
  currentKM?: string;
  greenCardNr?: string;
  validDateGreenCard?: Dayjs | null;
  driverSalutation?: string | 'Herr' | 'Frau' | '';
  driverHolderName?: string;
  driverHolderSurName?: string;
  driverHolderStreet?: string;
  driverHolderStreetNr?: string;
  driverHolderPostalCode?: string;
  driverHolderPlace?: string;
  driverHolderTelephone?: string;
  driverHolderDriverLicense?: string;
  driverHolderIssuer?: string;
  driverHolderFileUploads?: File[] | null;
  driverHolderDamagePlace?: string;
  driverHolderVisibleDamage?: string;
  driverHolderNotes?: string;
  victimReadyToDrive?: 'Yes' | 'No';
  whichDamageToVictim?: number;
  otherDriverSalutation?: string | 'Herr' | 'Frau' | '';
  otherDriverHolderName?: string;
  otherDriverHolderSurName?: string;
  otherDriverHolderStreet?: string;
  otherDriverHolderStreetNr?: string;
  otherDriverHolderPostalCode?: string;
  otherDriverHolderPlace?: string;
  otherDriverHolderTelephone?: string;
  otherDriverHolderDriverLicense?: string;
  otherDriverHolderIssuer?: string;
  otherDriverHolderFileUploads?: File[] | null;
  otherDriverHolderDamagePlace?: string;
  otherDriverHolderVisibleDamage?: string;
  otherDriverHolderNotes?: string;
  otherVictimReadyToDrive?: 'Yes' | 'No' | '';
  otherWhichDamageToVictim?: number;
}

export interface CarclaimsDetailsState {
  language: string;
  accidentDate: Dayjs | null;
  accidentTime: Dayjs | null;
  street?: string;
  postalCode?: string;
  place?: string;
  houseNr?: string;
  accidentDetails?: string;
  processingNr?: string;
}

export interface InjuredPeopleFormState {
  injured?: boolean | string | null;
  injuredCount?: number;
}

export interface MiscellaneousDamagesFormState {
  otherDamages?: boolean | string | null;
  damages?: string;
}

export interface InsuranceHolderFormState {
  insuranceHolderSalutation?: '' | 'Herr' | 'Frau' | null;
  insuranceHolderName?: string;
  insuranceHolderSurName?: string;
  insuranceHolderStreet?: string;
  insuranceHolderStreetNr?: string;
  insuranceHolderPostalCode?: string;
  insuranceHolderPlace?: string;
  insuranceHolderTelephone?: string;
  insuranceHolderEmail?: string;
  pretaxes?: boolean | string | '0' | '1';
  carBrand?: string;
  carModel?: string;
  licenseNumber?: string;
  insuranceCompany?: string;
  insuranceID?: string;
  chassisNr?: string;
  currentKM?: string;
  greenCardNr?: string;
  validDateGreenCard?: Dayjs | null;
  allRiskInsurance?: boolean | string | '0' | '1';
}

export interface OtherInsuranceHolderFormState {
  otherInsuranceHolderSalutation?: '' | 'Herr' | 'Frau' | null;
  otherInsuranceHolderName?: string;
  otherInsuranceHolderSurName?: string;
  otherInsuranceHolderStreet?: string;
  otherInsuranceHolderStreetNr?: string;
  otherInsuranceHolderPostalCode?: string;
  otherInsuranceHolderPlace?: string;
  otherInsuranceHolderTelephone?: string;
  otherInsuranceHolderEmail?: string;
  allRiskInsurance?: boolean | string | '0' | '1';
  otherPretaxes?: boolean | string | '0' | '1';
  otherCarBrand?: string;
  otherCarModel?: string;
  otherLicenseNumber?: string;
  otherInsuranceCompany?: string;
  otherInsuranceID?: string;
  otherChassisNr?: string;
  otherCurrentKM?: string;
  otherGreenCardNr?: string;
  otherValidDateGreenCard?: Dayjs | null;
  otherAllRiskInsurance?: boolean | string | '0' | '1';
}

export interface DriverOfInsuranceHolderFormState {
  driverSalutation?: string | 'Herr' | 'Frau' | '';
  driverHolderName?: string;
  driverHolderSurName?: string;
  driverHolderStreet?: string;
  driverHolderStreetNr?: string;
  driverHolderPostalCode?: string;
  driverHolderPlace?: string;
  driverHolderTelephone?: string;
  driverHolderDriverLicense?: string;
  driverHolderIssuer?: string;
  driverHolderFileUploads?: File[] | null;
  driverHolderDamagePlace?: string;
  driverHolderVisibleDamage?: string;
  driverHolderNotes?: string;
  victimReadyToDrive?: 'Yes' | 'No';
  whichDamageToVictim?: number;
}

export interface DriverOfOtherInsuranceHolderFormState {
  otherDriverSalutation?: 'Herr' | 'Frau' | '';
  otherDriverHolderName?: string;
  otherDriverHolderSurName?: string;
  otherDriverHolderStreet?: string;
  otherDriverHolderStreetNr?: string;
  otherDriverHolderPostalCode?: string;
  otherDriverHolderPlace?: string;
  otherDriverHolderTelephone?: string;
  otherDriverHolderDriverLicense?: string;
  otherDriverHolderIssuer?: string;
  otherDriverHolderFileUploads?: File[] | null;
  otherDriverHolderDamagePlace?: string;
  otherDriverHolderVisibleDamage?: string;
  otherDriverHolderNotes?: string;
  otherVictimReadyToDrive?: 'Yes' | 'No' | '';
  otherWhichDamageToVictim?: number;
}

export interface WitnessesFormState {
  existingWitness?: boolean | string | null;
  witnessesCount?: number;
  witnesses?: WitnessDetails[];
}

export interface WitnessDetails {
  salutation?: string;
  surName?: string;
  lastName?: string;
  street?: string;
  houseNr?: string;
  postalCode?: string;
  place?: string;
  telephone?: string;
  email?: string;
}
