// Type definitions for the project

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Equipment {
  id: number;
  name: string;
  category: string;
  specs: string;
  status: 'Available' | 'On Project';
  image: string;
}

export interface ContactForm {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
