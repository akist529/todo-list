import Account from "../account/account.js";

export default function Login(props) {
    const { userData, $ID, setLoginWindow, accountWindowOpen, setAccountWindow, setAccountName } = props

    function accountHandler(e) {
        e.preventDefault()
        setAccountWindow(prevState => !prevState)
    }

    function submitHandler(e) {
        e.preventDefault()
        let userCheck = false

        for (const user of userData) {
            if (user.name === $ID('login-name').value) {
                setAccountName(user.name)
                setLoginWindow(prevState => !prevState)
                userCheck = true
                break
            }
        }

        if (!userCheck) {
            const error = document.createElement('p')
            error.innerText = 'This user does not exist'
            $ID('login-prompt').insertBefore(error, $ID('login-prompt').children[2])
        }

        $ID('login-name').value = ''
        $ID('login-pass').value = ''
    }

    function closeHandler() {
        $ID('login-name').value = ''
        $ID('login-pass').value = ''
        $ID('login-screen').remove()
    }

    return (
        <div
            id='login-screen'
            className='popup-screen'
        >
            <div
                id='login-prompt'
                className='popup-prompt'
            >
                <h1 id='login-header'>{ accountWindowOpen ? 'Create An Account' : 'Sign In To Do_It' }</h1>
                <form>
                    <div className='input-field'>
                        <label
                            id='name-label'
                            htmlFor='login-name'
                        >Name: 
                            <input
                                id='login-name'
                                name='login-name'
                            >
                            </input>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label
                            id='pass-label'
                            htmlFor='login-pass'
                        >Password: 
                            <input
                                id='login-pass'
                                name='login-pass'
                            >
                            </input>
                        </label>
                    </div>
                    <input
                        id='login-submit'
                        type='submit'
                        value='LOG IN'
                        onClick={submitHandler}
                    ></input>
                </form>
                <p>New user? Create an account <a id='account-link' href='' target='_blank' onClick={accountHandler}>here!</a></p>
                <button
                    id='close-login'
                    className='button-close'
                    onClick={closeHandler}
                >X</button>
            </div>
        </div>
    )
}