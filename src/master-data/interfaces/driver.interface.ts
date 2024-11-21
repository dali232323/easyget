export interface DriverCompact {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }
  

  export interface Address {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  }
  
  export interface Location {
    latitude: number;
    longitude: number;
  }
  
  export interface DriverLicense {
    licenseNumber: string;
    category: string[]; // Kategorien wie "B", "C"
    expiryDate: string; // ISO-Datum als String
  }
  
  export interface EmploymentDetails {
    hireDate: string; // ISO-Datum als String
    status: string; // z.B. "active"
    position: string; // z.B. "Driver"
    assignedVehicle: string; // Z.B. "Mercedes Sprinter"
  }
  
  export interface EmergencyContact {
    name: string;
    relationship: string; // z.B. "Wife"
    phone: string;
  }
  
  export interface Document {
    _id: string; // ID als String
    type: string; // z.B. "passport" oder "medicalCertificate"
    documentNumber?: string; // Nur für bestimmte Dokumente
    issuedDate?: string; // Optionales Datum
    expiryDate: string; // Ablaufdatum
  }
  
  export interface Driver {
    _id?: string; // Fahrer-ID
    firstName: string;
    lastName: string;
    dateOfBirth: string; // ISO-Datum als String
    phone: string;
    email: string;
    address: Address; // Adresse des Fahrers
    location: Location; // Geokoordinaten
    driverLicense: DriverLicense; // Führerschein-Informationen
    employmentDetails: EmploymentDetails; // Beschäftigungsdetails
    emergencyContact: EmergencyContact; // Notfallkontakt
    documents: Document[]; // Liste der Dokumente
    notes: string; // Zusätzliche Notizen
    createdAt: string; // ISO-Datum als String
    updatedAt: string; // ISO-Datum als String
  }