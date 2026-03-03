import { StatusPage } from '@/components/ui/status-page'

export default function NotFound() {
  return (
    <StatusPage
      title="404"
      message="Could not find the requested resource."
      action={{ type: 'link', label: 'Return Home', href: '/' }}
    />
  )
}
