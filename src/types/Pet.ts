interface Image {
  name: string;
  small: string;
  medium: string;
  big: string;
  isMain: boolean;
}

export interface Pet {
  id: string;
  name: string;
  description: string;
  images: Image[];
  timestamp: any;
}
