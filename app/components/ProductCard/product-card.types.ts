export type Product = {
    image: string;
    title: string;
    desc: string;
    price: number;
    oldPrice: number;
    visits?: number;
    tags?: string[]
}

export type GroupProducts = {
    title: string;
    titleCenter?: boolean
    showTag?: boolean
    showDesc?: boolean
    showVisits?: boolean
    priceSameLine?: boolean
    extra?: {
        center?: boolean
        title: string
        link: string
    }
    columns?: number;
    products: Product[];
}
