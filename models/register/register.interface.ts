export interface Register {
  photo: string;
  fullName: string;
  gender: number;
  weight: number;
  height: number;
  purpose: number;
  gym: {
    name: string;
    address: string;
    state: string;
    city: string;
    zipCode: string;
  };
  workOut: boolean;
  showInfo: boolean;
}