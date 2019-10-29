import Link from 'next/link';

import Button from './button';

const GoToCart = (
    <Link href="/cart-list">
        <Button 
            imgSrc="/icons8-shopping-cart-64.png"
            text="購物車"
        />
    </Link>
);

export default GoToCart;