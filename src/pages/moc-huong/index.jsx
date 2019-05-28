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
    console.log('STATE', state)

    return {
        // todo: state.todos[ownProps.id]
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