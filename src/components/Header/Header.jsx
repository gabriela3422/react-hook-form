import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className="header-wrapper flex items-center justify-between px-8 py-3.5">
                <a className="main-logo mx-auto px-3.5" href="/" title="">
                    <img src="/images/logo.png" alt=""/>
                </a>
                <div className="payment-logo px-3.5">
                    <img src="/images/payment.png" alt=""/>
                </div>
            </div>
        </header>
    )
}
export default Header