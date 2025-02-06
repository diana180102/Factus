export type BillingPeriod = {
  start_date: string;
  start_time: string;
  end_date: string;
  end_time: string;
};

export type Customer = {
  identification: string;
  dv: string;
  company:string,
  names: string;
  trade_name:string;
  address: string;
  email: string;
  phone: string;
  legal_organization_id: string;
  tribute_id: string;
  identification_document_id: string;
  municipality_id: string;
};

export type Item = {
  code_reference: string;
  name: string;
  quantity: number;
  discount_rate: number;
  price: number;
  tax_rate: string;
  unit_measure_id: number;
  standard_code_id: number;
  is_excluded: number;
  tribute_id: number;
  withholding_taxes: {
    code: string;
    withholding_tax_rate: string;
  }[];
};

export type FormDataType = {
  numbering_range_id: number;
  reference_code: string;
  observation: string;
  payment_form: string;
  payment_due_date: string;
  payment_method_code: string;
  billing_period: BillingPeriod;
  customer: Customer;
  items: Item[];
};

export type Bill ={
  number: string;
  qr:string;
  cufe:string;
  public_url:string;
}