import React from 'react'
import './mochuong.scss'

class Gallery extends React.Component {

	render() {
		let data = this.props.productDataCon || []
		console.log('dulieu', data)

		return (
			<div className="container">
				<div className="gallery row">
					<div className="gallery-list col-md-4 col-xs-6">
						<div className="image-grid">
							<img src="https://i.pinimg.com/564x/c3/8d/4f/c38d4f690b0ebdd3099c742deda4c853.jpg" alt=""/>
							<figcaption>
								<p className="font20 font-roboto-regular font-color-dark">click to expand</p>
							</figcaption>
							<a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
							<h2 className="item-name">Sen đá</h2>
						</div>
					</div>
					<div className="gallery-list col-md-4 col-xs-6">
						<div className="image-grid">
							<img src="https://i.pinimg.com/564x/7b/f2/ea/7bf2ea74ccc88178da8e0eca255bf469.jpg" alt="" />
							<figcaption>
								<p className="font20 font-roboto-regular font-color-dark">click to expand</p>
							</figcaption>
							<a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
							<h2 className="item-name">Cây phong thủy</h2>
						</div>
					</div>
					<div className="gallery-list col-md-4 col-xs-6">
						<div className="image-grid">
							<img src="https://i.pinimg.com/564x/3b/07/d5/3b07d571f59e3f1b72d32d2463b2f660.jpg" alt="" />
							<figcaption>
								<p className="font20 font-roboto-regular font-color-dark">click to expand</p>
							</figcaption>
							<a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
							<h2 className="item-name">Rau cải</h2>
						</div>
					</div>

					<div className="gallery-list col-md-6 col-xs-12">
						<div className="image-grid">
							<img src="https://tnimage.taiwannews.com.tw/photos/shares/5a14280d531dd.jpg" alt="" />
							<figcaption>
								<p className="font20 font-roboto-regular font-color-dark">click to expand</p>
							</figcaption>
							<a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
							<h2 className="item-name">Hoa hồng</h2>
						</div>
					</div>
					<div className="gallery-list col-md-6 col-xs-12">
						<div className="image-grid">
						<img src="https://www.thermofisher.com/blog/wp-content/uploads/sites/2/2017/01/shutterstock_408614731.jpg" alt=""/>
						<figcaption>
						<p className="font20 font-roboto-regular font-color-dark">click to expand</p>
						</figcaption>
						<a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
						<h2 className="item-name">Cây gia vị</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Gallery
