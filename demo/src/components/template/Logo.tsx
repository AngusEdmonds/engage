import classNames from 'classnames'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    imgClass?: string
    logoWidth?: number | string
}

const LOGO_SRC_PATH = '/img/logo/'

const Logo = (props: LogoProps) => {
    const {
        type = 'full',
        mode = 'light',
        className,
        imgClass,
        style,
        logoWidth = 'auto',
    } = props

    return (
        <div
            className={classNames('logo', 'mt-[10px] md:mt-9 md:mb-2', className)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <img
                className={classNames(imgClass, 'h-6 w-auto max-w-[120px]')}
                src={`${LOGO_SRC_PATH}logo-${mode}-${type}.svg`}
                alt={`${APP_NAME} logo`}
            />
        </div>
    )
}

export default Logo
