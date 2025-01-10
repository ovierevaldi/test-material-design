import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { getMakananArgs, JenisMenuProp, MakananProp, SelectDataProp } from "../Global-Types/global-types";

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const ApiProvider = {
    getTipeMakanan: () => {
        return tipeMakananDummy
    },
    
    getMenuMakanan: (tipe: JenisMenuProp, args: getMakananArgs) => {
        // tipe belum terintegrasi
        if(tipe)
            void 0;

        return useQuery(GET_MAKANAN, { variables: { args: args} });
        // return tipe === 'mk' ? useQuery(GET_MAKANAN) : useQuery(GET_MAKANAN, {variables: { args }});
    }
};


const GET_MAKANAN = gql`
    query GetAllMakanan($args: getMakananArgs!) {
        getAllMakanan(args: $args) {
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