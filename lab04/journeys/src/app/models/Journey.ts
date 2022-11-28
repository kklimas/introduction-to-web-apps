export class Journey {
    id: number;
    name: string;
    country: string;
    ticketsLeft: number;
    cost: number;
    startDate: Date;
    endDate: Date;
    description: string;
    img: string;
}

export class JourneyFilter {
    query: string = '';
    countries: string[] = [];
    startDate: Date;
    endDate: Date;
    minCost: number;
    maxCost: number;
}