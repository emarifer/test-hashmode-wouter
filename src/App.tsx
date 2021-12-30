import { Redirect, Switch, Route, Router } from 'wouter';
import { useHashLocation } from './hooks/useHashLocation';
import { ActiveLink } from './components/ActiveLink';
import { About } from './pages/About';

import './styles.css';

export const App = () => (
	<Router hook={useHashLocation}>
		<nav>
			<ActiveLink href="/">Home</ActiveLink>
			<ActiveLink href="/about">What is Wouter</ActiveLink>
			<ActiveLink href="/faq">FAQ</ActiveLink>
			<ActiveLink href="/info">More Info (redirect)</ActiveLink>
		</nav>

		<main>
			<Switch>
				<Route path="/info">
					<Redirect to="/about" />
				</Route>
				<Route path="/">This example uses hash-based routing.</Route>
				<Route path="/about" component={About} />
				<Route path="/:anything*">
					<b>404: Sorry, this page isn&apos;t ready yet!</b>
				</Route>
			</Switch>
		</main>
	</Router>
);

/**
 * DOCUMENTACIÓN DE ESTE EJEMPLO:
 * https://codesandbox.io/s/wouter-hash-based-hook-5fp9g
 * https://github.com/molefrog/wouter
 */
