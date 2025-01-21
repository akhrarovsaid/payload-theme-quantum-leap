import Image from 'next/image'

import './index.scss'

const baseClass = 'before-login'

export const BeforeLogin = () => {
  return (
    <aside className={baseClass}>
      <div className={`${baseClass}__image-wrap`}>
        <Image src="/image-login1.webp" alt="" fill />
      </div>
    </aside>
  )
}
