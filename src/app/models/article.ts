export class Article {
    id?: any;
    title: string;
    subTitle: string;
    description: string;
    date: string;
    category: {id: number, name: string}

    constructor(paramId: any, paramTitle: string, paramSubTitle: string, paramDescription: string, paramDateOfPublication: string, paramCategory: { id: number, name: string }){
        this.id= paramId;
        this.title = paramTitle;
        this.subTitle = paramSubTitle;
        this.description = paramDescription;
        this.date = paramDateOfPublication;
        this.category = paramCategory;
    }
}
