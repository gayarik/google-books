export interface Items {
   totalItems: number;
   items: Book[];
}

export interface Book {
   volumeInfo: VolumeInfo;
   id: string;
}

export interface VolumeInfo {
   title: string;
   subtitle: string;
   authors: string[];
   categories: string[];
   imageLinks: ImageLinks;
}

export interface ImageLinks {
   thumbnail: string;
}