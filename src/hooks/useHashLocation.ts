import { useCallback, useEffect, useState } from 'react';
import { BaseLocationHook } from 'wouter';

// returns the current hash location (excluding the '#' symbol)
const currentLoc = () => window.location.hash.replace('#', '') || '/';

export const useHashLocation: BaseLocationHook = () => {
	const [loc, setLoc] = useState(currentLoc());

	useEffect(() => {
		const handler = () => setLoc(currentLoc());

		// subscribe on hash changes
		window.addEventListener('hashchange', handler);
		return () => window.removeEventListener('hashchange', handler);
	}, []);

	const navigate = useCallback((to) => {
		window.location.hash = to;
	}, []);

	return [loc, navigate];
};
