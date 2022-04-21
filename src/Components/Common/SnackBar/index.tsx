import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="up" />;
}

export default function SnackBar({ isOpen, message, handleSnackClose }: any) {

	return (
		<div>
			<Snackbar
				open={isOpen}
				onClose={handleSnackClose}
				TransitionComponent={SlideTransition}
				message={message}
			/>
		</div>
	);
}
