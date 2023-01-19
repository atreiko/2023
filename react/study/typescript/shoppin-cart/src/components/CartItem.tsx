import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()

  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack className='d-flex align-items-center' direction='horizontal' gap={2}>
      <img src={item.imgUrl} style={{ width: '125px', height: '75px', objectFit: 'cover'}} />
      <div className='me-auto'>
        <div>
          {item.name} 
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65em'}}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem'}}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button 
        variant='outline-danger'
        size='sm'
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
