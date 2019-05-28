import React from 'react'
import { connect } from 'react-redux'
import './style.scss';
import { getData, getProduct } from '../../redux/moc-huong/reducer'
import Product from './product'
import Footer from './footer'
import Menu from './menu'
import Gallery from './gallery'
class MocHuong extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        console.log('PROPS', this.props)
        this.props.getDataFromStore()
        this.props.getProductFromStore()

    }
    render() {
        console.log('index dTA', this.props.productData)
        return (
            <div id="page-top">

                <Menu data={this.props.displayData}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 short-intro">
                            <h3>YÊU TẤT CẢ VẺ ĐẸP MỘC MẠC ĐẾN TỪ THIÊN NHIÊN</h3>
                            <p>Chắc hẳn bạn đã từng biết đến hoặc đã từng được nghe tới NOTH Garden, một không gian tràn ngập cây giữa những ngóc ngách của Hà Nội. </p>
                        </div>
                        <div className="col-md-6"><img className="card-img-top" src="http://noth.garden/wp-content/uploads/2018/01/noth-garden-blog-trai-nghiem-khong-gian-cua-vuon-noth-5-1100x733.jpg" /></div>
                    </div>
                </div>
                <Gallery/>
                <div className="container"><Product
                productDataCon={this.props.productData}
                getProductFromStore={this.props.getProductFromStore}/></div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //tham số là state
    console.log('STATE', state)

    return {
        // todo: state.todos[ownProps.id]
        // lấy dứ liệu từ trong store ra ( store đã được reducer xử lý)
        displayData: state.mocHuong.dulieu,
        productData: state.mocHuong.dataProducts || {} // thêm cái này cho nó khỏi bị lỗi undefined

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataFromStore: () => dispatch(getData()),
        getProductFromStore: (pageIndex,pageSize) => dispatch(getProduct(pageIndex,pageSize)) // them param cho no'
        // dispatching plain actions
        // addTodo: (value)=>dispatch(addTodo(value)),
        //   changeSlogan: (diachi) =>dispatch(nhapDiaChi(diachi))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MocHuong)