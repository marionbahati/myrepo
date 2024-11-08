import { CompanyRelation } from "./company-relation";

export interface Company {
    id: number;
    name: string;
    Relations: CompanyRelation[];
}
