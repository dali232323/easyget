
// export interface Driver {
//     _id?: string; // Fahrer-ID
//     firstName: string;
//     lastName: string;
//     dateOfBirth: string; 
//     phone: string;
//     email: string;
//     address: Address; 
//     location: Location; 
//     driverLicense: DriverLicense; 
//     employmentDetails: EmploymentDetails; 
//     emergencyContact: EmergencyContact; 
//     documents: Document[]; 
//     notes: string; 
//     createdAt: string; 
//     updatedAt: string; 
//   }


export interface TruckInfo{
make:string, 
capacity:Capacity
}


export interface Capacity{
    weightInTons:number,
    volumeInCubicMeters:number
}
