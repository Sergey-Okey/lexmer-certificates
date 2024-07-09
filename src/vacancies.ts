export interface IVacancyList {
    categories: [],
    list: IVacancyCard[],
  }
  
  export interface IVacancyCategory {
    code: string,
    name: string,
  }
  
  export interface IVacancyCard {
    id: string,
    name: string,
    city: string,
    salary: string,
    link: string,
    category: string,
  }