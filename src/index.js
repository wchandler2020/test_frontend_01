import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { RoutesComponent } from 'routes';

import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import './App.css'
import './interceptors/axios'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<RoutesComponent/>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
