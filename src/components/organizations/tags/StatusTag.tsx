type Status = 'Blocked' | 'Pending' | 'Approved'

type StatusStyle = {
  color: string
  backgroundColor: string
  borderColor: string
}

const getStatusColor = (status: Status): StatusStyle => {
  let clr: string

  switch (status) {
    case 'Blocked':
      clr = 'var(--c-danger)'
      return {
        color: clr,
        backgroundColor: `color-mix(in srgb, ${clr} 20%, transparent)`,
        borderColor: `color-mix(in srgb, ${clr} 20%, transparent)`,
      }

    case 'Pending':
      clr = 'var(--c-prospective)'
      return {
        color: clr,
        backgroundColor: `color-mix(in srgb, ${clr} 26%, transparent)`,
        borderColor: `color-mix(in srgb, ${clr} 26%, transparent)`,
      }

    case 'Approved':
      clr = 'var(--c-success)'
      return {
        color: clr,
        backgroundColor: `color-mix(in srgb, ${clr} 20%, transparent)`,
        borderColor: `#3FA36C`,
      }
  }
}

function StatusTag({ status }: { status: Status }) {
  const styleTag = getStatusColor(status)

  return (
    <div className="flex justify-center w-full items-center">
      <div
        className="py-1.5 px-3 rounded-lg border w-full max-w-[122px] leading-[1.4] flex justify-center items-center"
        style={styleTag}
      >
        {status}
      </div>
    </div>
  )
}

export default StatusTag
