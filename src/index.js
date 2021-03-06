import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

    html {
        height: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
    }
`;

export default App;
