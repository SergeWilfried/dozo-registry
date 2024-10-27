// Enum for health status and cattle status in French (single-word values)
export enum HealthStatus {
    Healthy = 'Sain',
    Sick = 'Malade',
  }
  
  export enum CattleStatus {
    Breeding = 'Reproduction',
    Pregnant = 'Enceinte',
    Calving = 'Vêlage',
    Weaning = 'Sevrage',
  }
  
  // Enum for types of treatments in French (single-word values)
  export enum TreatmentType {
    Deworming = 'Vermifuge',
    HoofTrimming = 'Parage',
    Antibiotic = 'Antibiotique',
  }
  
  // Enum for vaccination types in French (unchanged, as these are abbreviations)
  export enum VaccineType {
    BVD = 'BVD',
    IBR = 'IBR',
  }
  
  // Owner Interface
  export interface Owner {
    id: string;
    name: string;
    contact: string;
    farmId: string;
  }
  
  // Cattle Interface
  export interface Cattle {
    id: string;
    breed: string;
    age: number;
    health: HealthStatus;
    lastCheckup: Date;
    dateOfBirth: Date;
    weight: number;
    farmId: string;
    forSale: boolean;
    marketValue: number;
    status: CattleStatus;
    imageUrl?: string;
    ownerId: string;
    description?: string;
  }
  
  // Farm Interface
  export interface Farm {
    id: string;
    name: string;
    ownerName: string;
    location: {
      longitude: number;
      latitude: number;
    };
  }
  
  // Practitioners Interface
  export interface Practitioner {
    id: string;
    name: string;
    contact: string;
    location: string;
  }
  
  // Vaccination event interface
  export interface VaccinationEvent {
    date: Date;
    vaccine: VaccineType;
    nextDue: Date;
    practitionerId: string;
    createdAt: Date;
  }
  
  // Treatment event interface
  export interface TreatmentEvent {
    date: Date;
    type: TreatmentType;
    notes: string;
  }
  
  // Health Record Interface
  export interface HealthRecord {
    id: string;
    cattleId: string;
    ownerId: string;
    healthStatus: HealthStatus;
    vaccinationHistory: VaccinationEvent[];
    treatmentHistory: TreatmentEvent[];
    lastVaccinationDate: Date;
    nextVaccinationDue: Date;
    practitionerId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export const owners: Owner[] = [
    {
      id: "001",
      name: "Jean Dupont",
      contact: "+22612345678",
      farmId: "001",
    },

  ];
  
  // Example Cattle Data with linked Owner
  export const cattleData: Cattle[] = [
    {
      id: "001",
      breed: "Angus",
      age: 3,
      health: HealthStatus.Healthy,
      lastCheckup: new Date("2023-09-15"),
      dateOfBirth: new Date("2020-09-15"),
      weight: 500,
      farmId: "001",
      forSale: false,
      marketValue: 1500,
      status: CattleStatus.Breeding,
      ownerId: "001",  // Link to Owner Jean Dupont
    },

  ];
  
  export const medicalRecords: HealthRecord[] = [
    {
      id: "001",
      cattleId: "001",
      ownerId: "001",  // Link to Owner Jean Dupont
      healthStatus: HealthStatus.Healthy,
      vaccinationHistory: [
        { date: new Date("2023-01-10"), vaccine: VaccineType.BVD, nextDue: new Date("2024-01-10"), practitionerId: "001", createdAt: new Date("2023-01-10") }
      ],
      treatmentHistory: [
        { date: new Date("2021-03-10"), type: TreatmentType.Deworming, notes: "Routine de vermifuge" }
      ],
      lastVaccinationDate: new Date("2023-06-15"),
      nextVaccinationDue: new Date("2024-01-10"),
      practitionerId: "001",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  
  export const practitioners: Practitioner[] = [
    {
      id: "001",
      name: "Adamou Kabore",
      contact: "+22656284997",
      location: "Niamye",
    },
  ];
  