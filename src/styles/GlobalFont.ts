import { createGlobalStyle } from 'styled-components';
import FontSuit from '../font/SUIT-Variable.woff2';

export default createGlobalStyle`
 
@font-face {
	font-family: 'SUIT Variable';
	font-weight: 100 900;
	src: local('SUIT Variable Regular'), url(${FontSuit}) format('woff2-variations');
}

`;
