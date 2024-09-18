/* tslint:disable */
/* eslint-disable */
/**
 * FRIDA Car Claims Data Schema
 * Die FRIDA Schaden API - ermöglicht es Nutzer:innen im Schadenfall die wichtigsten Versicherungs- und Unfalldaten über eine Schadenplattform direkt an den Versicherer zu übertragen und den Schaden damit offiziel zu melden.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: floneuss99@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Witness } from './Witness';
import {
    WitnessFromJSON,
    WitnessFromJSONTyped,
    WitnessToJSON,
} from './Witness';
import type { Policyholder } from './Policyholder';
import {
    PolicyholderFromJSON,
    PolicyholderFromJSONTyped,
    PolicyholderToJSON,
} from './Policyholder';
import type { VehicleDriver } from './VehicleDriver';
import {
    VehicleDriverFromJSON,
    VehicleDriverFromJSONTyped,
    VehicleDriverToJSON,
} from './VehicleDriver';

/**
 * Holds all information required for submitting a `Comprehensive Claim` to the insurance company.
 * @export
 * @interface Claimsdata
 */
export interface Claimsdata {
    /**
     * 
     * @type {string}
     * @memberof Claimsdata
     */
    language?: ClaimsdataLanguageEnum;
    /**
     * Unfalldatum ohne Zeit
     * @type {Date}
     * @memberof Claimsdata
     */
    accidentDate?: Date;
    /**
     * Unfall Zeit
     * @type {string}
     * @memberof Claimsdata
     */
    accidentTime?: string;
    /**
     * 50°56’28.8″N 6°57’30.0″E Der erste Wert liegt zwischen -90 und 90, die Längengradangabe zwischen -180 und 180. // Nutzt Du die Bogenmaßangaben, muss am Schluss ein „W“ für „West“ oder „E“ für „East“ stehen
     * @type {string}
     * @memberof Claimsdata
     */
    accidentCoordinates?: string;
    /**
     * PLZ
     * @type {string}
     * @memberof Claimsdata
     */
    accidentPostalCode?: string;
    /**
     * Ort
     * @type {string}
     * @memberof Claimsdata
     */
    accidentCity?: string;
    /**
     * Straße
     * @type {string}
     * @memberof Claimsdata
     */
    accidentStreetName?: string;
    /**
     * Hausnummer
     * @type {string}
     * @memberof Claimsdata
     */
    accidentStreetNumber?: string;
    /**
     * Unfallbeschreibung
     * @type {string}
     * @memberof Claimsdata
     */
    accidentDescription?: string;
    /**
     * Unfallnummer der Polizei
     * @type {string}
     * @memberof Claimsdata
     */
    accidentPoliceNumber?: string;
    /**
     * weitere Sachschäden ja/nein
     * @type {string}
     * @memberof Claimsdata
     */
    propertyDamage: ClaimsdataPropertyDamageEnum;
    /**
     * Beschreibung Sachschäden
     * @type {string}
     * @memberof Claimsdata
     */
    propertyDamageDescription?: string;
    /**
     * Verletzte Person ja/nein
     * @type {string}
     * @memberof Claimsdata
     */
    injuredPerson: ClaimsdataInjuredPersonEnum;
    /**
     * Anzahl verletzte Personen
     * @type {string}
     * @memberof Claimsdata
     */
    injuredPersonNumber?: string;
    /**
     * Zeuge ja/nein
     * @type {string}
     * @memberof Claimsdata
     */
    witnessExists: ClaimsdataWitnessExistsEnum;
    /**
     * Anzahl Zeugen
     * @type {string}
     * @memberof Claimsdata
     */
    witnessNumber?: string;
    /**
     * 
     * @type {Array<Witness>}
     * @memberof Claimsdata
     */
    witness?: Array<Witness>;
    /**
     * 
     * @type {VehicleDriver}
     * @memberof Claimsdata
     */
    vehicleDriver?: VehicleDriver;
    /**
     * 
     * @type {VehicleDriver}
     * @memberof Claimsdata
     */
    otherVehicleDriver?: VehicleDriver;
    /**
     * 
     * @type {Policyholder}
     * @memberof Claimsdata
     */
    policyholder: Policyholder;
    /**
     * 
     * @type {Policyholder}
     * @memberof Claimsdata
     */
    otherPolicyholder: Policyholder;
}


/**
 * @export
 */
export const ClaimsdataLanguageEnum = {
    De: 'DE',
    En: 'EN',
    Fr: 'FR',
    Es: 'ES',
    It: 'IT',
    Nl: 'NL',
    Pl: 'PL'
} as const;
export type ClaimsdataLanguageEnum = typeof ClaimsdataLanguageEnum[keyof typeof ClaimsdataLanguageEnum];

/**
 * @export
 */
export const ClaimsdataPropertyDamageEnum = {
    NotSpecified: 'not_specified',
    False: 'false',
    True: 'true'
} as const;
export type ClaimsdataPropertyDamageEnum = typeof ClaimsdataPropertyDamageEnum[keyof typeof ClaimsdataPropertyDamageEnum];

/**
 * @export
 */
export const ClaimsdataInjuredPersonEnum = {
    NotSpecified: 'not_specified',
    False: 'false',
    True: 'true'
} as const;
export type ClaimsdataInjuredPersonEnum = typeof ClaimsdataInjuredPersonEnum[keyof typeof ClaimsdataInjuredPersonEnum];

/**
 * @export
 */
export const ClaimsdataWitnessExistsEnum = {
    NotSpecified: 'not_specified',
    False: 'false',
    True: 'true'
} as const;
export type ClaimsdataWitnessExistsEnum = typeof ClaimsdataWitnessExistsEnum[keyof typeof ClaimsdataWitnessExistsEnum];


/**
 * Check if a given object implements the Claimsdata interface.
 */
export function instanceOfClaimsdata(value: object): value is Claimsdata {
    if (!('propertyDamage' in value) || value['propertyDamage'] === undefined) return false;
    if (!('injuredPerson' in value) || value['injuredPerson'] === undefined) return false;
    if (!('witnessExists' in value) || value['witnessExists'] === undefined) return false;
    if (!('policyholder' in value) || value['policyholder'] === undefined) return false;
    if (!('otherPolicyholder' in value) || value['otherPolicyholder'] === undefined) return false;
    return true;
}

export function ClaimsdataFromJSON(json: any): Claimsdata {
    return ClaimsdataFromJSONTyped(json, false);
}

export function ClaimsdataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Claimsdata {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : json['language'],
        'accidentDate': json['accidentDate'] == null ? undefined : (new Date(json['accidentDate'])),
        'accidentTime': json['accidentTime'] == null ? undefined : json['accidentTime'],
        'accidentCoordinates': json['accidentCoordinates'] == null ? undefined : json['accidentCoordinates'],
        'accidentPostalCode': json['accidentPostalCode'] == null ? undefined : json['accidentPostalCode'],
        'accidentCity': json['accidentCity'] == null ? undefined : json['accidentCity'],
        'accidentStreetName': json['accidentStreetName'] == null ? undefined : json['accidentStreetName'],
        'accidentStreetNumber': json['accidentStreetNumber'] == null ? undefined : json['accidentStreetNumber'],
        'accidentDescription': json['accidentDescription'] == null ? undefined : json['accidentDescription'],
        'accidentPoliceNumber': json['accidentPoliceNumber'] == null ? undefined : json['accidentPoliceNumber'],
        'propertyDamage': json['propertyDamage'],
        'propertyDamageDescription': json['propertyDamageDescription'] == null ? undefined : json['propertyDamageDescription'],
        'injuredPerson': json['injuredPerson'],
        'injuredPersonNumber': json['injuredPersonNumber'] == null ? undefined : json['injuredPersonNumber'],
        'witnessExists': json['witnessExists'],
        'witnessNumber': json['witnessNumber'] == null ? undefined : json['witnessNumber'],
        'witness': json['witness'] == null ? undefined : ((json['witness'] as Array<any>).map(WitnessFromJSON)),
        'vehicleDriver': json['vehicleDriver'] == null ? undefined : VehicleDriverFromJSON(json['vehicleDriver']),
        'otherVehicleDriver': json['otherVehicleDriver'] == null ? undefined : VehicleDriverFromJSON(json['otherVehicleDriver']),
        'policyholder': PolicyholderFromJSON(json['policyholder']),
        'otherPolicyholder': PolicyholderFromJSON(json['otherPolicyholder']),
    };
}

export function ClaimsdataToJSON(value?: Claimsdata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'language': value['language'],
        'accidentDate': value['accidentDate'] == null ? undefined : ((value['accidentDate']).toISOString().substring(0,10)),
        'accidentTime': value['accidentTime'],
        'accidentCoordinates': value['accidentCoordinates'],
        'accidentPostalCode': value['accidentPostalCode'],
        'accidentCity': value['accidentCity'],
        'accidentStreetName': value['accidentStreetName'],
        'accidentStreetNumber': value['accidentStreetNumber'],
        'accidentDescription': value['accidentDescription'],
        'accidentPoliceNumber': value['accidentPoliceNumber'],
        'propertyDamage': value['propertyDamage'],
        'propertyDamageDescription': value['propertyDamageDescription'],
        'injuredPerson': value['injuredPerson'],
        'injuredPersonNumber': value['injuredPersonNumber'],
        'witnessExists': value['witnessExists'],
        'witnessNumber': value['witnessNumber'],
        'witness': value['witness'] == null ? undefined : ((value['witness'] as Array<any>).map(WitnessToJSON)),
        'vehicleDriver': VehicleDriverToJSON(value['vehicleDriver']),
        'otherVehicleDriver': VehicleDriverToJSON(value['otherVehicleDriver']),
        'policyholder': PolicyholderToJSON(value['policyholder']),
        'otherPolicyholder': PolicyholderToJSON(value['otherPolicyholder']),
    };
}

