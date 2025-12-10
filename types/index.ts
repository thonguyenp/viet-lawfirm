export interface Service {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
}

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  position: string;
  message: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}
