export interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  brandName: string;
  businessNature: string;
  category: string;
  currentSales: string;
  averageSalesPrice: string;
  targetSales: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  brandName?: string;
  businessNature?: string;
}

export interface CountryOption {
  code: string;
  name: string;
  dial: string;
}

export interface Office {
  country: string;
  flag: string;
  lines: string[];
}