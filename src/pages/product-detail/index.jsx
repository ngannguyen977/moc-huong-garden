import React from 'react'
import { connect } from 'react-redux'
import './style.scss';
import { getData, getProduct } from '../../redux/moc-huong/reducer'
import Footer from './footer'
import Menu from './menu'

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
            <div>
                <Menu />
                <section className="profil  py-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                               <div className="product-img">
                                    <img className="card-img-top" src="http://hienhoahong.com/wp-content/uploads/2016/10/Heritage-3-1.jpg" alt="rose"/>
                               </div>
                                <div className="olanaklar-kutu">
                                    <div className="olanaklar">
                                        <h4 className="pb-3">Olanaklar</h4>

                                    </div>
                                    <div className="olanaklar margin-top--22">
                                        <h4 className="pb-3">Hakkında</h4>
                                        <p>Fethiye'nin turkuaz ve dingin sularında muhteşem bir hafta gerçekleştirebilirsiniz. Kiralık yat ile bu doğal güzelliklere yakından şahitlik edebilirsiniz. 5 kabinli kiralık yelkenlimiz ile sizi Fethiye ve Göcek'in muhteşem koylarında keyifli bir seyahate çıkartıyoruz.</p>
                                    </div>
                                </div>
                                <img className="card-img-top" src="http://hienhoahong.com/wp-content/uploads/2016/10/Heritage-2.jpg" alt="Hertige rose"/>
                                <p>Fethiye'nin turkuaz ve dingin sularında muhteşem bir hafta gerçekleştirebilirsiniz. Kiralık yat ile bu doğal güzelliklere yakından şahitlik edebilirsiniz. 5 kabinli kiralık yelkenlimiz ile sizi Fethiye ve Göcek'in muhteşem koylarında keyifli bir seyahate çıkartıyoruz.</p>
                                <img className="card-img-top" src="http://i23.photobucket.com/albums/b356/youngquinnA/IMG_2771.jpg" alt="Hertige rose"/>
                                
                            </div>
                            <div className="col-md-4">
                                <div className="card"></div>
                                <img className="card-img-top" src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg" alt="Card cap" />
                                <div className="card-body text-center ">
                                    <span className="badge badge-warning">Ali Bulut</span>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="talep-olustur.html" className="primary-btn2 header-btn text-uppercase text-center">Mesaj At</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('STATE', state)

    return {
        // todo: state.todos[ownProps.id]
        displayData: state.mocHuong,
        productData: state.mocHuong.dataProducts

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataFromStore: () => dispatch(getData()),
        getProductFromStore: () => dispatch(getProduct())
        // dispatching plain actions
        // addTodo: (value)=>dispatch(addTodo(value)),
        //   changeSlogan: (diachi) =>dispatch(nhapDiaChi(diachi))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MocHuong)