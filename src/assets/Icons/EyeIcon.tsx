import React, { FC } from 'react'
import Svg, { Path } from "react-native-svg"

const BackArrow: FC = () => {
    return (
        <Svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11 2.5C12.8387 2.49389 14.6419 3.00678 16.2021 3.97973C17.7624 4.95267 19.0164 6.34616 19.82 8C18.17 11.37 14.8 13.5 11 13.5C7.2 13.5 3.83 11.37 2.18 8C2.98362 6.34616 4.23763 4.95267 5.79788 3.97973C7.35813 3.00678 9.16126 2.49389 11 2.5M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 5.5C11.663 5.5 12.2989 5.76339 12.7678 6.23223C13.2366 6.70107 13.5 7.33696 13.5 8C13.5 8.66304 13.2366 9.29893 12.7678 9.76777C12.2989 10.2366 11.663 10.5 11 10.5C10.337 10.5 9.70107 10.2366 9.23223 9.76777C8.76339 9.29893 8.5 8.66304 8.5 8C8.5 7.33696 8.76339 6.70107 9.23223 6.23223C9.70107 5.76339 10.337 5.5 11 5.5M11 3.5C8.52 3.5 6.5 5.52 6.5 8C6.5 10.48 8.52 12.5 11 12.5C13.48 12.5 15.5 10.48 15.5 8C15.5 5.52 13.48 3.5 11 3.5Z" fill="#C7C7C7" />
        </Svg>
    )
}

export default BackArrow