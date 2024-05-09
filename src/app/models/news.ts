export interface News {
    id: number;
    title_es: string;
    title_en: string;
    title_eus: string;
    content_es: string;
    content_en: string;
    content_eus: string;
    date: Date;
    image?: any;
    [key: string]: any;
}
