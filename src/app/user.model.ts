export interface User {
    id: number;
    aboutYou: string;
    age: number;
    termsAndCondition: boolean;
    dob: string;
    email: string;
    gender: string;
    address: {
      id: number;
      addLine1: string;
      addLine2: string;
      city: string;
      state: string;
      zipCode: string;
    };
    language: string[];
    mobNumber: string;
    name: string;
    password: string;
    uploadPhoto: string;
    role: string;
  }
  