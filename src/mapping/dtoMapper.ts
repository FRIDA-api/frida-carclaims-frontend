import {
  VehicleDriver,
  Policyholder,
  PersonFormOfAdressEnum,
  PersonTitleEnum,
  VehicleDriverDriverDamagedpartsGraphicEnum,
  VehicleDriverVehicleDrivingAbilityEnum,
  VehicleDriverDamageCausedByEnum,
  Claimsdata,
  ClaimsdataLanguageEnum,
  ClaimsdataInjuredPersonEnum,
  ClaimsdataWitnessExistsEnum,
  PolicyholderInputTaxDeductionEnum,
  PolicyholderComprehensiveInsuranceEnum,
  Witness,
  ClaimsdataHasVehicleDamageEnum,
  VehicleDriverDamagedCarImagesInner,
} from '../api';
import {
  CarclaimsDetailsState,
  DriverOfInsuranceHolderFormState,
  DriverOfOtherInsuranceHolderFormState,
  InjuredPeopleFormState,
  InsuranceHolderFormState,
  MiscellaneousDamagesFormState,
  OtherInsuranceHolderFormState,
  WitnessDetails,
} from '../types';
import { OtherInsuranceHolderForm } from '../components/Form';
import dayjs from 'dayjs';
import { Buffer } from 'buffer';

// Funktion, um alle Dateien in Base64 zu serialisieren
// const serializeFilesToBase64 = async () => {
//   const serializedFiles: Array<{ name: string; base64: string }> = [];

// Iteriere über jede Datei und konvertiere sie in Base64
//   for (const file of files) {
//     const base64 = await fileToBase64(file);
//     serializedFiles.push({
//       name: file.name, // Dateiname
//       base64, // Base64-kodierter Inhalt
//     });
//   }

//   console.log('Serialisierte Dateien:', serializedFiles);
//   return serializedFiles;
// };

// Hilfsfunktion, um eine Datei in Base64 zu konvertieren
// const fileToBase64 = (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file); // Liest die Datei als Data URL (Base64)

//     reader.onload = () => {
//       const base64String = reader.result as string;
//       resolve(base64String.split(',')[1]); // Entferne den Data URL Teil, um nur das Base64 zu erhalten
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };

// Funktion zum Extrahieren des MIME-Typs aus der Bild-URL
const extractMimeType = (url: string): string => {
  const mimeTypeMatch = url.match(/data:(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : 'application/octet-stream';
};

export function mapDTO(): Claimsdata {
  // Log Session Storage Objects
  // console.log('carclaimsDetails');
  // console.log(JSON.parse(sessionStorage.getItem('carclaimsDetails')!));
  // console.log('insurance-holder-a');
  // console.log(JSON.parse(sessionStorage.getItem('insurance-holder-a')!));
  // console.log('driver-a');
  // console.log(JSON.parse(sessionStorage.getItem('driver-a')!));
  // console.log('injuredDetails');
  // console.log(JSON.parse(sessionStorage.getItem('injuredDetails')!));
  // console.log('miscellaneousDamages');
  // console.log(JSON.parse(sessionStorage.getItem('miscellaneousDamages')!));
  // console.log('insurance-holder-b');
  // console.log(JSON.parse(sessionStorage.getItem('insurance-holder-b')!));
  // console.log('driver-b');
  // console.log(JSON.parse(sessionStorage.getItem('driver-b')!));
  // console.log('witness');
  // console.log(JSON.parse(sessionStorage.getItem('witness')!));

  // Objekte instanzieren
  let vehicleDriver: VehicleDriver = {};
  let otherVehicleDriver: VehicleDriver = {};
  let policyholder: Policyholder = {};
  let otherPolicyholder: Policyholder = {};
  let witness: Witness[] = [];
  //  Variablen instanzieren
  let existingWitness: string | undefined;
  let witnessesCount: string | undefined;

  //Driver A
  const driverHolderString = sessionStorage.getItem('driver-a');
  if (driverHolderString) {
    const {
      driverSalutation,
      driverHolderSurName,
      driverHolderName,
      driverHolderPostalCode,
      driverHolderPlace,
      driverHolderStreet,
      driverHolderStreetNr,
      driverHolderTelephone,
      driverHolderDriverLicense,
      driverHolderIssuer,
      driverHolderVisibleDamage,
      driverHolderNotes,
      victimReadyToDrive,
    }: DriverOfInsuranceHolderFormState = JSON.parse(driverHolderString);

    const driverHolderFileUploads = JSON.parse(driverHolderString);
    const {
      imgsURL,
      files
    }: {
      imgsURL: string[];
      files: File & {
        path?: string;
      }[];
    } = driverHolderFileUploads;

    const driverholderImgs: Array<VehicleDriverDamagedCarImagesInner> =
    imgsURL.map((imgsURL, index) => {
      const mimeType = extractMimeType(imgsURL);
      const base64Data = imgsURL.split(',')[1];
      const byteArray = Buffer.from(base64Data, 'base64');
      return {
        image: new Blob([byteArray], { type: mimeType }),
        path: files[index]?.path || 'Hello', // Use the path from files
      };
    });

    vehicleDriver = {
      personalInformation: {
        formOfAdress:
          driverSalutation === 'Herr'
            ? PersonFormOfAdressEnum.Herr
            : PersonFormOfAdressEnum.Frau, //Das Mapping der Enums muss angepasst werden not_specified ?
        title: PersonTitleEnum.Dr, //Existiert nicht im Front End
        lastName: driverHolderSurName,
        firstName: driverHolderName,
        postalCode: driverHolderPostalCode,
        city: driverHolderPlace,
        streetName: driverHolderStreet,
        streetNumber: driverHolderStreetNr,
        phoneNumber: driverHolderTelephone,
        emailAddress: 'bob.brown@example.com', //Existiert nicht im Front End
      },
      driverLicensenumber: driverHolderDriverLicense,
      licenseIssuedBy: driverHolderIssuer,

      damagedCarImages: driverholderImgs,
      damagedWindowImages: [],
      driverDamagedpartsGraphic: [
        VehicleDriverDriverDamagedpartsGraphicEnum.Dach,
      ],

      driverVisibleDamage: driverHolderVisibleDamage,
      driverComments: driverHolderNotes,
      vehicleDrivingAbility:
        victimReadyToDrive === 'Yes'
          ? VehicleDriverVehicleDrivingAbilityEnum.True
          : VehicleDriverVehicleDrivingAbilityEnum.False, //Das Mapping der Enums muss angepasst werden not_specified ?
      damageCausedBy: [VehicleDriverDamageCausedByEnum.Abbiegen], //whichDamageToVictim //Das Mapping der Enums muss angepasst werden not_specified ?
      typeOfWildlife: 'Deer', //Existiert nicht im Front End
      certificateForWildlife: 'wildlife_certificate.pdf', //Existiert nicht im Front End
      garageLocation: 'Garage 1', //Existiert nicht im Front End
    };
  }
  //Driver B
  const driverHolderOtherString = sessionStorage.getItem('driver-b');
  if (driverHolderOtherString) {
    const driverHolderOther: DriverOfOtherInsuranceHolderFormState = JSON.parse(
      driverHolderOtherString
    );
    const {
      otherDriverSalutation,
      otherDriverHolderSurName,
      otherDriverHolderName,
      otherDriverHolderPostalCode,
      otherDriverHolderPlace,
      otherDriverHolderStreet,
      otherDriverHolderStreetNr,
      otherDriverHolderTelephone,
      otherDriverHolderDriverLicense,
      otherDriverHolderIssuer,
      otherDriverHolderVisibleDamage,
      otherDriverHolderNotes,
      otherVictimReadyToDrive,
    } = driverHolderOther;

    const otherDriverHolderFileUploads = JSON.parse(driverHolderOtherString);
    const {
      imgsURL,
      files
    }: {
      imgsURL: string[];
      files: File & {
        path?: string;
      }[];
    } = otherDriverHolderFileUploads;

    const otherDriverholderImgs: Array<VehicleDriverDamagedCarImagesInner> =
      imgsURL.map((imgsURL, index) => {
        const mimeType = extractMimeType(imgsURL);
        const base64Data = imgsURL.split(',')[1];
        const byteArray = Buffer.from(base64Data, 'base64');
        return {
          image: new Blob([byteArray], { type: mimeType }),
          path: files[index]?.path || 'Hello', // Use the path from files
        };
      });

    console.log('otherDriverholderImgs', otherDriverholderImgs);

    otherVehicleDriver = {
      personalInformation: {
        formOfAdress:
          otherDriverSalutation === 'Male'
            ? PersonFormOfAdressEnum.Herr
            : PersonFormOfAdressEnum.Frau, //Das Mapping der Enums muss angepasst werden not_specified ?
        title: PersonTitleEnum.Dr, //Existiert nicht im Front End
        lastName: otherDriverHolderSurName,
        firstName: otherDriverHolderName,
        postalCode: otherDriverHolderPostalCode,
        city: otherDriverHolderPlace,
        streetName: otherDriverHolderStreet,
        streetNumber: otherDriverHolderStreetNr,
        phoneNumber: otherDriverHolderTelephone,
        emailAddress: 'bob.brown@example.com', //Existiert nicht im Front End
      },
      driverLicensenumber: otherDriverHolderDriverLicense,
      licenseIssuedBy: otherDriverHolderIssuer,
      damagedCarImages: otherDriverholderImgs,
      damagedWindowImages: [],
      driverDamagedpartsGraphic: [
        VehicleDriverDriverDamagedpartsGraphicEnum.Dach,
      ],
      driverVisibleDamage: otherDriverHolderVisibleDamage,
      driverComments: otherDriverHolderNotes,
      vehicleDrivingAbility:
        otherVictimReadyToDrive === 'Yes'
          ? VehicleDriverVehicleDrivingAbilityEnum.True
          : VehicleDriverVehicleDrivingAbilityEnum.False, //Das Mapping der Enums muss angepasst werden not_specified ?
      damageCausedBy: [VehicleDriverDamageCausedByEnum.Abbiegen], //driverHolderOther.otherWhichDamageToVictim //Das Mapping der Enums muss angepasst werden not_specified ?
      typeOfWildlife: 'Deer', //Existiert nicht im Front End
      certificateForWildlife: 'wildlife_certificate.pdf', //Existiert nicht im Front End
      garageLocation: 'Garage 1', //Existiert nicht im Front End
    };
  }

  //Policyholder A
  const insuranceHolderString = sessionStorage.getItem('insurance-holder-a');
  if (insuranceHolderString) {
    const insuranceHolder: InsuranceHolderFormState = JSON.parse(
      insuranceHolderString
    );
    const {
      insuranceHolderSurName,
      insuranceHolderName,
      insuranceHolderPostalCode,
      insuranceHolderPlace,
      insuranceHolderStreet,
      insuranceHolderStreetNr,
      insuranceHolderTelephone,
      insuranceHolderEmail,
      carBrand,
      carModel,
      licenseNumber,
      insuranceCompany,
      insuranceID,
      chassisNr,
      currentKM,
      greenCardNr,
      validDateGreenCard,
      allRiskInsurance,
    } = insuranceHolder;

    policyholder = {
      personalInformation: {
        formOfAdress: PersonFormOfAdressEnum.Frau, //Das Mapping der Enums muss angepasst werden not_specified ?
        title: PersonTitleEnum.Dr, //Existiert nicht im Front End
        lastName: insuranceHolderSurName,
        firstName: insuranceHolderName,
        postalCode: insuranceHolderPostalCode,
        city: insuranceHolderPlace,
        streetName: insuranceHolderStreet,
        streetNumber: insuranceHolderStreetNr,
        phoneNumber: insuranceHolderTelephone,
        emailAddress: insuranceHolderEmail,
      },
      inputTaxDeduction: PolicyholderInputTaxDeductionEnum.False, // Das Mapping der Enums muss angepasst werden not_specified ?
      vehicleMake: carBrand,
      vehicleType: carModel,
      vehicleReg: licenseNumber,
      insuranceCompany: insuranceCompany,
      policyNumber: insuranceID,
      vin: chassisNr,
      currentMileage: currentKM ? parseInt(currentKM) : undefined,
      greencardNumber: greenCardNr,
      greencardExpirydate: validDateGreenCard
        ? dayjs.isDayjs(validDateGreenCard)
          ? validDateGreenCard.toDate()
          : undefined
        : undefined,
      comprehensiveInsurance:
        allRiskInsurance === 'Ja'
          ? PolicyholderComprehensiveInsuranceEnum.True
          : PolicyholderComprehensiveInsuranceEnum.False, // Das Mapping der Enums muss angepasst werden not_specified ?
    };
  }
  //Policyholder B
  const otherInsuranceHolderString =
    sessionStorage.getItem('insurance-holder-b');
  if (otherInsuranceHolderString) {
    const otherInsuranceHolder: OtherInsuranceHolderFormState = JSON.parse(
      otherInsuranceHolderString
    );
    const {
      otherInsuranceHolderSurName,
      otherInsuranceHolderName,
      otherInsuranceHolderPostalCode,
      otherInsuranceHolderPlace,
      otherInsuranceHolderStreet,
      otherInsuranceHolderStreetNr,
      otherInsuranceHolderTelephone,
      otherInsuranceHolderEmail,
      otherCarBrand,
      otherCarModel,
      otherLicenseNumber,
      otherInsuranceCompany,
      otherInsuranceID,
      otherChassisNr,
      otherCurrentKM,
      otherGreenCardNr,
      otherValidDateGreenCard,
      otherAllRiskInsurance,
    } = otherInsuranceHolder;

    otherPolicyholder = {
      personalInformation: {
        formOfAdress: PersonFormOfAdressEnum.Frau, //Das Mapping der Enums muss angepasst werden not_specified ?
        title: PersonTitleEnum.Dr, //Existiert nicht im Front End
        lastName: otherInsuranceHolderSurName,
        firstName: otherInsuranceHolderName,
        postalCode: otherInsuranceHolderPostalCode,
        city: otherInsuranceHolderPlace,
        streetName: otherInsuranceHolderStreet,
        streetNumber: otherInsuranceHolderStreetNr,
        phoneNumber: otherInsuranceHolderTelephone,
        emailAddress: otherInsuranceHolderEmail,
      },
      inputTaxDeduction: PolicyholderInputTaxDeductionEnum.False, // Das Mapping der Enums muss angepasst werden not_specified ?
      vehicleMake: otherCarBrand,
      vehicleType: otherCarModel,
      vehicleReg: otherLicenseNumber,
      insuranceCompany: otherInsuranceCompany,
      policyNumber: otherInsuranceID,
      vin: otherChassisNr,
      currentMileage: otherCurrentKM ? parseInt(otherCurrentKM) : undefined,
      greencardNumber: otherGreenCardNr,
      greencardExpirydate: otherValidDateGreenCard
        ? dayjs.isDayjs(otherValidDateGreenCard)
          ? otherValidDateGreenCard.toDate()
          : undefined
        : undefined,
      comprehensiveInsurance:
        otherAllRiskInsurance === 'Ja'
          ? PolicyholderComprehensiveInsuranceEnum.True
          : PolicyholderComprehensiveInsuranceEnum.False, // Das Mapping der Enums muss angepasst werden not_specified ?
    };
  }

  //Witness
  const witnessesString = sessionStorage.getItem('witness');
  if (witnessesString) {
    const witnesses: WitnessDetails[] = JSON.parse(witnessesString).witnesses;
    existingWitness = JSON.parse(witnessesString).existingWitness;
    witnessesCount = JSON.parse(witnessesString).witnessesCount;

    console.log(JSON.parse(witnessesString).witnesses);
    console.log(witnesses[0]);
    witness = witnesses.map((witnesses) => {
      return {
        personalInformation: {
          formOfAdress:
            witnesses.salutation === 'Male'
              ? PersonFormOfAdressEnum.Herr
              : PersonFormOfAdressEnum.Frau, //Das Mapping der Enums muss angepasst werden not_specified ?,
          title: PersonTitleEnum.Dr,
          lastName: witnesses.surName,
          firstName: witnesses.lastName,
          postalCode: witnesses.postalCode,
          city: witnesses.place,
          streetName: witnesses.street,
          streetNumber: witnesses.houseNr,
          phoneNumber: witnesses.telephone,
          emailAddress: witnesses.email,
        },
      };
    });
  }

  //CarclaimsDetailsState
  let carclaimsDetails: CarclaimsDetailsState = {
    language: '',
    accidentDate: null,
    accidentTime: null,
    street: '',
    postalCode: '',
    place: '',
    houseNr: '',
    accidentDetails: '',
    processingNr: '',
  };

  const {
    language,
    accidentDate,
    accidentTime,
    street,
    postalCode,
    place,
    houseNr,
    accidentDetails,
    processingNr,
  } = carclaimsDetails;

  const carclaimsDetailsString = sessionStorage.getItem('carclaimsDetails');
  if (carclaimsDetailsString) {
    carclaimsDetails = JSON.parse(carclaimsDetailsString);
  }
  const carclaimsDetails2: CarclaimsDetailsState = JSON.parse(
    carclaimsDetailsString?.toString()!
  );

  // InjuredDetailsString
  let injuredDetails: InjuredPeopleFormState = {
    injured: '',
    injuredCount: undefined,
  };

  const injuredDetailsString = sessionStorage.getItem('injuredDetails');
  if (injuredDetailsString) {
    injuredDetails = JSON.parse(injuredDetailsString);
    console.log(injuredDetails);
  }

  // MiscellaneousDamages
  let miscellaneousDamagesDetails: MiscellaneousDamagesFormState = {
    otherDamages: null,
    damages: '',
  };

  const miscellaneousDamagesString = sessionStorage.getItem(
    'miscellaneousDamages'
  );
  if (miscellaneousDamagesString) {
    miscellaneousDamagesDetails = JSON.parse(miscellaneousDamagesString);
  }

  //Body des API Requests
  const claimsdata: Claimsdata = {
    language:
      language === 'DE' ? ClaimsdataLanguageEnum.De : ClaimsdataLanguageEnum.En, //Das Mapping der Enums muss angepasst werden not_specified ?
    accidentDate: accidentDate
      ? dayjs.isDayjs(accidentDate)
        ? accidentDate.toDate()
        : undefined
      : undefined,
    accidentTime: accidentTime
      ? dayjs.isDayjs(accidentTime)
        ? accidentTime.format()
        : undefined
      : undefined,
    accidentPostalCode: postalCode,
    accidentCity: place,
    accidentStreetName: street,
    accidentStreetNumber: houseNr,
    accidentDescription: accidentDetails,
    accidentPoliceNumber: processingNr,

    hasVehicleDamage: miscellaneousDamagesDetails.otherDamages
      ? ClaimsdataHasVehicleDamageEnum.True
      : ClaimsdataHasVehicleDamageEnum.False,
    vehicleDamageDescription: miscellaneousDamagesDetails.damages,

    injuredPerson: injuredDetails.injured
      ? ClaimsdataInjuredPersonEnum.True
      : ClaimsdataInjuredPersonEnum.False,
    injuredPersonNumber: injuredDetails.injuredCount?.toString(),

    witnessExists:
      existingWitness === 'Yes'
        ? ClaimsdataWitnessExistsEnum.True
        : ClaimsdataWitnessExistsEnum.False, //Das Mapping der Enums muss angepasst werden not_specified ?
    witnessNumber: witnessesCount?.toString(),
    witness: witness,

    vehicleDriver: vehicleDriver,
    otherVehicleDriver: otherVehicleDriver,
    policyholder: policyholder,
    otherPolicyholder: otherPolicyholder,
  };

  return claimsdata;
}
