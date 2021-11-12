import {
	EmailShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	EmailIcon,
} from 'react-share'
import { Grid, Typography } from '@material-ui/core'

const SocialShare = (props) => {
	const { product } = props

	const shareMsg = `I ♥ ${product.name} product on Riggsie Art.  Check it out here, https://www.riggsieart/product/${product.slug}`

	return (
		<Grid
			style={{
				display        : 'flex',
				justifyContent : 'space-around',
			}}
		>
			<Typography>
				<FacebookShareButton url={`${shareMsg}`} className='share-btn facebook'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
			</Typography>
			<Typography>
				<TwitterShareButton url={`${shareMsg}`} className='share-btn facebook'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</Typography>
			<Typography>
				<EmailShareButton url={`${shareMsg}`} className='share-btn envelope'>
					<EmailIcon size={32} round={true} />
				</EmailShareButton>
			</Typography>
			<Typography>
				<WhatsappShareButton url={`${shareMsg}`} className='share-btn whatsapp'>
					<WhatsappIcon size={32} round={true} />
				</WhatsappShareButton>
			</Typography>
		</Grid>
	)
}

export default SocialShare
