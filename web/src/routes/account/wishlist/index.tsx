import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/wishlist/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/wishlist/"!</div>
}
