import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(user)/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello dogooooooo!</div>
}
