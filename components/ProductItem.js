import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	// CardMedia,
	Typography,
} from '@material-ui/core'
import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Rating from '@material-ui/lab/Rating'

export default function ProductItem({ product, addToCartHandler }) {
	return (
		<Card>
			<NextLink href={`/product/${product.slug}`} passHref>
				<CardActionArea>
					<Image
						src={product.image}
						alt={product.name}
						width={600}
						height={600}
						// layout='responsive'
					/>
					{/* <CardMedia
						component='img'
						image={product.image}
						title={product.name}
						// height='400'
					/> */}
					<CardContent>
						<Typography>{product.name}</Typography>
						<Rating value={product.rating} readOnly />
					</CardContent>
				</CardActionArea>
			</NextLink>
			<CardActions>
				<Typography>£{product.price}</Typography>
				<Button
					size='small'
					color='primary'
					onClick={() => addToCartHandler(product)}
					disabled={product.countInStock < 1}
				>
					{product && product.countInStock > 0 ? (
						'Add to Basket'
					) : (
						'Out of Stock'
					)}
				</Button>
			</CardActions>
		</Card>
	)
}
