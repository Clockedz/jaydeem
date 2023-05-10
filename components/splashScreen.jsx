import React from "react";
import anime from "@lib/anime.es.js";

const SplashScreen = ({finishLoading}) => {
	const [isMounted, setIsMounted] = React.useState(false);

	const animate = () => {
		const rect = document.querySelector("#rectangle");

		const loader = anime.timeline({
			complete: () => {
				finishLoading();
			},
		});

		loader
			.add({
				targets: rect,
				y: ["100%", "0%"],
				height: ["0%", "100%"],
				duration: 1500,
				easing: "easeInOutExpo",
			})
			.add({
				targets: rect,
				y: ["0%", "100%"],
				height: ["100%", "0%"],
				duration: 1000,
				easing: "easeInOutExpo",
			});
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animate();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="flex h-screen items-center justify-center">
			<svg
				id="logo"
				width="232"
				height="247"
				viewBox="0 0 232 247"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<svg width="0" height="0">
					<defs>
						<clipPath id="circleClip">
							<path
								id="japan"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M175.822 0.5688C173.434 1.1958 172.611 6.6608 174.301 10.6678C175.479 13.4598 175.479 14.9508 174.307 20.6498C173.55 24.3338 172.279 28.0678 171.484 28.9458C170.689 29.8248 170.039 32.3478 170.039 34.5538C170.039 38.4658 169.957 38.5608 166.659 38.4468C164.799 38.3818 162.555 37.7288 161.671 36.9958C158.894 34.6908 156.726 36.4058 157.462 40.3258C158.062 43.5268 157.813 43.9448 153.571 46.8638C149.527 49.6468 149.039 50.3938 149.039 53.8118C149.039 56.6558 149.609 58.0198 151.253 59.1118C153.286 60.4618 153.372 60.8948 152.3 64.3868C151.019 68.5608 152.027 71.8858 154.574 71.8858C156.159 71.8858 159.223 69.1658 160.787 66.3708C161.468 65.1558 162.23 64.8958 163.318 65.5088C164.677 66.2738 164.701 66.7978 163.511 69.6218C162.29 72.5188 161.827 72.7938 159.093 72.2468C156.082 71.6448 156.039 71.6948 156.039 75.7608C156.039 79.0308 155.674 79.8858 154.28 79.8858C151.536 79.8858 149.871 83.3148 151.077 86.4848C152.283 89.6568 151.473 92.8858 149.472 92.8858C148.684 92.8858 148.039 93.7858 148.039 94.8858C148.039 96.2188 148.706 96.8858 150.039 96.8858C151.634 96.8858 152.034 97.5438 152.014 100.136C151.984 104.179 148.994 113.271 146.172 117.899C145.003 119.817 144.045 122.092 144.043 122.956C144.041 123.819 142.127 126.325 139.789 128.523C137.451 130.721 134.215 134.402 132.597 136.703C130.979 139.004 129.104 140.886 128.429 140.886C126.769 140.886 117.267 145.708 116.508 146.936C116.174 147.476 115.542 147.697 115.104 147.426C114.017 146.754 115.078 141.621 116.56 140.386C118.577 138.704 119.134 135.86 117.564 135.257C115.376 134.418 108.257 137.943 107.68 140.153C107.399 141.224 107.55 143.101 108.015 144.323C109.147 147.299 106.471 152.733 102.856 154.8C99.8046 156.544 97.4826 160.995 98.3906 163.361C99.0926 165.191 95.3876 168.886 92.8496 168.886C91.7056 168.886 91.0386 168.15 91.0386 166.886C91.0386 164.798 90.0446 164.51 86.2996 165.513C85.0686 165.843 84.3186 166.531 84.6336 167.04C84.9496 167.55 86.0136 167.711 86.9986 167.399C88.2106 167.014 88.9496 167.438 89.2816 168.706C90.1556 172.051 93.8046 172.03 97.6446 168.659C99.7106 166.845 100.915 165.005 100.59 164.159C99.6296 161.657 101.11 158.175 103.618 157.032C107.604 155.216 110.154 150.094 109.825 144.562C109.548 139.889 109.649 139.694 113.039 138.319L116.539 136.899L113.789 139.18C111.006 141.488 110.149 143.886 112.106 143.886C112.708 143.886 112.905 144.733 112.558 145.825C111.392 149.501 118.039 150.936 119.43 147.309C119.731 146.526 120.778 145.872 121.758 145.854C122.737 145.837 124.413 145.162 125.48 144.354C126.548 143.547 128.206 142.886 129.165 142.886C130.124 142.886 132.176 141.027 133.724 138.755C135.272 136.483 138.676 132.489 141.289 129.88C143.902 127.27 146.039 124.45 146.039 123.612C146.039 122.774 147.389 119.523 149.039 116.386C150.689 113.249 152.039 109.855 152.039 108.843C152.039 107.832 152.489 106.726 153.039 106.386C154.643 105.394 154.239 97.2968 152.514 95.8648C151.15 94.7328 151.157 94.4128 152.588 92.8308C153.803 91.4888 154.027 89.9908 153.52 86.6068C152.89 82.4058 153.001 82.1118 155.445 81.4988C157.61 80.9558 158.039 80.2768 158.039 77.3978C158.039 74.8048 158.397 74.0858 159.481 74.5018C160.273 74.8058 161.061 76.0298 161.231 77.2208C161.487 79.0238 162.2 79.3858 165.494 79.3858C168.86 79.3858 169.552 79.0138 170.144 76.8858C170.709 74.8568 170.858 75.1708 170.939 78.5538C171.061 83.6518 171.849 85.8858 173.525 85.8858C174.224 85.8858 175.346 87.3478 176.019 89.1358C176.691 90.9228 177.671 93.3038 178.196 94.4258C180.457 99.2518 179.029 108.083 175.392 111.772C173.77 113.418 173.039 115.315 173.039 117.884C173.039 121.194 172.789 121.566 170.789 121.224C166.195 120.438 165.524 122.011 165.724 133.102C165.892 142.458 165.694 143.702 163.526 146.886C160.173 151.81 159.472 158.422 161.819 162.986L163.671 166.587L160.921 167.624C158.885 168.393 158.002 169.569 157.517 172.154C157.077 174.495 156.067 176.008 154.45 176.744C152.232 177.755 152.039 177.631 152.039 175.193C152.039 173.736 152.758 171.749 153.637 170.778C154.516 169.807 154.939 168.534 154.578 167.949C153.367 165.989 150.961 166.86 149.242 169.88C148.009 172.047 146.79 172.875 144.824 172.88C141.642 172.887 139.712 175.737 140.571 179.159C140.971 180.752 140.511 182.054 139.096 183.335C137.063 185.175 137.039 185.161 137.039 182.124C137.039 180.435 137.569 178.876 138.216 178.66C139.902 178.098 138.258 175.886 136.154 175.886C134.094 175.886 130.545 179.471 129.64 182.467C129.075 184.337 128.428 184.501 123.275 184.083C120.12 183.827 117.26 183.185 116.92 182.654C116.579 182.124 115.117 181.622 113.67 181.538C111.891 181.435 111.04 180.82 111.04 179.636C111.039 176.811 108.388 177.628 107.046 180.868C105.533 184.522 106.303 186.886 109.008 186.886C110.392 186.886 111.039 187.542 111.039 188.945C111.039 190.141 110.595 190.729 109.979 190.349C108.315 189.32 103.173 191.887 102.472 194.097C101.537 197.042 97.0326 203.402 95.9636 203.286C95.4546 203.231 94.3636 203.119 93.5386 203.036C92.7136 202.953 92.0386 202.227 92.0386 201.421C92.0386 200.616 91.1036 199.456 89.9606 198.844C88.5336 198.081 88.1086 197.209 88.6016 196.059C88.9966 195.139 89.3766 193.486 89.4466 192.386C89.5156 191.286 90.4136 189.134 91.4416 187.605C93.6216 184.358 93.0766 183.482 88.7186 183.224C86.9696 183.121 84.0506 182.723 82.2316 182.339C79.4506 181.753 78.3096 182.137 75.0476 184.758C72.7726 186.587 70.5346 187.63 69.6306 187.283C68.7826 186.958 66.4046 187.733 64.3456 189.005C60.5696 191.339 55.1636 191.693 53.9186 189.687C52.7266 187.768 49.6796 189.397 48.8696 192.386C48.2436 194.697 48.4436 195.673 49.7386 196.636C50.6636 197.324 50.9746 197.886 50.4286 197.886C48.8306 197.886 44.0546 195.454 44.0466 194.636C44.0426 194.224 43.3636 193.886 42.5386 193.886C41.7136 193.886 41.0386 194.336 41.0386 194.886C41.0386 195.999 37.7356 196.18 34.2886 195.256C32.5876 194.8 32.0386 193.919 32.0386 191.644C32.0386 188.843 32.2426 188.677 35.0046 189.229C37.1536 189.659 38.3236 189.345 39.2546 188.087C39.9606 187.132 41.7286 185.592 43.1826 184.665C46.7626 182.382 55.0386 174.146 55.0386 172.867C55.0386 171.13 60.3086 169.59 62.2136 170.771C65.3596 172.721 83.0216 169.214 83.0346 166.636C83.0406 165.58 81.6176 165.702 78.3536 167.038C74.7066 168.531 65.0386 169.73 65.0386 168.689C65.0386 168.247 63.5766 167.893 61.7886 167.901C58.3586 167.916 53.6576 169.858 53.9166 171.152C54.1406 172.274 44.0476 181.83 40.9406 183.437C39.4776 184.193 38.0366 185.448 37.7386 186.225C37.3816 187.155 36.2776 187.463 34.5106 187.125C31.3156 186.515 30.0756 188.047 30.0536 192.636C30.0426 194.983 29.5806 195.886 28.3896 195.886C27.4826 195.886 25.2106 197.461 23.3416 199.386C21.4716 201.311 19.1126 202.886 18.0976 202.886C17.0826 202.886 15.9936 203.561 15.6766 204.386C15.3606 205.211 14.4276 205.886 13.6056 205.886C12.7826 205.886 11.6096 206.819 10.9986 207.96C10.0656 209.705 10.2056 210.117 11.8826 210.556C13.4006 210.952 14.0386 212.249 14.5516 215.982C15.2606 221.139 16.9966 222.352 19.0646 219.136C20.1126 217.506 20.1496 217.512 19.6096 219.229C17.8936 224.683 17.8646 225.882 19.4326 226.484C20.3186 226.824 21.0386 228.228 21.0386 229.615C21.0386 231.804 20.8316 231.959 19.4446 230.808C18.0836 229.678 17.5746 229.843 15.9666 231.935C12.5626 236.364 14.4326 239.09 17.9206 234.783C19.5026 232.829 19.7226 232.8 21.0206 234.365C22.1176 235.686 22.1656 236.453 21.2446 237.928C19.6526 240.476 20.6036 242.463 24.1106 243.916C25.7206 244.583 27.0386 245.524 27.0386 246.007C27.0386 246.491 27.9586 246.886 29.0836 246.886C31.4916 246.886 36.4186 242.31 35.5406 240.889C35.2006 240.339 35.5936 240.162 36.4366 240.485C37.4836 240.887 38.4166 239.916 39.5196 237.277C40.3896 235.195 40.8966 232.959 40.6466 232.308C40.1746 231.076 42.1556 224.435 43.3536 223.238C43.7306 222.861 44.0386 221.728 44.0386 220.719C44.0386 219.711 44.9616 217.963 46.0896 216.835C48.3866 214.538 48.0126 211.848 44.9386 208.548C43.7936 207.319 43.2906 205.73 43.6256 204.397C44.3906 201.346 41.8476 199.364 39.2496 200.986C36.8746 202.47 34.4816 201.689 33.8366 199.221C33.4106 197.591 34.0296 197.386 39.3646 197.386C43.2816 197.386 45.5166 197.821 45.7886 198.636C46.6606 201.253 50.9676 199.967 53.2796 196.398C55.4556 193.039 57.0386 191.929 57.0386 193.764C57.0386 194.246 56.3636 195.201 55.5386 195.886C54.7136 196.571 54.0386 197.744 54.0386 198.494C54.0386 199.244 52.2246 201.058 50.0066 202.526C45.7866 205.319 45.2506 207.554 48.8986 207.148C50.7256 206.944 51.0386 207.425 51.0386 210.44C51.0386 214.682 53.3576 217.4 57.7886 218.349C60.8486 219.004 61.0406 218.88 61.0716 216.215C61.1146 212.557 66.0036 205.476 68.7636 205.075C70.1176 204.879 71.3086 205.521 72.0066 206.825C73.4586 209.54 75.8726 209.448 76.9516 206.636C77.4266 205.398 79.2156 203.145 80.9276 201.628C84.1806 198.744 84.7136 197.421 83.0386 196.386C81.2726 195.295 81.9816 193.42 84.6246 192.193C87.1926 191.001 87.1946 191.003 86.5416 194.868C85.9886 198.139 86.2086 198.906 87.9636 199.846C89.1046 200.457 90.0386 201.581 90.0386 202.344C90.0386 203.562 96.7576 206.644 97.4326 205.736C98.6176 204.139 103.83 195.974 104.678 194.386C105.31 193.203 107.133 192.182 109.143 191.886C111.658 191.516 112.618 190.829 112.845 189.238C113.216 186.639 115.557 185.918 123.687 185.9L129.836 185.886L134.961 177.386L135 181.636C135.036 185.598 135.225 185.886 137.795 185.886C139.865 185.886 140.866 185.175 141.817 183.025C142.513 181.452 142.838 179.527 142.539 178.747C142.24 177.967 142.68 176.442 143.517 175.357C144.957 173.492 145.112 173.48 146.399 175.136C147.147 176.099 148.321 176.886 149.006 176.886C149.717 176.886 149.999 177.547 149.663 178.424C148.615 181.156 151.836 181.143 155.431 178.401C157.582 176.76 159.039 174.716 159.23 173.07C159.433 171.318 160.484 169.95 162.289 169.089C165.464 167.574 165.65 166.418 163.435 161.978C161.4 157.899 162.269 151.135 165.326 147.248C167.252 144.8 167.513 143.237 167.525 134.108C167.537 125.444 167.815 123.591 169.222 122.803C170.303 122.199 171.13 122.224 171.531 122.874C173.082 125.382 174.912 123.777 174.859 119.955C174.825 117.459 175.594 114.915 176.966 112.989C178.154 111.32 179.791 107.717 180.603 104.983C181.98 100.347 181.937 99.5838 179.967 93.6978C178.806 90.2268 176.754 86.3798 175.409 85.1508C172.981 82.9328 172.31 78.5288 173.236 70.8858C173.44 69.2028 173.096 68.4788 172.185 68.6708C170.348 69.0568 167.039 67.9408 167.039 66.9348C167.039 66.4858 167.939 65.8838 169.039 65.5958C171.001 65.0828 171.929 61.8858 170.116 61.8858C169.608 61.8858 167.92 60.8288 166.366 59.5378C164.811 58.2468 162.272 56.8808 160.723 56.5018C158.785 56.0288 158.008 55.2798 158.233 54.0998C158.723 51.5248 162.724 51.3188 163.52 53.8278C164.198 55.9618 167.453 56.6428 168.543 54.8788C169.831 52.7948 175.223 50.6698 176.354 51.8008C176.951 52.3978 178.214 52.8858 179.162 52.8858C180.11 52.8858 182.223 54.0108 183.857 55.3858C185.491 56.7608 187.262 57.8858 187.794 57.8858C188.325 57.8858 190.387 58.9898 192.375 60.3388C195.614 62.5368 196.148 62.6338 197.514 61.2678C198.353 60.4288 199.039 58.8958 199.039 57.8618C199.039 54.8438 201.007 51.6018 204.758 48.4448C207.676 45.9878 209.227 45.4738 214.177 45.3208C217.777 45.2098 220.777 44.5498 221.821 43.6398C222.766 42.8158 225.227 41.3578 227.289 40.3998C231.96 38.2298 232.48 35.3478 228.039 36.2358C225.569 36.7298 225.039 36.5088 225.039 34.9828C225.039 33.9648 224.387 32.5898 223.591 31.9288C222.339 30.8898 222.434 30.1268 224.29 26.3058C225.915 22.9618 226.157 21.6038 225.282 20.7288C224.408 19.8548 223.141 20.4638 220.08 23.2298C215.661 27.2218 213.943 27.6798 212.031 25.3758C211.341 24.5448 208.474 23.1838 205.658 22.3508C199.722 20.5938 191.723 15.0578 189.252 10.9968C186.577 6.5998 180.178 -0.1262 178.792 0.00180037C178.103 0.0658004 176.766 0.3208 175.822 0.5688ZM165.039 2.7118C165.039 5.3508 169.76 9.5648 171.154 8.1708C171.94 7.3848 171.605 6.2178 169.953 3.9838C167.402 0.5328 165.039 -0.0781996 165.039 2.7118ZM182.75 5.9878C184.789 8.2448 186.931 11.0428 187.512 12.2068C189.257 15.7078 198.178 21.8228 204.039 23.5358C207.064 24.4198 209.899 25.7608 210.339 26.5148C210.796 27.2978 212.779 27.8858 214.967 27.8858C217.822 27.8858 219.18 27.3138 220.308 25.6358C221.14 24.3978 222.177 23.7308 222.613 24.1528C223.049 24.5738 222.873 25.4518 222.222 26.1028C220.78 27.5448 220.664 31.5358 222.039 32.3858C222.589 32.7258 223.039 34.0798 223.039 35.3948C223.039 36.7108 223.826 38.2448 224.789 38.8058C226.373 39.7278 226.337 39.8278 224.411 39.8558C223.241 39.8718 221.715 40.5708 221.02 41.4088C220.291 42.2878 218.971 42.6818 217.898 42.3408C216.875 42.0168 216.039 42.1638 216.039 42.6688C216.039 43.1728 214.319 43.4138 212.217 43.2038C208.989 42.8808 207.663 43.4098 203.696 46.6038C200.334 49.3108 198.688 51.5228 197.905 54.3858C197.303 56.5858 196.647 58.9588 196.447 59.6588C196.193 60.5508 195.481 60.3278 194.062 58.9088C192.949 57.7958 191.451 56.8858 190.733 56.8858C190.015 56.8858 187.903 55.7608 186.039 54.3858C184.175 53.0108 181.893 51.8858 180.967 51.8858C180.041 51.8858 178.724 51.2108 178.039 50.3858C176.274 48.2588 173.856 48.5208 169.793 51.2778L166.268 53.6698L164.244 51.6468C161.498 48.9008 157.32 49.9188 156.407 53.5568C155.715 56.3118 157.855 58.8858 160.836 58.8858C162.998 58.8858 168.242 63.6428 166.956 64.4378C166.356 64.8078 165.364 64.6108 164.752 63.9988C162.884 62.1308 160.45 62.7498 158.998 65.4628C157.176 68.8678 154.21 70.4938 153.447 68.5068C153.138 67.7018 153.37 66.1368 153.962 65.0298C155.613 61.9438 155.249 59.0338 153.039 57.6538C151.743 56.8438 151.05 55.3458 151.071 53.3948C151.097 50.9048 151.895 49.9048 155.695 47.5968C160.046 44.9548 160.258 44.6208 159.713 41.2658C159.274 38.5598 159.425 37.9608 160.351 38.7298C161.017 39.2828 163.808 39.8818 166.551 40.0608L171.539 40.3858V35.6048C171.539 32.5988 172.056 30.5018 172.932 29.9568C174.19 29.1748 175.005 26.1758 176.717 16.0228C177.029 14.1728 176.69 10.8568 175.963 8.6548C174.759 5.0068 174.81 4.5268 176.531 3.2678C177.571 2.5078 178.561 1.8858 178.733 1.8858C178.904 1.8858 180.712 3.7318 182.75 5.9878ZM144.706 55.5528C143.492 56.7668 144.015 59.8858 145.432 59.8858C146.742 59.8858 148.039 57.8558 148.039 55.8038C148.039 54.7438 145.692 54.5668 144.706 55.5528ZM170.208 70.8858C171.41 70.8858 171.782 71.3928 171.368 72.4698C170.959 73.5368 170.534 73.6868 170.067 72.9308C169.576 72.1368 168.594 72.1048 166.706 72.8218C163.742 73.9488 163.543 73.6818 165.132 70.7128C165.931 69.2198 166.522 68.9688 167.332 69.7788C167.941 70.3878 169.235 70.8858 170.208 70.8858ZM168.039 76.3548C168.039 77.2468 167.452 77.5978 166.545 77.2498C165.723 76.9338 165.299 76.2738 165.604 75.7808C166.476 74.3688 168.039 74.7368 168.039 76.3548ZM110.039 183.386C111.059 184.615 110.99 184.886 109.661 184.886C108.769 184.886 108.039 184.211 108.039 183.386C108.039 182.561 108.209 181.886 108.417 181.886C108.624 181.886 109.354 182.561 110.039 183.386ZM9.59559 184.136C9.38559 184.824 8.74459 186.861 8.16859 188.664C7.08959 192.046 7.55259 194.886 9.18159 194.886C10.4746 194.886 14.2306 185.83 13.6096 184.211C12.9656 182.532 10.0996 182.479 9.59559 184.136ZM84.3876 184.642C85.0196 185.664 80.2406 191.129 79.2506 190.517C78.6466 190.144 78.4436 185.717 78.9576 184.136C79.1586 183.518 83.9706 183.966 84.3876 184.642ZM88.7286 187.624C87.1906 189.163 87.0386 189.168 87.0386 187.684C87.0386 186.787 87.6016 185.852 88.2886 185.606C90.3316 184.877 90.5366 185.816 88.7286 187.624ZM69.5386 189.886C69.1986 190.436 68.2416 190.886 67.4126 190.886C66.3906 190.886 66.0966 191.493 66.5016 192.768C66.9796 194.277 66.4976 194.738 64.0686 195.095C60.0006 195.692 60.1116 193.643 64.2886 191.061C67.8036 188.888 70.5336 188.277 69.5386 189.886ZM77.1346 191.602C78.7316 192.545 80.0386 194.094 80.0386 195.043C80.0386 195.992 80.4796 197.041 81.0196 197.374C81.5596 197.708 80.4346 199.356 78.5196 201.037C76.6046 202.718 75.0386 204.822 75.0386 205.712C75.0386 206.945 74.6676 206.802 73.4816 205.109C72.6256 203.886 71.0076 202.886 69.8866 202.886C66.9126 202.886 62.0386 206.049 62.0386 207.979C62.0386 208.893 61.3636 210.201 60.5386 210.886C59.7136 211.571 59.0386 212.976 59.0386 214.008C59.0386 215.041 58.3636 215.886 57.5386 215.886C56.7136 215.886 56.0386 215.436 56.0386 214.886C56.0386 214.336 55.3136 213.886 54.4276 213.886C53.1366 213.886 52.9426 213.21 53.4546 210.484C53.9006 208.105 53.6416 206.631 52.5916 205.582C51.2576 204.248 51.3656 203.902 53.5646 202.461C54.9256 201.569 56.0386 200.156 56.0386 199.321C56.0386 198.485 56.5956 197.206 57.2756 196.477C58.3026 195.378 58.6856 195.384 59.5256 196.508C61.1606 198.695 67.9956 197.129 69.0626 194.323C69.7746 192.451 72.4056 190.047 73.8846 189.916C74.0746 189.9 75.5366 190.658 77.1346 191.602ZM14.0386 199.469C14.0386 202.602 16.3866 202.259 16.8586 199.058C17.0706 197.615 16.6506 196.886 15.6086 196.886C14.5876 196.886 14.0386 197.789 14.0386 199.469ZM32.0276 200.358C33.1376 203.277 37.5016 204.702 40.1896 203.024C41.6546 202.109 42.0386 202.157 42.0386 203.255C42.0386 204.017 41.3636 205.201 40.5386 205.886C38.4296 207.637 38.6716 208.694 41.2686 209.066C44.3436 209.507 45.9616 214.173 43.8826 216.606C42.2616 218.502 38.6486 229.334 38.7906 231.87C38.9546 234.813 36.8976 238.64 35.2186 238.513C34.2036 238.436 33.4166 239.247 33.2286 240.563C33.0586 241.761 32.3516 243.212 31.6576 243.787C30.6676 244.609 30.4456 243.751 30.6236 239.792C30.7906 236.072 30.4556 234.6 29.3436 234.173C27.2276 233.361 25.8836 235.82 26.4206 239.521C26.8136 242.229 26.6126 242.587 24.9416 242.15C22.5626 241.528 21.6626 240.236 23.0226 239.396C24.2826 238.617 24.3646 234.205 23.1326 233.444C21.7496 232.589 23.0476 228.968 25.6806 226.335C28.5356 223.48 28.8836 216.887 26.4386 211.986C23.7936 206.683 20.3986 209.028 22.2396 214.886C22.4986 215.711 22.5216 216.048 22.2916 215.636C21.5376 214.287 19.1596 214.848 18.1746 216.607C17.3906 218.008 17.0826 217.591 16.5136 214.357C16.1296 212.173 15.1046 209.824 14.2356 209.136C12.8006 208 12.8046 207.886 14.2756 207.886C15.1666 207.886 16.4906 207.324 17.2176 206.636C17.9436 205.949 19.8366 204.715 21.4236 203.895C23.0106 203.075 24.9746 201.387 25.7886 200.145C27.7566 197.141 30.8456 197.247 32.0276 200.358ZM5.43159 211.797C4.47459 213.418 2.86959 214.958 1.86459 215.221C0.0795895 215.688 -0.708411 219.336 0.788589 220.202C1.88659 220.837 5.17659 219.468 5.24659 218.347C5.28059 217.818 6.14659 216.798 7.17259 216.079C9.11959 214.716 9.72059 210.426 8.10559 209.427C7.59259 209.11 6.38959 210.177 5.43159 211.797ZM25.2066 218.118C24.4646 218.86 24.3346 218.469 24.7696 216.806C25.1236 215.454 25.5766 215 25.8266 215.749C26.0666 216.471 25.7886 217.536 25.2066 218.118ZM24.0186 225.41C23.3226 226.248 22.5476 226.728 22.2956 226.477C21.6026 225.783 23.0116 223.886 24.2196 223.886C24.8836 223.886 24.8076 224.46 24.0186 225.41Z"
							/>
						</clipPath>
					</defs>
				</svg>
				<rect
					id="rectangle"
					x="0"
					y="100%"
					width="100%"
					height="0%"
					fill="#FFFFFF"
					clipPath="url(#circleClip)"
				/>
			</svg>
		</div>
	);
};

export default SplashScreen;
