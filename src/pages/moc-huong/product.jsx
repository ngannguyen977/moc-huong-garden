import React from 'react'
import './mochuong.scss'

class Product extends React.Component {
//lên store lấy dữ liệu về
//mà du liệu phải được map từ state sang props ( phần này đã làm bên index.jsx) 
	render() {
		let data = this.props.productDataCon || []
		console.log('dulieu', data)
		let elements = data.map(item => {
			return (
				
					<div className="list--item col-md-4" key={item.name}>
						<figure>
							<img src={item.imageUrl} alt="" />
							<header>
								<div className="floater">
									{item.feature}
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
		return (
			<div>
				<div className="list">
					{elements}
				</div>
				<nav aria-label="Page navigation">
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
				</nav>
			</div>
		)
	}
}
export default Product
