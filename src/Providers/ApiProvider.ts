import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { JenisMenuProp, MakananProp, SelectDataProp } from "../Global-Types/global-types";

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const ApiProvider = {
    getTipeMakanan: () => {
        return tipeMakananDummy
    },
    
    getMenuMakanan: (tipe: JenisMenuProp) => {
        return tipe === 'mk' ? useQuery(GET_MAKANAN) : useQuery(GET_MAKANAN);
    }
};

const GET_MAKANAN = gql`
    query GetAllMakanan {
        getAllMakanan {
            code
            nama
            harga
        }
    }
`

const tipeMakananDummy : SelectDataProp[] = [
    {
        label: 'Makanan',
        value: 'mk',
    },
    {
        label: 'Minuman',
        value: 'mn'
    }
];


export default ApiProvider;