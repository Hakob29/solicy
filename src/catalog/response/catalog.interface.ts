


export interface CatalogResponseInterface {

    id: number,
    name: string,
    description: string,
    imageUrl: string,
    price: {
        cost1: number,
        cost2: number,
        cost3: number
    }
    req: {
        req1: number,
        req2: number,
        req3: number
    }

}