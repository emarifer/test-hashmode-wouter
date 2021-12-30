import { Link, useRoute } from 'wouter';

interface Props {
	href: string;
	children: string;
}

export const ActiveLink = (props: Props) => {
	const [isActive] = useRoute(props.href);

	return (
		<Link {...props}>
			<a className={isActive ? 'active' : ''}>{props.children}</a>
		</Link>
	);
};
