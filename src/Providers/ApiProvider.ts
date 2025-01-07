import { JenisMenuProp, MakananProp, SelectDataProp } from "../Global-Types/global-types";

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

const menuMakananDummy: MakananProp[] = [
    {
        title: 'Nasi Goreng',
        harga: 15000
    },
    
    {
        title: 'Bakso Sapi',
        harga: 19000
    },
    {
        title: 'Sate Ayam',
        harga: 25000
    },
    {
        title: 'Sop Kambing',
        harga: 25000
    },

];

const menuMinumanDummy: MakananProp[] = [
    {
        title: 'Es Teh Manis',
        harga: 5000
    },
    
    {
        title: 'Susu Soda Gembira',
        harga: 9000
    },
    {
        title: 'Es Buah',
        harga: 15000
    },
    {
        title: 'Es Jeruk',
        harga: 5000
    },

];

const ApiProvider = {
    getTipeMakanan: () => {
        return tipeMakananDummy
    },
    
    getMenuMakanan: (tipe: JenisMenuProp) => {
        return tipe === 'mk' ? menuMakananDummy : menuMinumanDummy;
    }
};

export default ApiProvider