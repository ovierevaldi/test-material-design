import { Pagination } from '@mui/material'

type BasePaginationProp = {
    pageAmt: number
    hidePrevBtn? : boolean
    hideNextBtn? : boolean
    shape?: 'circular' | 'rounded';
    variant?: 'outlined' | 'text';

    onPageChanged?: (page: number) => void

}

const BasePagination = ({pageAmt, hidePrevBtn, hideNextBtn, shape, variant, onPageChanged} : BasePaginationProp) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if(event)
            void 0;
        
        if(onPageChanged){
            onPageChanged(page);
        }
    };

    return (
        <Pagination 
            count={pageAmt}
            shape={shape}
            hidePrevButton={hidePrevBtn} 
            hideNextButton={hideNextBtn}
            variant={variant}

            onChange={handlePageChange}
        />
    )
}

export default BasePagination