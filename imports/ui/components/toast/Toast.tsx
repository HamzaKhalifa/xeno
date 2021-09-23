import toast from 'react-hot-toast'

export const info = (content) => {
	toast(content, {
		// icon: <InfoCircleOutlined />,
	})
}

export const success = (successMessage) => {
  toast.success(successMessage)
}

export const error = (content, error = '') => {
  toast.error(content + (error ? ': ' + error : ''))
}

export const warning = (content = '') => {
  toast(content, {
		// icon: <WarningOutlined />,
	})
}
