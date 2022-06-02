export class Article {
    id?: number;
    title: string;
    subTitle: string;
    description: string;
    date: string;
    category: {id: number, name: string}

    constructor(paramTitle: string, paramSubTitle: string, paramDescription: string, paramDateOfPublication: string, paramCategory: { id: number, name: string }) {
        this.title = paramTitle;
        this.subTitle = paramSubTitle;
        this.description = paramDescription;
        this.date = paramDateOfPublication;
        this.category = paramCategory;
    }
}
