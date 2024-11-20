interface Notifier {
  onSubmit: (data: any) => void
  onCancel: () => void
}
interface ComponentOptions extends VDialog, Notifier {
  to: string
}

interface ToastOptions extends Notifier {
  title: string
  text: string
}

type ConfirmOptions = ToastOptions
type AlertOptions = Omit<ConfirmOptions, 'onCancel'> & {
  isConfirm?: boolean
}
