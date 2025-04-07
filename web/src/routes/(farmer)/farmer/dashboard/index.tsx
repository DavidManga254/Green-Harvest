import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(farmer)/farmer/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(farmer)/farmer/Dashboard/"!</div>
}
