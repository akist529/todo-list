export default function Header(props) {
    const { setLoginWindow, accountName } = props

    function loginHandler() {
        setLoginWindow(prevState => !prevState)
    }

    return (
        <div id='header'>
            <div id='header-titles'>
                <h1>DO_IT</h1>
                <h2>The to-do app for managing your life</h2>
            </div>
            <div id='header-buttons'>
                <button id='login-button' className='header-button' onClick={loginHandler}>
                    <img alt='Login' src='images/account_circle.png'/>
                    <p>{ accountName ? `Hello, ${accountName}` : 'Sign In' }</p>
                </button>
                <button id='menu-button'className='header-button'>
                    <img alt='Menu' src='images/menu.png'/>
                </button>
            </div>
        </div>
    )
}