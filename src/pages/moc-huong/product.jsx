import React from 'react'
import './mochuong.scss'

class Product extends React.Component {

	render() {
		const PAGESIZE = 10 // set số lượng item hiển thị mặc định là 10
		const { data, total, pageIndex } = this.props.productDataCon // kiểu khai báo biến mới trong ES6
		// sửa lại UI xíu để nó support phân trang
		let elements = (data||[]).map(item => {
			return (

				<div className="list--item col-md-4" key={item.name}>
					<figure>
						<img src={item.imageUrl} alt="" />
						<header>
							<div className="floater">
								{item.unit}
							</div>
							<h2>{item.name}</h2>
						</header>
						<figcaption>{item.description}</figcaption>
						<footer>
							<span>giá:{item.price}</span>
							<span>Trang Thái:{item.status}</span>
						</footer>
					</figure>
				</div>
			)
		})
		let max = total / PAGESIZE
		let pagination = []
		for (let i = 1; i < max; i++) {
			pagination.push(<li className={pageIndex===i?"active":"inactive"}><a href="javascript:void(0)" onClick={() => this.props.getProductFromStore(i, PAGESIZE)}>{i}</a></li>)
		}
		return (
			<div>
				<div className="list">
					{elements}
				</div>
				{/* <nav aria-label="Page navigation">
					<ul className="pagination">
						<li>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true"><i className="fa fa-chevron-left" aria-hidden="true"></i></span>
							</a>
						</li>
						<li className="active"><a href="#">01</a></li>
						<li><a href="#">02</a></li>
						<li><a href="#">03</a></li>
						<li><a href="#">04</a></li>
						<li><a href="#">05</a></li>
						<li><a href="#">06</a></li>
						<li><a href="#">07</a></li>
						<li><a href="#">08</a></li>
						<li><a href="#">09</a></li>
						<li><a href="#">10</a></li>
						<li>
							<a href="#" aria-label="Next">
								<span aria-hidden="true"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
							</a>
						</li>
					</ul>
				</nav> */}
				{/* a lam cái phân trang don gian  */}
				<nav aria-label="Page navigation">
					<ul className="pagination">
						{pagination}
					</ul></nav>
			</div>
		)
	}
}
export default Product
