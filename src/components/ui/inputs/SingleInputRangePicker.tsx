import { useState } from 'react'
import { Input, Popover, Calendar } from 'antd'
import type { Dayjs } from 'dayjs'

export default function SingleInputRangePicker() {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<{
    start: Dayjs | null
    end: Dayjs | null
  }>({
    start: null,
    end: null,
  })

  const handleSelect = (date: Dayjs) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null })
    } else {
      setRange({ ...range, end: date })
      setOpen(false)
    }
  }

  const displayValue =
    range.start && range.end
      ? `${range.start.format('YYYY-MM-DD')} ~ ${range.end.format('YYYY-MM-DD')}`
      : ''

  return (
    <Popover
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      overlayStyle={{ width: 320 }} // عرض الـ popover
      content={
        <div style={{ width: 300 }}>
          <Calendar fullscreen={false} onSelect={handleSelect} />
        </div>
      }
    >
      <Input
        readOnly
        value={displayValue}
        placeholder="Start date ~ End date"
        onClick={() => setOpen(true)}
        style={{ width: 260 }} // عرض الـ input ثابت
      />
    </Popover>
  )
}
