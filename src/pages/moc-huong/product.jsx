import React from 'react'
import './mochuong.scss'

class Product extends React.Component {

	render() {
		let data = this.props.productDataCon || []
		console.log('dulieu', data)
		let elements = data.map(item => {
			return (
			<article className="list--item" key={item.name}>
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
			</article>
			)
		})
		return (
			<div className="list">
				{elements}
			</div>
		)
	}
}
export default Product
