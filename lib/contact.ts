export interface ContactFormValues {
  name: string;
  shop: string;
  plan: string;
  email: string;
  message: string;
}

export interface ContactSubmitResult {
  ok: boolean;
  message: string;
}
