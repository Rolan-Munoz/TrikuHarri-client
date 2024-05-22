export interface Project {
    id: number;
    tittle_es: string;
    title_en: string;
    title_eus: string;
    description_es: string;
    description_en: string;
    description_eus: string;
    content_es: string;
    content_en: string;
    content_eus: string;
    date: string;
    video?: any;
    imageIds: number[];
    [key: string]: any;

}