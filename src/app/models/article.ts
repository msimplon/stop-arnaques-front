export class Article {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    dateOfPublication: string;

    constructor(paramTitle: string, paramSubTitle: string, paramDescription: string, paramDateOfPublication: string) {
        this.title = paramTitle;
        this.subtitle = paramSubTitle;
        this.description = paramDescription;
        this.dateOfPublication = paramDateOfPublication;
    }
}
