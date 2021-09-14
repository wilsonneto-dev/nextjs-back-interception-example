import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

const PopUp = () => {
	const router = useRouter();
	return <div>
		are you sure to return? &nbsp;
		<input type="button" onClick={
			() => {
				router.beforePopState(() => true)
				router.back()
			}
		} value="yes" />
	</div>
};

const AnotherPage: NextPage = () => {
  const [showPopup, setShowPopup] = useState(false);
	const router = useRouter();

	useEffect(() => {
		router.beforePopState(() => { 
			setShowPopup(true); 
			console.log('stopped');
			history.go(1)
			return false 
		});
	}, []);

	return (
    <div>
			{ !!showPopup && <PopUp /> }
			<p>
				Just imagine a page full of amazing contect here... (then try to return to the other page)
			</p>
    </div>
  );
};

export default AnotherPage;
