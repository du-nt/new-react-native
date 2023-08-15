import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type CurrentUser = {
  id: string;
  organizationId: number;
  employeeId: number;
  firstName: string;
  firstNameRuby: string;
  lastName: string;
  lastNameRuby: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  latestLoginAt: string;
  createdAt: string;
};

export type AuthStacksParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthStacksProps = NativeStackScreenProps<AuthStacksParamList>;

export type IconProps = {
  color: string;
  size: number;
};

export type TokenBundle = {
  idToken: string;
  refreshToken: string;
  expiresIn: number;
};
