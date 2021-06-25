import React from 'react';
import { homeData } from '@service/home'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    homeData().then(res => {
      console.log(res, '-----')
    })
  }

  render() {
    return (
      <div>
      <h1>宣传App首页</h1>
    </div>
    )
  }
}

export default Home;
