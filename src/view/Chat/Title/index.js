

import './style.css'
import logo from './go.svg'
function Title ({product}){



    return<div className="fulBody">
<div style={{display:'flex'}}>
<img style={{ width: 50, height: 50, borderRadius: 5 ,marginLeft:30}} src={product.image} />
    <div style={{marginLeft:20}}>
        <div>{product.title}</div>
        <div>RS {product.amount}</div>
    </div>
    <div className='im'><img src={logo} alt="Logo" /></div>
    <div></div>
</div>
    </div>
}

export default Title;