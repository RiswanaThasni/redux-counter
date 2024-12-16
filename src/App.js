import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
    isLoggedIn: false,
    username: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true, username: action.payload };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, username: '' };
        default:
            return state;
    }
};

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <LoginApp />
        </Provider>
    );
};

const LoginApp = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();

    const [inputUsername, setInputUsername] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputUsername === 'admin' && inputPassword === '1234') {
            dispatch({ type: 'LOGIN', payload: inputUsername });
        } else {
            alert('Invalid credentials. Try username: admin and password: 1234.');
        }
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setInputUsername('');
        setInputPassword('');
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isLoggedIn ? '#a0d995' : '#f5b7b1',
                flexDirection: 'column',
            }}
        >
            {isLoggedIn ? (
                <div style={{ textAlign: 'center' }}>
                    <h1>Welcome, {username}!</h1>
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Welcome"
                        style={{ borderRadius: '10px', marginBottom: '20px' }}
                    />
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#d9534f',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={handleLogin}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={inputUsername}
                        onChange={(e) => setInputUsername(e.target.value)}
                        style={{
                            marginBottom: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                        style={{
                            marginBottom: '20px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#5cb85c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default App;
