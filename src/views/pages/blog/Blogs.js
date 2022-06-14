
import { Banner } from '../../component/BannerProduct'
import { Container } from 'react-bootstrap'
import { BlogList } from './component/BlogList'
import './Blogs.scss'

function Blogs(){
    return(
        <Container className='blogs-wrapper'>
            <Banner url='https://perdeberg.co.za/wp-content/uploads/2020/09/Perdeberg_landing-new-size-11-scaled.jpg'/>
        
            <BlogList />
        </Container>
    )
}
export default Blogs