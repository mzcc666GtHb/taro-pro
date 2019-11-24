import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem,View } from '@tarojs/components'
import './index.less'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'

export  default  class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList:[
        {img:img1},
        // {img:img2},
        // {img:img3},
        // {img:img4}
      ],
    }
  }
  change(e) {
    let current = e.detail.current;
    if(!current) {
      console.log(123);
    }
  }
  animationEnd(e) {
    if(e.detail.current === 0) {
      // this.forceUpdate();
    }
  }
  render () {
    return (
        <Swiper
          previousMargin='50px'
          nextMargin='50px'
          skipHiddenItemLayout
          interval='1000'
          displayMultipleItems='1'
          // autoplay
          circular
          onChange={this.change}
          onAnimationfinish={this.animationEnd.bind(this)}
        >
          {this.state.imgList.map((list, index) => {
            return <SwiperItem>
              <View className='img-box' style={{width:'100%',height:'100%',backgroundImage:`url(${list.img})`}}></View>
            </SwiperItem>
          })}
        </Swiper>
    )
  }
}
