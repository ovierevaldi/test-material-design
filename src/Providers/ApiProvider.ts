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
        code: 'ns-gr',
        title: 'Nasi Goreng',
        harga: 15000
    },
    
    {
        code: 'bk-sp',
        title: 'Bakso Sapi',
        harga: 19000
    },
    {
        code: 'st-ay',
        title: 'Sate Ayam',
        harga: 25000
    },
    {
        code: 'sp-kb',
        title: 'Sop Kambing',
        harga: 25000
    },

];

const menuMinumanDummy: MakananProp[] = [
    {
        code: 'es-th',
        title: 'Es Teh Manis',
        harga: 5000
    },
    
    {
        code: 'ss-gb',
        title: 'Susu Soda Gembira',
        harga: 9000
    },
    {
        code: 'es-bh',
        title: 'Es Buah',
        harga: 15000
    },
    {
        code: 'es-jk',
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