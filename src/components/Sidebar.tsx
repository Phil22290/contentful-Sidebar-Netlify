import React, { useState } from "react";
import { PlainClientAPI } from "contentful-management";
import { Paragraph, Button } from "@contentful/forma-36-react-components";
import { SidebarExtensionSDK } from "@contentful/app-sdk";

interface SidebarProps {
	sdk: SidebarExtensionSDK;
	cma: PlainClientAPI;
}

const Sidebar = (props: SidebarProps) => {
	// state for Deploy result
	const [deployResult, setDeployResult] = useState("");

	const clearResult = () => {
		setTimeout(() => {
			setDeployResult("");
		}, 5000);
	};

	const onClickHandler = (e: any) => {
		e.preventDefault();
		fetch("www.dummy.com", {
			method: "POST",
		})
			.then((response) => {
				let msg = "Request deploy success";

				if (!response.ok) {
					msg = "Request deploy failed";
				}
				
				// ALT: let msg = response.ok ? "Request deploy success" : "Request deploy failed";
				
				setDeployResult(msg);

				clearResult();
			})
			.catch(console.error);
	};

	return (
		<div>
			<Paragraph>Deploy to Netlify</Paragraph>
			<br />
			<Button onClick={onClickHandler} buttonType="positive">
				Deploy
			</Button>

			<Paragraph>
				<br />
				{deployResult}
			</Paragraph>
		</div>
	);
};

export default Sidebar;
