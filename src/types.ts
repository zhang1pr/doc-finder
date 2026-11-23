export type Product = 'XDocs' | 'XDelivery' | 'XReview';

export type Topic = {
  id: string;
  title: string;
  product: Product;
  bodyXml: string;
};