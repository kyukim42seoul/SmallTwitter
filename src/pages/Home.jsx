import { LoginButton } from "../components/LoginButton"
import { CenterizeItems } from "./CenterizeItems";

export function Home() {
	const sayHi = () => console.log('hi');
	return <div>
		It's Home
		<CenterizeItems>
			<LoginButton onClick={sayHi}>{'Google 계정으로 로그인'}</LoginButton>
			<LoginButton onClick={sayHi}>{'Apple로 로그인'}</LoginButton>
		</CenterizeItems>
	</div>
};