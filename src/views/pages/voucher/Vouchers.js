import { Banner } from '../../component/BannerProduct'
import { Container } from 'react-bootstrap'
import { SuggestProduct } from '../../component/SuggestProduct'
import { VoucherList } from './component/VoucherList'
import { OnSaleProducts } from './component/OnSaleProduct'
import './Vouchers.scss'

function Blogs(){
    return(
        <Container className='vouchers-wrapper'>
            <Banner url='https://perdeberg.co.za/wp-content/uploads/2020/09/Perdeberg_landing-new-size-11-scaled.jpg'/>
            <VoucherList />
            <OnSaleProducts />
            <SuggestProduct />
        </Container>
    )
}
export default Blogs