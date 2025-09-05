export interface LoginFormValues {
  username: string;
  password: string;
}

export interface RegisterFormValues {
  username: string;
  password: string;
  confirmarPassword: string;
  aceptarTerminosCondiciones: boolean;
  aplicacion: string;
}

export interface RefreshTokenResponse {
  access: string;
}
