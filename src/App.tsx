import Menu from './Layouts/Menu/Menu';
import Home from './Pages/Home';
import './Scss/style.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>

			<Menu />

			<Home />

		</BrowserRouter>
	);
}

export default App;
