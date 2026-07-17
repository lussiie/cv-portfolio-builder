export type PersonalInfo = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
};

export type Experience = {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | null;
};

export type Project = {
  name: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  url: string;
};

export type CVSettings = {
  template: string;
  themeColor: string;
  font: string;
};